import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { QUESTION_TYPE_BADGE } from "../../../../../../presets";
import type { QuestionType } from "@/features/tests/types";

interface QuestionHeaderProps {
  questionNumber: number;
  questionText: string;
  questionType: QuestionType;
  numberColorClass: string;
}

export function QuestionHeader({
  questionNumber,
  questionText,
  questionType,
  numberColorClass,
}: QuestionHeaderProps) {
  const t = useTranslations("tests.preview.questionTypes");

  return (
    <div className="flex w-full items-center gap-3">
      <div
        className={cn(
          "text-deep-brown flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
          numberColorClass,
        )}
      >
        {questionNumber}
      </div>
      <p className="text-deep-brown text-md min-w-0 flex-1 font-medium">
        {questionText}
      </p>
      <Badge variant={QUESTION_TYPE_BADGE[questionType]} className="shrink-0">
        {t(questionType)}
      </Badge>
    </div>
  );
}
