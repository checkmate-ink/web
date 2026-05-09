import type { ResponseQuestion } from "@/features/tests/types";

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
  question: ResponseQuestion;
  questionNumber: number;
  numberColorClass: string;
}

export function QuestionCard({
  question,
  questionNumber,
  numberColorClass,
}: QuestionCardProps) {
  return (
    <div className="border-deep-brown/4 flex flex-col gap-5 rounded-2xl border bg-white p-7">
      <QuestionHeader
        questionNumber={questionNumber}
        questionText={question.question}
        questionType={question.type}
        numberColorClass={numberColorClass}
      />
      <QuestionContent question={question} />
    </div>
  );
}

function QuestionContent({ question }: { question: ResponseQuestion }) {
  switch (question.type) {
    case "MCQ_SINGLE":
      return <McqSingleCard question={question} />;
    case "MCQ_MULTIPLE":
      return <McqMultipleCard question={question} />;
    case "TRUE_FALSE":
      return <TrueFalseCard question={question} />;
    case "FILL_IN":
      return <FillInCard question={question} />;
    case "OPEN_ENDED":
      return <OpenEndedCard question={question} />;
    case "SHORT_ANSWER":
      return <ShortAnswerCard question={question} />;
    case "ORDERING":
      return <OrderingCard question={question} />;
    case "PAIRS":
      return <PairsCard question={question} />;
    case "CATEGORIZATION":
      return <CategorizationCard question={question} />;
    case "NUMERIC":
      return <NumericCard question={question} />;
  }
}
