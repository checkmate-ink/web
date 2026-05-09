"use client";

import type { TestItemV2 } from "./types";
import { SectionGroup } from "./parts/section-group";
import { TestHeader } from "./parts/test-header";

interface TestPreviewProps {
  test: TestItemV2;
}

export function TestPreview({ test }: TestPreviewProps) {
  const { test_request, test_response } = test;

  if (!test_response) return null;

  const { metadata, groups } = test_response;
  const totalQuestions = groups.reduce((sum, g) => sum + g.questions.length, 0);

  const startNumbers = groups.reduce<number[]>((acc, _group, i) => {
    const start = i === 0 ? 1 : acc[i - 1] + groups[i - 1].questions.length;
    acc.push(start);
    return acc;
  }, []);

  return (
    <div className="flex w-[760px] flex-col gap-8">
      <TestHeader
        title={metadata.name}
        totalQuestions={totalQuestions}
        difficulty={test_request.difficulty_level}
        language={test_request.language}
      />
      {groups.map((group, i) => (
        <SectionGroup
          key={group.name}
          group={group}
          sectionIndex={i}
          startNumber={startNumbers[i]}
        />
      ))}
    </div>
  );
}
