"use client";

import { useState } from "react";

import { Form } from "@/components/ui/form";
import type { TestItemV2 } from "@/features/tests/types";

import { TestEditModeProvider, type TestEditMode } from "./context";
import { useTestEditForm } from "./hooks/use-test-edit-form";
import { SectionGroup } from "./parts/section-group";
import { TestHeader } from "./parts/test-header";

interface TestPreviewProps {
  test: TestItemV2;
}

export function TestPreview({ test }: TestPreviewProps) {
  const form = useTestEditForm(test);
  const [mode, setMode] = useState<TestEditMode>("preview");

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
        <div className="flex w-190 flex-col gap-8">
          <TestHeader totalQuestions={totalQuestions} />
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
