import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { FillInEdit } from "./parts/edit";
import { FillInPreview } from "./parts/preview";

interface FillInCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function FillInCard({
  question,
  sectionIndex,
  questionIndex,
}: FillInCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <FillInEdit sectionIndex={sectionIndex} questionIndex={questionIndex} />
    );
  }

  return <FillInPreview question={question} />;
}
