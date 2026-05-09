import type { DifficultyLevel, QuestionType } from "@/features/tests/types";

export interface TestPreset {
  subject: string;
  language: string;
  difficulty: DifficultyLevel;
  sections: {
    topic: string;
    amount: number;
    questionType: QuestionType;
  }[];
}

export const PRESETS: Record<string, TestPreset> = {
  biology: {
    subject: "Biology",
    language: "English",
    difficulty: "intermediate",
    sections: [
      { topic: "Photosynthesis", amount: 10, questionType: "MCQ_SINGLE" },
      { topic: "Cell Division", amount: 5, questionType: "TRUE_FALSE" },
    ],
  },
  english: {
    subject: "English Grammar",
    language: "English",
    difficulty: "beginner",
    sections: [
      { topic: "Present Tenses", amount: 10, questionType: "FILL_IN" },
    ],
  },
  history: {
    subject: "History",
    language: "English",
    difficulty: "advanced",
    sections: [
      { topic: "World War II", amount: 10, questionType: "OPEN_ENDED" },
    ],
  },
  math: {
    subject: "Mathematics",
    language: "English",
    difficulty: "intermediate",
    sections: [
      { topic: "Quadratic Equations", amount: 10, questionType: "NUMERIC" },
    ],
  },
};
