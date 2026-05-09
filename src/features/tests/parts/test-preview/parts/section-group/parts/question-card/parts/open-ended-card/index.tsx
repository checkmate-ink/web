import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";

import type { components } from "@/lib/api/schema";

type OpenEndedQuestion = components["schemas"]["OpenEndedQuestion"];

interface OpenEndedCardProps {
  question: OpenEndedQuestion;
}

export function OpenEndedCard({ question }: OpenEndedCardProps) {
  const t = useTranslations("tests.preview");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <FileText className="text-deep-brown/33 size-4" />
        <span className="text-deep-brown/33 text-2xs font-medium">
          {t("answer")}
        </span>
      </div>
      <div className="border-deep-brown/4 bg-cream-background rounded-md border px-4 py-3">
        <p className="text-deep-brown text-sm">
          {question.correct_keywords.join(", ")}
        </p>
      </div>
    </div>
  );
}
