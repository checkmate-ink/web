import type { DifficultyLevel, QuestionType } from "./types";

export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
];

export const QUESTION_TYPES: QuestionType[] = [
  "MCQ_SINGLE",
  "MCQ_MULTIPLE",
  "OPEN_ENDED",
  "TRUE_FALSE",
  "FILL_IN",
  "ORDERING",
  "PAIRS",
  "CATEGORIZATION",
  "SHORT_ANSWER",
  "NUMERIC",
];
