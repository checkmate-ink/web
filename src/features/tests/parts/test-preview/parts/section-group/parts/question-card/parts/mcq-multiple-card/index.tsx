import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { McqMultipleEdit } from "./parts/edit";
import { McqMultiplePreview } from "./parts/preview";

interface McqMultipleCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function McqMultipleCard({
  question,
  sectionIndex,
  questionIndex,
}: McqMultipleCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <McqMultipleEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <McqMultiplePreview question={question} />;
}
