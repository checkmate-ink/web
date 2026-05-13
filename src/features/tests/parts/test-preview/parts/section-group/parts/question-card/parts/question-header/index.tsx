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
  compact?: boolean;
}

export function QuestionHeader({
  questionNumber,
  questionText,
  questionType,
  numberColorClass,
  compact,
}: QuestionHeaderProps) {
  const t = useTranslations("tests.preview.questionTypes");

  return (
    <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2">
      <div
        className={cn(
          "text-deep-brown flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
          numberColorClass,
        )}
      >
        {questionNumber}
      </div>
      {!compact && (
        <p className="text-deep-brown text-md order-last basis-full font-medium sm:order-0 sm:min-w-0 sm:flex-1 sm:basis-0">
          {questionText}
        </p>
      )}
      <Badge
        variant={QUESTION_TYPE_BADGE[questionType]}
        className="ml-auto shrink-0 sm:ml-0"
      >
        {t(questionType)}
      </Badge>
    </div>
  );
}
