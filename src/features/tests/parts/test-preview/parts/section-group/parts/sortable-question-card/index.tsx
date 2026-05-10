import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import type { EditableQuestion } from "../../../../types";
import { QuestionCard } from "../question-card";

interface SortableQuestionCardProps {
  id: string;
  question: EditableQuestion;
  questionNumber: number;
  numberColorClass: string;
  sectionIndex: number;
  questionIndex: number;
  onDelete: () => void;
}

export function SortableQuestionCard({
  id,
  ...props
}: SortableQuestionCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <QuestionCard
        {...props}
        dragHandleAttributes={attributes}
        dragHandleListeners={listeners}
      />
    </div>
  );
}
