import { GripVertical, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useTestEditMode } from "../../../../context";
import { useTestEditFormContext } from "../../../../hooks/use-test-edit-form";
import type { EditableQuestion } from "../../../../types";
import { CategorizationCard } from "./parts/categorization-card";
import { FillInCard } from "./parts/fill-in-card";
import { McqMultipleCard } from "./parts/mcq-multiple-card";
import { McqSingleCard } from "./parts/mcq-single-card";
import { NumericCard } from "./parts/numeric-card";
import { OpenEndedCard } from "./parts/open-ended-card";
import { OrderingCard } from "./parts/ordering-card";
import { PairsCard } from "./parts/pairs-card";
import { QuestionHeader } from "./parts/question-header";
import { ShortAnswerCard } from "./parts/short-answer-card";
import { TrueFalseCard } from "./parts/true-false-card";

interface QuestionCardProps {
  question: EditableQuestion;
  questionNumber: number;
  numberColorClass: string;
  sectionIndex: number;
  questionIndex: number;
  onDelete: () => void;
}

export function QuestionCard({
  question,
  questionNumber,
  numberColorClass,
  sectionIndex,
  questionIndex,
  onDelete,
}: QuestionCardProps) {
  const { mode } = useTestEditMode();
  const { register } = useTestEditFormContext();

  const isEdit = mode === "edit";
  const fieldPrefix =
    `groups.${sectionIndex}.questions.${questionIndex}` as const;

  if (isEdit) {
    return (
      <div className="flex w-full">
        <div className="flex w-10 shrink-0 items-start justify-center pt-6">
          <GripVertical className="text-deep-brown/25 size-5 cursor-grab" />
        </div>
        <div className="border-deep-brown/4 flex min-w-0 flex-1 flex-col gap-4 rounded-2xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <QuestionHeader
              questionNumber={questionNumber}
              questionText={question.question}
              questionType={question.type}
              numberColorClass={numberColorClass}
              compact
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-error size-8 shrink-0"
              onClick={onDelete}
            >
              <Trash2 className="size-4.5" />
            </Button>
          </div>
          <Textarea {...register(`${fieldPrefix}.question`)} rows={2} />
          <QuestionContent
            question={question}
            sectionIndex={sectionIndex}
            questionIndex={questionIndex}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="border-deep-brown/4 flex flex-col gap-5 rounded-2xl border bg-white p-7">
      <QuestionHeader
        questionNumber={questionNumber}
        questionText={question.question}
        questionType={question.type}
        numberColorClass={numberColorClass}
      />
      <QuestionContent
        question={question}
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    </div>
  );
}

interface QuestionContentProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

function QuestionContent({
  question,
  sectionIndex,
  questionIndex,
}: QuestionContentProps) {
  const props = { question, sectionIndex, questionIndex };

  switch (question.type) {
    case "MCQ_SINGLE":
      return <McqSingleCard {...props} />;
    case "MCQ_MULTIPLE":
      return <McqMultipleCard {...props} />;
    case "TRUE_FALSE":
      return <TrueFalseCard {...props} />;
    case "FILL_IN":
      return <FillInCard {...props} />;
    case "OPEN_ENDED":
      return <OpenEndedCard {...props} />;
    case "SHORT_ANSWER":
      return <ShortAnswerCard {...props} />;
    case "ORDERING":
      return <OrderingCard {...props} />;
    case "PAIRS":
      return <PairsCard {...props} />;
    case "CATEGORIZATION":
      return <CategorizationCard {...props} />;
    case "NUMERIC":
      return <NumericCard {...props} />;
  }
}
