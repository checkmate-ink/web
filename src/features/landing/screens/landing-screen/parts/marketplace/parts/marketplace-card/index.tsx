import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { BADGE_VARIANTS } from "@/features/marketplace/presets";
import {
  getTotalQuestions,
  getUniqueTypes,
} from "@/features/marketplace/utils";
import type { TestItemV2 } from "@/features/tests/types";
import { Link } from "@/i18n/navigation";

import { FadeIn } from "../../../fade-in";

interface MarketplaceCardProps {
  test: TestItemV2;
  index: number;
}

export function MarketplaceCard({ test, index }: MarketplaceCardProps) {
  const t = useTranslations("landing");

  const { subject, difficulty_level, groups } = test.test_request;
  const name = test.test_response?.metadata.name ?? subject;
  const totalQuestions = getTotalQuestions(groups);
  const types = getUniqueTypes(groups);
  const typeLabels = types
    .map((type) => t(`testForm.questionTypes.${type}`))
    .join(", ");
  const meta = `${totalQuestions} questions · ${t(`testForm.difficulties.${difficulty_level}`)} · ${typeLabels}`;

  return (
    <FadeIn delay={index * 0.1} className="flex flex-1">
      <Link href={`/tests/${test.id}`} className="flex flex-1">
        <div className="border-deep-brown/4 hover:border-deep-brown/10 flex flex-1 flex-col gap-4 rounded-[20px] border bg-white p-6 transition-colors">
          <Badge variant={BADGE_VARIANTS[index % BADGE_VARIANTS.length]}>
            {subject}
          </Badge>
          <h3 className="font-heading text-deep-brown text-lg font-semibold">
            {name}
          </h3>
          <p className="text-2xs text-deep-brown/40">{meta}</p>
        </div>
      </Link>
    </FadeIn>
  );
}
