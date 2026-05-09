import type { BadgeVariant, QuestionType } from "@/features/tests/types";

export const QUESTION_TYPE_BADGE: Record<QuestionType, BadgeVariant> = {
  MCQ_SINGLE: "yellow",
  MCQ_MULTIPLE: "blue",
  TRUE_FALSE: "pink",
  FILL_IN: "blue",
  OPEN_ENDED: "green",
  SHORT_ANSWER: "pink",
  ORDERING: "yellow",
  PAIRS: "green",
  CATEGORIZATION: "yellow",
  NUMERIC: "blue",
};

export const SECTION_NUMBER_COLORS = [
  "bg-cream-yellow",
  "bg-soft-blue",
  "bg-light-olive",
  "bg-soft-peach",
];

export const SECTION_BADGE_VARIANTS: BadgeVariant[] = [
  "green",
  "blue",
  "yellow",
  "pink",
];
