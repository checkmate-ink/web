import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { PairsEdit } from "./parts/edit";
import { PairsPreview } from "./parts/preview";

interface PairsCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function PairsCard({
  question,
  sectionIndex,
  questionIndex,
}: PairsCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <PairsEdit sectionIndex={sectionIndex} questionIndex={questionIndex} />
    );
  }

  return <PairsPreview question={question} />;
}
