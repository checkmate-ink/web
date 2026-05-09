import { FileText } from "lucide-react";
import { useTranslations } from "next-intl";

import type { components } from "@/lib/api/schema";

type NumericQuestion = components["schemas"]["NumericQuestion"];

interface NumericCardProps {
  question: NumericQuestion;
}

export function NumericCard({ question }: NumericCardProps) {
  const t = useTranslations("tests.preview");

  const display = question.tolerance
    ? `${question.answer} (±${question.tolerance})`
    : String(question.answer);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <FileText className="text-deep-brown/33 size-4" />
        <span className="text-deep-brown/33 text-2xs font-medium">
          {t("answer")}
        </span>
      </div>
      <div className="border-deep-brown/4 bg-cream-background flex h-11 items-center rounded-md border px-4">
        <span className="text-deep-brown text-sm font-medium">{display}</span>
      </div>
    </div>
  );
}
