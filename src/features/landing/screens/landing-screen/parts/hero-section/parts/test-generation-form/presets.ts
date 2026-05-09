import { z } from "zod";

import {
  DIFFICULTY_LEVELS,
  QUESTION_TYPES,
} from "@/features/tests/presets";

export const testFormSchema = z.object({
  subject: z.string().min(1),
  topic: z.string(),
  language: z.string(),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  questionType: z.enum(QUESTION_TYPES),
});
