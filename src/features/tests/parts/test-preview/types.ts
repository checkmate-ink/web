import type { DifficultyLevel, QuestionType } from "@/features/tests/types";

export interface EditableOption {
  label: string;
  text: string;
  is_correct: boolean;
}

export interface EditableOrderingItem {
  text: string;
  correct_index: number;
}

export interface EditablePairItem {
  item_a: string;
  item_b: string;
}

export interface EditableCategoryItem {
  category: string;
  items: { value: string }[];
}

export interface EditableQuestion {
  type: QuestionType;
  question: string;
  // MCQ_SINGLE, MCQ_MULTIPLE, FILL_IN
  options: EditableOption[];
  // TRUE_FALSE
  is_true: boolean;
  // OPEN_ENDED
  correct_keywords: { value: string }[];
  // SHORT_ANSWER
  possible_answers: { value: string }[];
  // ORDERING
  ordering_items: EditableOrderingItem[];
  // PAIRS
  pair_items: EditablePairItem[];
  // CATEGORIZATION
  category_items: EditableCategoryItem[];
  // NUMERIC
  answer: number;
  tolerance: number;
}

export interface EditableGroup {
  name: string;
  type: QuestionType;
  topic: string;
  questions: EditableQuestion[];
}

export interface TestEditValues {
  title: string;
  subject: string;
  difficulty: DifficultyLevel;
  language: string;
  groups: EditableGroup[];
}
