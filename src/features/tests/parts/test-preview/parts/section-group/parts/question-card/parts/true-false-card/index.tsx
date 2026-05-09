import { cva } from "class-variance-authority";

import type { components } from "@/lib/api/schema";

type TrueFalseQuestion = components["schemas"]["TrueFalseQuestion"];

const optionVariants = cva(
  "flex flex-1 items-center justify-center gap-2.5 rounded-md px-5 py-3.5 [&_span]:text-deep-brown [&_span]:text-sm",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_span]:font-semibold",
        false: "bg-cream-background [&_span]:font-medium",
      },
    },
  },
);

interface TrueFalseCardProps {
  question: TrueFalseQuestion;
}

export function TrueFalseCard({ question }: TrueFalseCardProps) {
  return (
    <div className="flex gap-3">
      <div className={optionVariants({ correct: question.is_true })}>
        {question.is_true ? (
          <div className="bg-olive-green flex size-5.5 shrink-0 items-center justify-center rounded-full">
            <div className="size-2 rounded-full bg-white" />
          </div>
        ) : (
          <div className="border-deep-brown/19 border-1.5 size-5.5 shrink-0 rounded-full" />
        )}
        <span>True</span>
      </div>
      <div className={optionVariants({ correct: !question.is_true })}>
        {!question.is_true ? (
          <div className="bg-olive-green flex size-5.5 shrink-0 items-center justify-center rounded-full">
            <div className="size-2 rounded-full bg-white" />
          </div>
        ) : (
          <div className="border-deep-brown/19 border-1.5 size-5.5 shrink-0 rounded-full" />
        )}
        <span>False</span>
      </div>
    </div>
  );
}
