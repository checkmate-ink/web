import { cva } from "class-variance-authority";

import { Label } from "@/components/ui/label";

import type { EditableQuestion } from "../../../../../../../../types";

const optionVariants = cva(
  "flex flex-1 items-center justify-center rounded-md px-4 py-3",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_label]:font-semibold",
        false: "bg-cream-background [&_label]:font-normal",
      },
    },
  },
);

interface FillInPreviewProps {
  question: EditableQuestion;
}

export function FillInPreview({ question }: FillInPreviewProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {question.options.map((option) => (
        <div
          key={option.label}
          className={optionVariants({ correct: option.is_correct })}
        >
          <Label>
            {option.label}) {option.text}
          </Label>
        </div>
      ))}
    </div>
  );
}
