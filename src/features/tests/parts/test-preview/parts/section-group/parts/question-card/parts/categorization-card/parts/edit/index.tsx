import { Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

import { CategoryBox } from "./parts/category-box";

interface CategorizationEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function CategorizationEdit({
  sectionIndex,
  questionIndex,
}: CategorizationEditProps) {
  const t = useTranslations("tests.edit");
  const { control } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.category_items` as const;
  const { fields, append, remove } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });

  function handleAddCategory() {
    append({ category: "", items: [{ value: "" }] });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {fields.map((field, catIndex) => (
          <CategoryBox
            key={field.id}
            sectionIndex={sectionIndex}
            questionIndex={questionIndex}
            categoryIndex={catIndex}
            onRemove={() => remove(catIndex)}
          />
        ))}
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={handleAddCategory}
      >
        <Plus className="size-3.5" />
        {t("addCategory")}
      </Button>
    </div>
  );
}
