import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";

import { SECTION_BADGE_VARIANTS, SECTION_NUMBER_COLORS } from "../../presets";
import type { ResponseGroup } from "../../types";
import { QuestionCard } from "./parts/question-card";

interface SectionGroupProps {
  group: ResponseGroup;
  sectionIndex: number;
  startNumber: number;
}

export function SectionGroup({
  group,
  sectionIndex,
  startNumber,
}: SectionGroupProps) {
  const t = useTranslations("tests.preview");

  const badgeVariant =
    SECTION_BADGE_VARIANTS[sectionIndex % SECTION_BADGE_VARIANTS.length];
  const numberColor =
    SECTION_NUMBER_COLORS[sectionIndex % SECTION_NUMBER_COLORS.length];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full items-center justify-between">
        <h2 className="font-heading text-deep-brown text-lg font-semibold">
          {t("sectionTitle", { number: sectionIndex + 1, name: group.name })}
        </h2>
        <Badge variant={badgeVariant}>
          {t("questionCount", { count: group.questions.length })}
        </Badge>
      </div>
      <div className="flex flex-col gap-5">
        {group.questions.map((question, i) => (
          <QuestionCard
            key={i}
            question={question}
            questionNumber={startNumber + i}
            numberColorClass={numberColor}
          />
        ))}
      </div>
    </div>
  );
}
