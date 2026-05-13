import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { BADGE_VARIANTS } from "@/features/marketplace/presets";
import {
  getTotalQuestions,
  getUniqueTypes,
} from "@/features/marketplace/utils";
import type { TestItemV2 } from "@/features/tests/types";
import { Link } from "@/i18n/navigation";

interface TestCardProps {
  test: TestItemV2;
  index: number;
}

export function TestCard({ test, index }: TestCardProps) {
  const t = useTranslations("marketplace");

  const { subject, difficulty_level, groups } = test.test_request;
  const name = test.test_response?.metadata.name ?? subject;
  const totalQuestions = getTotalQuestions(groups);
  const types = getUniqueTypes(groups);
  const typeLabels = types.map((type) => t(`questionTypes.${type}`)).join(", ");
  const meta = `${t("questions", { count: totalQuestions })} · ${t(`difficulties.${difficulty_level}`)} · ${typeLabels}`;

  return (
    <Link href={`/tests/${test.id}`}>
      <div className="border-deep-brown/4 hover:border-deep-brown/10 flex flex-col gap-4 rounded-[20px] border bg-white p-5 transition-colors md:p-6">
        <Badge variant={BADGE_VARIANTS[index % BADGE_VARIANTS.length]}>
          {subject}
        </Badge>
        <h3 className="font-heading text-deep-brown text-lg font-semibold">
          {name}
        </h3>
        <p className="text-2xs text-deep-brown/40">{meta}</p>
      </div>
    </Link>
  );
}
