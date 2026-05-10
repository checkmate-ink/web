import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { ShortAnswerEdit } from "./parts/edit";
import { ShortAnswerPreview } from "./parts/preview";

interface ShortAnswerCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function ShortAnswerCard({
  question,
  sectionIndex,
  questionIndex,
}: ShortAnswerCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <ShortAnswerEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <ShortAnswerPreview question={question} />;
}
