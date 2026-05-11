import { Text, View } from "@react-pdf/renderer";

import type { EditableQuestion } from "../../../../types";
import { styles } from "./style";
import { PdfCategorization } from "./parts/pdf-categorization";
import { PdfMcq } from "./parts/pdf-mcq";
import { PdfOpenEnded } from "./parts/pdf-open-ended";
import { PdfOrdering } from "./parts/pdf-ordering";
import { PdfPairs } from "./parts/pdf-pairs";
import { PdfShortAnswer } from "./parts/pdf-short-answer";
import { PdfTrueFalse } from "./parts/pdf-true-false";

interface PdfQuestionProps {
  question: EditableQuestion;
  questionNumber: number;
  itemsLabel: string;
}

export function PdfQuestion({
  question,
  questionNumber,
  itemsLabel,
}: PdfQuestionProps) {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.questionText}>
        {questionNumber}. {question.question}
      </Text>
      <PdfQuestionContent question={question} itemsLabel={itemsLabel} />
    </View>
  );
}

function PdfQuestionContent({
  question,
  itemsLabel,
}: {
  question: EditableQuestion;
  itemsLabel: string;
}) {
  switch (question.type) {
    case "MCQ_SINGLE":
    case "MCQ_MULTIPLE":
    case "FILL_IN":
      return <PdfMcq options={question.options} />;
    case "TRUE_FALSE":
      return <PdfTrueFalse />;
    case "OPEN_ENDED":
      return <PdfOpenEnded />;
    case "SHORT_ANSWER":
    case "NUMERIC":
      return <PdfShortAnswer />;
    case "ORDERING":
      return <PdfOrdering items={question.ordering_items} />;
    case "PAIRS":
      return <PdfPairs pairs={question.pair_items} />;
    case "CATEGORIZATION":
      return (
        <PdfCategorization
          categories={question.category_items}
          itemsLabel={itemsLabel}
        />
      );
  }
}
