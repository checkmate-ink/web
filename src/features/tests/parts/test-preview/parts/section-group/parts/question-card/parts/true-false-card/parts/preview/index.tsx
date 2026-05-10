import { cva } from "class-variance-authority";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import type { EditableQuestion } from "../../../../../../../../types";

const optionVariants = cva(
  "flex flex-1 items-center justify-center gap-2.5 rounded-md px-5 py-3.5",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_label]:font-semibold",
        false: "bg-cream-background [&_label]:font-medium",
      },
    },
  },
);

interface TrueFalsePreviewProps {
  question: EditableQuestion;
}

export function TrueFalsePreview({ question }: TrueFalsePreviewProps) {
  return (
    <RadioGroup
      value={question.is_true ? "true" : "false"}
      disabled
      className="flex-row gap-3"
    >
      <div className={optionVariants({ correct: question.is_true })}>
        <RadioGroupItem value="true" />
        <Label>True</Label>
      </div>
      <div className={optionVariants({ correct: !question.is_true })}>
        <RadioGroupItem value="false" />
        <Label>False</Label>
      </div>
    </RadioGroup>
  );
}
