import { Plus, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

interface McqSingleEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function McqSingleEdit({
  sectionIndex,
  questionIndex,
}: McqSingleEditProps) {
  "use no memo";

  const t = useTranslations("tests.edit");
  const { control, register, watch, setValue, getValues } =
    useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.options` as const;
  const { append, remove } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });
  const options = watch(basePath);

  const correctLabel = options.find((o) => o.is_correct)?.label ?? "";

  function handleCorrectChange(label: string) {
    const updated = getValues(basePath).map((opt) => ({
      ...opt,
      is_correct: opt.label === label,
    }));
    setValue(basePath, updated);
  }

  function handleAdd() {
    const nextLabel = String.fromCharCode(65 + options.length);
    append({ label: nextLabel, text: "", is_correct: false });
  }

  return (
    <RadioGroup
      value={correctLabel}
      onValueChange={handleCorrectChange}
      className="gap-2"
    >
      {options.map((option, i) => (
        <div key={i} className="flex w-full items-center gap-2">
          <RadioGroupItem value={option.label} />
          <Input {...register(`${basePath}.${i}.text`)} className="flex-1" />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-deep-brown/30 size-8 shrink-0"
            onClick={() => remove(i)}
          >
            <X className="size-4" />
          </Button>
        </div>
      ))}
      <Button type="button" variant="ghost" size="sm" onClick={handleAdd}>
        <Plus className="size-3.5" />
        {t("addOption")}
      </Button>
    </RadioGroup>
  );
}
