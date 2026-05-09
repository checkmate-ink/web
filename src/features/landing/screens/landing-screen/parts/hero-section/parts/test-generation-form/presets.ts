import { components } from "@/lib/api/schema";
import z from "zod";
import type { TestFormValues } from "./types";

export type DifficultyLevel =
  components["schemas"]["GenerationRequestV2"]["difficulty_level"];

export type QuestionType = components["schemas"]["GroupConfig"]["type"];

export const PRESETS: Record<string, TestFormValues> = {
  biology: {
    subject: "Biology",
    topic: "Photosynthesis",
    language: "English",
    difficulty: "intermediate",
    questionType: "MCQ_SINGLE",
  },
  english: {
    subject: "English Grammar",
    topic: "Present Tenses",
    language: "English",
    difficulty: "beginner",
    questionType: "FILL_IN",
  },
  history: {
    subject: "History",
    topic: "World War II",
    language: "English",
    difficulty: "advanced",
    questionType: "OPEN_ENDED",
  },
  math: {
    subject: "Mathematics",
    topic: "Quadratic Equations",
    language: "English",
    difficulty: "intermediate",
    questionType: "NUMERIC",
  },
};
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

export const testFormSchema = z.object({
  subject: z.string().min(1),
  topic: z.string(),
  language: z.string(),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  questionType: z.enum(QUESTION_TYPES),
});
