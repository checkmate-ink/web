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

interface PresetTemplate {
  subjectKey: string;
  languageKey: string;
  difficulty: DifficultyLevel;
  sections: {
    topicKey: string;
    amount: number;
    questionType: QuestionType;
  }[];
}

const PRESET_TEMPLATES: Record<string, PresetTemplate> = {
  biology: {
    subjectKey: "biology.subject",
    languageKey: "biology.language",
    difficulty: "intermediate",
    sections: [
      {
        topicKey: "biology.topics.photosynthesis",
        amount: 10,
        questionType: "MCQ_SINGLE",
      },
      {
        topicKey: "biology.topics.cellDivision",
        amount: 5,
        questionType: "TRUE_FALSE",
      },
    ],
  },
  english: {
    subjectKey: "english.subject",
    languageKey: "english.language",
    difficulty: "beginner",
    sections: [
      {
        topicKey: "english.topics.presentTenses",
        amount: 10,
        questionType: "FILL_IN",
      },
    ],
  },
  history: {
    subjectKey: "history.subject",
    languageKey: "history.language",
    difficulty: "advanced",
    sections: [
      {
        topicKey: "history.topics.worldWarII",
        amount: 10,
        questionType: "OPEN_ENDED",
      },
    ],
  },
  math: {
    subjectKey: "math.subject",
    languageKey: "math.language",
    difficulty: "intermediate",
    sections: [
      {
        topicKey: "math.topics.quadraticEquations",
        amount: 10,
        questionType: "NUMERIC",
      },
    ],
  },
};

export function getPreset(key: string, t: (key: string) => string): TestPreset {
  const template = PRESET_TEMPLATES[key];
  return {
    subject: t(template.subjectKey),
    language: t(template.languageKey),
    difficulty: template.difficulty,
    sections: template.sections.map((s) => ({
      topic: t(s.topicKey),
      amount: s.amount,
      questionType: s.questionType,
    })),
  };
}
