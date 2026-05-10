import type { QuestionType } from "@/features/tests/types";

import { QUESTION_DEFAULTS } from "../../presets";
import type { EditableQuestion } from "../../types";

export function createDefaultQuestion(type: QuestionType): EditableQuestion {
  const base = { ...QUESTION_DEFAULTS, type, question: "" };

  switch (type) {
    case "MCQ_SINGLE":
    case "MCQ_MULTIPLE":
      return {
        ...base,
        options: [
          { label: "A", text: "", is_correct: true },
          { label: "B", text: "", is_correct: false },
        ],
      };
    case "FILL_IN":
      return {
        ...base,
        options: [
          { label: "A", text: "", is_correct: true },
          { label: "B", text: "", is_correct: false },
          { label: "C", text: "", is_correct: false },
          { label: "D", text: "", is_correct: false },
        ],
      };
    case "TRUE_FALSE":
      return { ...base, is_true: true };
    case "OPEN_ENDED":
      return { ...base, correct_keywords: [{ value: "" }] };
    case "SHORT_ANSWER":
      return { ...base, possible_answers: [{ value: "" }] };
    case "ORDERING":
      return {
        ...base,
        ordering_items: [
          { text: "", correct_index: 1 },
          { text: "", correct_index: 2 },
        ],
      };
    case "PAIRS":
      return {
        ...base,
        pair_items: [{ item_a: "", item_b: "" }],
      };
    case "CATEGORIZATION":
      return {
        ...base,
        category_items: [{ category: "", items: [{ value: "" }] }],
      };
    case "NUMERIC":
      return base;
  }
}
