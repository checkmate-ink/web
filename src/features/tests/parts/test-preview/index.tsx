"use client";

import { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

import { Form } from "@/components/ui/form";
import { updateSavedTestForm } from "@/features/tests/lib/saved-tests";
import type { TestItemV2 } from "@/features/tests/types";

import { TestEditModeProvider, type TestEditMode } from "./context";
import { useTestEditForm } from "./hooks/use-test-edit-form";
import { SectionGroup } from "./parts/section-group";
import { TestHeader } from "./parts/test-header";
import type { TestEditValues } from "./types";

interface TestPreviewProps {
  test: TestItemV2;
  initialValues?: TestEditValues;
  autoSaveId?: string;
}

export function TestPreview({
  test,
  initialValues,
  autoSaveId,
}: TestPreviewProps) {
  const form = useTestEditForm(test, initialValues);
  const [mode, setMode] = useState<TestEditMode>("preview");

  const persist = useDebounceCallback((values: TestEditValues) => {
    if (autoSaveId) updateSavedTestForm(autoSaveId, values);
  }, 300);

  useEffect(() => {
    if (!autoSaveId) return;
    const sub = form.watch((data) => {
      persist(data as TestEditValues);
    });
    return () => {
      sub.unsubscribe();
      persist.cancel();
    };
  }, [autoSaveId, form, persist]);

  const groups = form.watch("groups");

  const totalQuestions = groups.reduce((sum, g) => sum + g.questions.length, 0);

  const startNumbers = groups.reduce<number[]>((acc, _group, i) => {
    const start = i === 0 ? 1 : acc[i - 1] + groups[i - 1].questions.length;
    acc.push(start);
    return acc;
  }, []);

  return (
    <TestEditModeProvider value={{ mode, setMode }}>
      <Form {...form}>
        <div className="flex w-full flex-col gap-6 md:gap-8">
          <TestHeader test={test} totalQuestions={totalQuestions} />
          {groups.map((group, i) => (
            <SectionGroup
              key={group.name}
              group={group}
              sectionIndex={i}
              startNumber={startNumbers[i]}
            />
          ))}
        </div>
      </Form>
    </TestEditModeProvider>
  );
}
