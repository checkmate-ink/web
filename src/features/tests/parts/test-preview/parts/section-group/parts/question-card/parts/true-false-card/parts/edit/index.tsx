import { useWatch } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

interface TrueFalseEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function TrueFalseEdit({
  sectionIndex,
  questionIndex,
}: TrueFalseEditProps) {
  const t = useTranslations("tests.edit");
  const { control, setValue } = useTestEditFormContext();
  const fieldPath =
    `groups.${sectionIndex}.questions.${questionIndex}.is_true` as const;
  const isTrue = useWatch<TestEditValues>({ control, name: fieldPath });

  function handleChange(checked: boolean) {
    setValue(fieldPath, checked);
  }

  return (
    <div className="flex w-full items-center gap-3">
      <Label>{t("correctAnswer")}</Label>
      <Switch checked={!!isTrue} onCheckedChange={handleChange} />
      <Label>{isTrue ? "True" : "False"}</Label>
    </div>
  );
}
