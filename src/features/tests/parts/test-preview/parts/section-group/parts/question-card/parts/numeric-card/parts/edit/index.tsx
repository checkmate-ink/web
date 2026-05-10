import { useTranslations } from "next-intl";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";

interface NumericEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function NumericEdit({ sectionIndex, questionIndex }: NumericEditProps) {
  const t = useTranslations("tests.edit");
  const { register } = useTestEditFormContext();
  const basePath = `groups.${sectionIndex}.questions.${questionIndex}` as const;

  return (
    <div className="flex gap-4">
      <div className="flex flex-1 flex-col gap-1.5">
        <Label>{t("answer")}</Label>
        <Input
          type="number"
          {...register(`${basePath}.answer`, { valueAsNumber: true })}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <Label>{t("tolerance")}</Label>
        <Input
          type="number"
          {...register(`${basePath}.tolerance`, { valueAsNumber: true })}
        />
      </div>
    </div>
  );
}
