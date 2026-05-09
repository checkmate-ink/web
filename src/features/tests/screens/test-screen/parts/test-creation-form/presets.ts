import { z } from "zod";

import { DIFFICULTY_LEVELS, QUESTION_TYPES } from "@/features/tests/presets";

export const testCreationSchema = z.object({
  subject: z.string().min(1),
  language: z.string().min(1),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  sections: z
    .array(
      z.object({
        topic: z.string().min(1),
        amount: z.number().min(1).max(50),
        questionType: z.enum(QUESTION_TYPES),
      }),
    )
    .min(1),
});

export const DEFAULT_SECTION: z.infer<
  typeof testCreationSchema
>["sections"][number] = {
  topic: "",
  amount: 5,
  questionType: "MCQ_SINGLE",
};
