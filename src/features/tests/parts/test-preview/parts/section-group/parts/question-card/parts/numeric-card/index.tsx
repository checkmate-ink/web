import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { NumericEdit } from "./parts/edit";
import { NumericPreview } from "./parts/preview";

interface NumericCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function NumericCard({
  question,
  sectionIndex,
  questionIndex,
}: NumericCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <NumericEdit sectionIndex={sectionIndex} questionIndex={questionIndex} />
    );
  }

  return <NumericPreview question={question} />;
}
