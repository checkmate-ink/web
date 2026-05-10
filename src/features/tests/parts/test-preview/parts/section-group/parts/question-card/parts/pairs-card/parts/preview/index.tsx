import { ArrowRight } from "lucide-react";

import type { EditableQuestion } from "../../../../../../../../types";

interface PairsPreviewProps {
  question: EditableQuestion;
}

export function PairsPreview({ question }: PairsPreviewProps) {
  return (
    <div className="flex flex-col gap-2">
      {question.pair_items.map((pair, i) => (
        <div key={i} className="flex w-full items-center gap-3">
          <div className="bg-soft-blue flex flex-1 items-center rounded-md px-4 py-3">
            <span className="text-deep-brown text-sm font-medium">
              {pair.item_a}
            </span>
          </div>
          <ArrowRight className="text-deep-brown/30 size-4 shrink-0" />
          <div className="border-deep-brown/8 bg-cream-background flex flex-1 items-center rounded-md border px-4 py-3">
            <span className="text-deep-brown text-sm font-medium">
              {pair.item_b}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
