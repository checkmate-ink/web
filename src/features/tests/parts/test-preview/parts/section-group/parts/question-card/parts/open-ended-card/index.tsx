import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { OpenEndedEdit } from "./parts/edit";
import { OpenEndedPreview } from "./parts/preview";

interface OpenEndedCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function OpenEndedCard({
  question,
  sectionIndex,
  questionIndex,
}: OpenEndedCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <OpenEndedEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <OpenEndedPreview question={question} />;
}
