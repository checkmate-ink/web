import { Plus, X } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useTestEditFormContext } from "../../../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../../../types";

interface CategoryBoxProps {
  sectionIndex: number;
  questionIndex: number;
  categoryIndex: number;
  onRemove: () => void;
}

export function CategoryBox({
  sectionIndex,
  questionIndex,
  categoryIndex,
  onRemove,
}: CategoryBoxProps) {
  const t = useTranslations("tests.edit");
  const { control, register } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.category_items.${categoryIndex}.items` as const;
  const { fields, append, remove } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });

  function handleAddItem() {
    append({ value: "" });
  }

  return (
    <div className="bg-cream-background flex flex-1 flex-col gap-2 rounded-xl p-4">
      <div className="flex items-center gap-2">
        <Input
          {...register(
            `groups.${sectionIndex}.questions.${questionIndex}.category_items.${categoryIndex}.category`,
          )}
          className="flex-1 font-semibold"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-deep-brown/30 size-7 shrink-0"
          onClick={onRemove}
        >
          <X className="size-3.5" />
        </Button>
      </div>
      <div className="flex flex-col gap-1.5">
        {fields.map((field, itemIndex) => (
          <div key={field.id} className="flex items-center gap-1.5">
            <Input
              {...register(`${basePath}.${itemIndex}.value`)}
              className="flex-1 bg-white"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-deep-brown/30 size-7 shrink-0"
              onClick={() => remove(itemIndex)}
            >
              <X className="size-3.5" />
            </Button>
          </div>
        ))}
      </div>
      <Button type="button" variant="ghost" size="sm" onClick={handleAddItem}>
        <Plus className="size-3" />
        {t("addItem")}
      </Button>
    </div>
  );
}
