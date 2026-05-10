import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { OrderingEdit } from "./parts/edit";
import { OrderingPreview } from "./parts/preview";

interface OrderingCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function OrderingCard({
  question,
  sectionIndex,
  questionIndex,
}: OrderingCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <OrderingEdit sectionIndex={sectionIndex} questionIndex={questionIndex} />
    );
  }

  return <OrderingPreview question={question} />;
}
