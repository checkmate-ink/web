import { cva } from "class-variance-authority";

import type { components } from "@/lib/api/schema";

type McqSingleQuestion = components["schemas"]["McqSingleQuestion"];

const optionVariants = cva(
  "group flex items-center gap-3 rounded-md px-4 py-3 [&_span]:text-deep-brown [&_span]:text-sm",
  {
    variants: {
      correct: {
        true: "bg-light-olive [&_span]:font-semibold",
        false: "bg-cream-background [&_span]:font-normal",
      },
    },
  },
);

interface McqSingleCardProps {
  question: McqSingleQuestion;
}

export function McqSingleCard({ question }: McqSingleCardProps) {
  return (
    <div className="flex flex-col gap-2.5">
      {question.options.map((option) => (
        <div
          key={option.label}
          className={optionVariants({ correct: option.is_correct })}
        >
          {option.is_correct ? (
            <div className="bg-olive-green flex size-5.5 shrink-0 items-center justify-center rounded-full">
              <div className="size-2 rounded-full bg-white" />
            </div>
          ) : (
            <div className="border-deep-brown/19 border-1.5 size-5.5 shrink-0 rounded-full" />
          )}
          <span>
            {option.label}) {option.text}
          </span>
        </div>
      ))}
    </div>
  );
}
