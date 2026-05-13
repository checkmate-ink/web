import { GripVertical } from "lucide-react";

import type { EditableQuestion } from "../../../../../../../../types";

interface OrderingPreviewProps {
  question: EditableQuestion;
}

export function OrderingPreview({ question }: OrderingPreviewProps) {
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
