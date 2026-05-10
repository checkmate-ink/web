import { useTestEditMode } from "../../../../../../context";
import type { EditableQuestion } from "../../../../../../types";
import { TrueFalseEdit } from "./parts/edit";
import { TrueFalsePreview } from "./parts/preview";

interface TrueFalseCardProps {
  question: EditableQuestion;
  sectionIndex: number;
  questionIndex: number;
}

export function TrueFalseCard({
  question,
  sectionIndex,
  questionIndex,
}: TrueFalseCardProps) {
  const { mode } = useTestEditMode();

  if (mode === "edit") {
    return (
      <TrueFalseEdit
        sectionIndex={sectionIndex}
        questionIndex={questionIndex}
      />
    );
  }

  return <TrueFalsePreview question={question} />;
}
