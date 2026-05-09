import { GripVertical } from "lucide-react";

import type { components } from "@/lib/api/schema";

type OrderingQuestion = components["schemas"]["OrderingQuestion"];

interface OrderingCardProps {
  question: OrderingQuestion;
}

export function OrderingCard({ question }: OrderingCardProps) {
  const sorted = [...question.ordering_items].sort(
    (a, b) => a.correct_index - b.correct_index,
  );

  return (
    <div className="flex flex-col gap-2">
      {sorted.map((item) => (
        <div
          key={item.correct_index}
          className="border-deep-brown/4 bg-cream-background flex items-center gap-3 rounded-md border px-4 py-3"
        >
          <GripVertical className="text-deep-brown/30 size-4 shrink-0" />
          <span className="text-deep-brown/33 text-sm font-semibold">
            {item.correct_index}.
          </span>
          <span className="text-deep-brown text-sm font-medium">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}
