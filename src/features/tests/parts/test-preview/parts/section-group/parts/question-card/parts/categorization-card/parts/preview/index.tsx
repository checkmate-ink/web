import type { EditableQuestion } from "../../../../../../../../types";

interface CategorizationPreviewProps {
  question: EditableQuestion;
}

export function CategorizationPreview({
  question,
}: CategorizationPreviewProps) {
  return (
    <div className="flex gap-4">
      {question.category_items.map((cat) => (
        <div
          key={cat.category}
          className="bg-cream-background flex flex-1 flex-col gap-2 rounded-xl p-4"
        >
          <span className="text-deep-brown text-sm font-semibold">
            {cat.category}
          </span>
          <div className="bg-deep-brown/5 h-px w-full" />
          <div className="flex flex-col gap-1.5">
            {cat.items.map((item) => (
              <div
                key={item.value}
                className="border-deep-brown/4 flex items-center gap-2 rounded-lg border bg-white px-3.5 py-2.5"
              >
                <span className="text-deep-brown text-2xs">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
