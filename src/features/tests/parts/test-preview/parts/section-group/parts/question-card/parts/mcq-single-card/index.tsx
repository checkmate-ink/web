import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { McqSingleEdit } from "./parts/edit";
import { McqSinglePreview } from "./parts/preview";

interface McqSingleCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function McqSingleCard({
  question,
  sectionIndex,
  questionIndex,
}: McqSingleCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <McqSingleEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <McqSinglePreview question={question} />;
}
