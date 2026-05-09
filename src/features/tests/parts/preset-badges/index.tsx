import {
  BookOpen,
  Calculator,
  FlaskConical,
  Landmark,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";

interface PresetBadgesProps {
  onSelect: (preset: string) => void;
}

export function PresetBadges({ onSelect }: PresetBadgesProps) {
  const t = useTranslations("landing.testForm");

  return (
    <div className="flex flex-wrap gap-2.5">
      <Badge
        variant="yellow"
        hasIcon
        pressable
        onClick={() => onSelect("biology")}
      >
        <FlaskConical />
        {t("presetBiology")}
      </Badge>
      <Badge
        variant="blue"
        hasIcon
        pressable
        onClick={() => onSelect("english")}
      >
        <BookOpen />
        {t("presetEnglish")}
      </Badge>
      <Badge
        variant="green"
        hasIcon
        pressable
        onClick={() => onSelect("history")}
      >
        <Landmark />
        {t("presetHistory")}
      </Badge>
      <Badge
        variant="pink"
        hasIcon
        pressable
        onClick={() => onSelect("math")}
      >
        <Calculator />
        {t("presetMath")}
      </Badge>
    </div>
  );
}
