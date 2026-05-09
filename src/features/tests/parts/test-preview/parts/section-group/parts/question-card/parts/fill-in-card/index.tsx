import { cva } from "class-variance-authority";

import type { components } from "@/lib/api/schema";

type FillInQuestion = components["schemas"]["FillInQuestion"];

const optionVariants = cva(
  "flex flex-1 items-center justify-center rounded-md px-4 py-3 [&_span]:text-deep-brown [&_span]:text-sm",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_span]:font-semibold",
        false: "bg-cream-background [&_span]:font-normal",
      },
    },
  },
);

interface FillInCardProps {
  question: FillInQuestion;
}

export function FillInCard({ question }: FillInCardProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {question.options.map((option) => (
        <div
          key={option.label}
          className={optionVariants({ correct: option.is_correct })}
        >
          <span>
            {option.label}) {option.text}
          </span>
        </div>
      ))}
    </div>
  );
}
