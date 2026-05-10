import { cva } from "class-variance-authority";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import type { EditableQuestion } from "../../../../../../../../types";

const optionVariants = cva(
  "group flex items-center gap-3 rounded-md px-4 py-3",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_label]:font-semibold",
        false: "bg-cream-background [&_label]:font-normal",
      },
    },
  },
);

interface McqSinglePreviewProps {
  question: EditableQuestion;
}

export function McqSinglePreview({ question }: McqSinglePreviewProps) {
  const correctLabel = question.options.find((o) => o.is_correct)?.label ?? "";

  return (
    <RadioGroup value={correctLabel} disabled className="gap-2.5">
      {question.options.map((option) => (
        <div
          key={option.label}
          className={optionVariants({ correct: option.is_correct })}
        >
          <RadioGroupItem value={option.label} />
          <Label>
            {option.label}) {option.text}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
