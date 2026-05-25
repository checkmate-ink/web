import type { TestEditValues } from "@/features/tests/parts/test-preview/types";
import type { TestItemV2 } from "@/features/tests/types";

const STORAGE_KEY = "checkmate:saved-tests:v1";
const CHANGE_EVENT = "checkmate:saved-tests:changed";

export interface SavedTest {
  id: string;
  title: string;
  questionCount: number;
  savedAt: string;
  test: TestItemV2;
  formValues?: TestEditValues;
}

const EMPTY_LIST: SavedTest[] = [];
let cachedRaw: string | null = null;
let cachedList: SavedTest[] = EMPTY_LIST;

function readAll(): SavedTest[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SavedTest[]) : [];
  } catch {
    return [];
  }
}

function writeAll(items: SavedTest[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Cached snapshot of the saved-tests list, suitable for useSyncExternalStore. */
export function getSavedTestsSnapshot(): SavedTest[] {
  if (typeof window === "undefined") return EMPTY_LIST;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedList;
  cachedRaw = raw;
  cachedList = readAll().sort((a, b) => b.savedAt.localeCompare(a.savedAt));
  return cachedList;
}

export function subscribeSavedTests(onChange: () => void) {
  const handler = () => onChange();
  window.addEventListener(CHANGE_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function saveTest(
  test: TestItemV2,
  override?: { title?: string; formValues?: TestEditValues },
): SavedTest {
  const all = readAll();
  const fv = override?.formValues;
  const title =
    override?.title?.trim() ||
    fv?.title?.trim() ||
    test.test_response?.metadata.name ||
    test.test_request.subject;
  const questionCount =
    fv?.groups.reduce((sum, g) => sum + g.questions.length, 0) ??
    test.test_response?.groups.reduce(
      (sum, g) => sum + g.questions.length,
      0,
    ) ??
    0;

  const entry: SavedTest = {
    id: `${test.id}-${Date.now()}`,
    title,
    questionCount,
    savedAt: new Date().toISOString(),
    test,
    formValues: fv,
  };

  writeAll([entry, ...all]);
  return entry;
}

export function removeSavedTest(id: string) {
  writeAll(readAll().filter((t) => t.id !== id));
}

export function updateSavedTestForm(id: string, formValues: TestEditValues) {
  const all = readAll();
  const idx = all.findIndex((t) => t.id === id);
  if (idx === -1) return;
  const questionCount = formValues.groups.reduce(
    (sum, g) => sum + g.questions.length,
    0,
  );
  all[idx] = {
    ...all[idx],
    title: formValues.title.trim() || all[idx].title,
    questionCount,
    formValues,
  };
  writeAll(all);
}
