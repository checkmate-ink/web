import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useTestEditFormContext } from "../../../../../../../../hooks/use-test-edit-form";
import type { TestEditValues } from "../../../../../../../../types";

interface ShortAnswerEditProps {
  sectionIndex: number;
  questionIndex: number;
}

export function ShortAnswerEdit({
  sectionIndex,
  questionIndex,
}: ShortAnswerEditProps) {
  const t = useTranslations("tests.edit");
  const { control, watch } = useTestEditFormContext();
  const basePath =
    `groups.${sectionIndex}.questions.${questionIndex}.possible_answers` as const;
  const { append, remove } = useFieldArray<TestEditValues>({
    control,
    name: basePath,
  });
  const answers = watch(basePath);
  const [inputValue, setInputValue] = useState("");

  function handleAdd() {
    if (inputValue.trim()) {
      append({ value: inputValue.trim() });
      setInputValue("");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Label>{t("acceptedAnswers")}</Label>
      <div className="flex flex-wrap items-center gap-2">
        {answers.map((answer, i) => (
          <span
            key={i}
            className="bg-light-olive text-deep-brown inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
          >
            {answer.value}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="text-deep-brown/40 size-4"
              onClick={() => remove(i)}
            >
              <X className="size-3" />
            </Button>
          </span>
        ))}
        <div className="border-deep-brown/12 inline-flex items-center gap-1 rounded-full border px-3 py-1.5">
          <Plus className="text-deep-brown size-3" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleAdd}
            placeholder={t("addAnswer")}
            className="text-deep-brown w-12 bg-transparent text-xs outline-none placeholder:opacity-50"
          />
        </div>
      </div>
    </div>
  );
}
