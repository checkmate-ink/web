"use client";

import { useSyncExternalStore } from "react";

import {
  getSavedTestsSnapshot,
  subscribeSavedTests,
  type SavedTest,
} from "@/features/tests/lib/saved-tests";

const EMPTY: SavedTest[] = [];

export function useSavedTests(): SavedTest[] {
  return useSyncExternalStore(
    subscribeSavedTests,
    getSavedTestsSnapshot,
    () => EMPTY,
  );
}
