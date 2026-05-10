import { cva } from "class-variance-authority";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import type { EditableQuestion } from "../../../../../../../../types";

const optionVariants = cva("flex items-center gap-3 rounded-md px-4 py-3", {
  variants: {
    correct: {
      true: "bg-light-olive [&_label]:font-semibold",
      false: "bg-cream-background [&_label]:font-normal",
    },
  },
});

interface McqMultiplePreviewProps {
  question: EditableQuestion;
}

export function McqMultiplePreview({ question }: McqMultiplePreviewProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {question.options.map((option) => (
        <div
          key={option.label}
          className={optionVariants({ correct: option.is_correct })}
        >
          <Checkbox checked={option.is_correct} disabled />
          <Label>
            {option.label}) {option.text}
          </Label>
        </div>
      ))}
    </div>
  );
}
