import { components } from '@/lib/api/schema'
import z from 'zod'
import type { TestFormValues } from './types'

type GenerationRequest = components['schemas']['GenerationRequest']

export type DifficultyLevel = GenerationRequest['difficulty_level']

export type QuestionType = Extract<
  keyof GenerationRequest,
  | 'mcq_single'
  | 'mcq_multiple'
  | 'open_ended'
  | 'true_false'
  | 'fill_in'
  | 'ordering'
  | 'pairs'
  | 'categorization'
  | 'short_answer'
  | 'numeric'
>

export const PRESETS: Record<string, TestFormValues> = {
  biology: {
    subject: 'Biology',
    topic: 'Photosynthesis',
    language: 'English',
    difficulty: 'intermediate',
    questionType: 'mcq_single',
  },
  english: {
    subject: 'English Grammar',
    topic: 'Present Tenses',
    language: 'English',
    difficulty: 'beginner',
    questionType: 'fill_in',
  },
  history: {
    subject: 'History',
    topic: 'World War II',
    language: 'English',
    difficulty: 'advanced',
    questionType: 'open_ended',
  },
  math: {
    subject: 'Mathematics',
    topic: 'Quadratic Equations',
    language: 'English',
    difficulty: 'intermediate',
    questionType: 'numeric',
  },
}
export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  'beginner',
  'intermediate',
  'advanced',
]

export const QUESTION_TYPES: QuestionType[] = [
  'mcq_single',
  'mcq_multiple',
  'open_ended',
  'true_false',
  'fill_in',
  'ordering',
  'pairs',
  'categorization',
  'short_answer',
  'numeric',
]

export const testFormSchema = z.object({
  subject: z.string().min(1),
  topic: z.string(),
  language: z.string(),
  difficulty: z.enum(DIFFICULTY_LEVELS),
  questionType: z.enum(QUESTION_TYPES).optional(),
})
