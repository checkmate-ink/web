import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { CategorizationEdit } from "./parts/edit";
import { CategorizationPreview } from "./parts/preview";

interface CategorizationCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function CategorizationCard({
  question,
  sectionIndex,
  questionIndex,
}: CategorizationCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <CategorizationEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <CategorizationPreview question={question} />;
}
