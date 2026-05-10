import { ArrowRight, Plus, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

interface PairsEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function PairsEdit({ sectionIndex, questionIndex }: PairsEditProps) {
  const t = useTranslations("tests.edit");
  const { control, register } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.pair_items` as const;
  const { fields, append, remove } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });

  function handleAdd() {
    append({ item_a: "", item_b: "" });
  }

  return (
    <div className="flex flex-col gap-2">
      {fields.map((field, i) => (
        <div key={field.id} className="flex w-full items-center gap-2">
          <Input
            {...register(`${basePath}.${i}.item_a`)}
            className="bg-soft-blue/50 flex-1"
          />
          <ArrowRight className="text-deep-brown/30 size-4 shrink-0" />
          <Input {...register(`${basePath}.${i}.item_b`)} className="flex-1" />
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
        {t("addPair")}
      </Button>
    </div>
  );
}
