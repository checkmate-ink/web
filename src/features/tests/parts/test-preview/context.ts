"use client";

import { createContext, useContext } from "react";

export type TestEditMode = "preview" | "edit";

interface TestEditModeContextValue {
  mode: TestEditMode;
  setMode: (mode: TestEditMode) => void;
}

const TestEditModeContext = createContext<TestEditModeContextValue | null>(
  null,
);

export const TestEditModeProvider = TestEditModeContext.Provider;

export function useTestEditMode() {
  const ctx = useContext(TestEditModeContext);
  if (!ctx) {
    throw new Error("useTestEditMode must be used within TestEditModeProvider");
  }
  return ctx;
}
