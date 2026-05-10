import type { ResponseQuestion, TestItemV2 } from "@/features/tests/types";

import { QUESTION_DEFAULTS } from "./presets";
import type {
  EditableCategoryItem,
  EditableGroup,
  EditableOption,
  EditableOrderingItem,
  EditablePairItem,
  TestEditValues,
} from "./types";

function transformQuestion(q: ResponseQuestion) {
  const base = {
    ...QUESTION_DEFAULTS,
    type: q.type,
    question: q.question,
  };

  switch (q.type) {
    case "MCQ_SINGLE":
    case "MCQ_MULTIPLE":
    case "FILL_IN":
      return {
        ...base,
        options: q.options.map(
          (o): EditableOption => ({
            label: o.label,
            text: o.text,
            is_correct: o.is_correct,
          }),
        ),
      };
    case "TRUE_FALSE":
      return { ...base, is_true: q.is_true };
    case "OPEN_ENDED":
      return {
        ...base,
        correct_keywords: q.correct_keywords.map((v) => ({ value: v })),
      };
    case "SHORT_ANSWER":
      return {
        ...base,
        possible_answers: q.possible_answers.map((v) => ({ value: v })),
      };
    case "ORDERING":
      return {
        ...base,
        ordering_items: q.ordering_items.map(
          (item): EditableOrderingItem => ({
            text: item.text,
            correct_index: item.correct_index,
          }),
        ),
      };
    case "PAIRS":
      return {
        ...base,
        pair_items: q.pair_items.map(
          (p): EditablePairItem => ({ item_a: p.item_a, item_b: p.item_b }),
        ),
      };
    case "CATEGORIZATION":
      return {
        ...base,
        category_items: q.category_items.map(
          (cat): EditableCategoryItem => ({
            category: cat.category,
            items: cat.items.map((v) => ({ value: v })),
          }),
        ),
      };
    case "NUMERIC":
      return {
        ...base,
        answer: q.answer,
        tolerance: q.tolerance ?? 0,
      };
  }
}

export function transformTestToForm(test: TestItemV2): TestEditValues {
  const { test_request, test_response } = test;

  if (!test_response) {
    return {
      title: "",
      subject: test_request.subject,
      difficulty: test_request.difficulty_level,
      language: test_request.language,
      groups: [],
    };
  }

  return {
    title: test_response.metadata.name,
    subject: test_request.subject,
    difficulty: test_request.difficulty_level,
    language: test_request.language,
    groups: test_response.groups.map(
      (group): EditableGroup => ({
        name: group.name,
        type: group.type,
        topic: group.topic ?? "",
        questions: group.questions.map(transformQuestion),
      }),
    ),
  };
}
