import { Plus, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

interface McqMultipleEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function McqMultipleEdit({
  sectionIndex,
  questionIndex,
}: McqMultipleEditProps) {
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

  function handleToggleCorrect(index: number) {
    const updated = getValues(basePath).map((opt, i) => ({
      ...opt,
      is_correct: i === index ? !opt.is_correct : opt.is_correct,
    }));
    setValue(basePath, updated);
  }

  function handleAdd() {
    const nextLabel = String.fromCharCode(65 + options.length);
    append({ label: nextLabel, text: "", is_correct: false });
  }

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, i) => (
        <div key={i} className="flex w-full items-center gap-2">
          <Checkbox
            checked={option.is_correct}
            onCheckedChange={() => handleToggleCorrect(i)}
          />
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
    </div>
  );
}
