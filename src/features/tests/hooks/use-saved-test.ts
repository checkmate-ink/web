"use client";

import { useSyncExternalStore } from "react";

import {
  getSavedTestsSnapshot,
  subscribeSavedTests,
  type SavedTest,
} from "@/features/tests/lib/saved-tests";

export type SavedTestState =
  | { status: "loading" }
  | { status: "found"; entry: SavedTest }
  | { status: "missing" };

const LOADING: SavedTestState = { status: "loading" };

export function useSavedTest(id: string): SavedTestState {
  const list = useSyncExternalStore(
    subscribeSavedTests,
    getSavedTestsSnapshot,
    () => null,
  );
  if (list === null) return LOADING;
  const entry = list.find((t) => t.id === id);
  return entry ? { status: "found", entry } : { status: "missing" };
}
