import { z } from 'zod'
import { testFormSchema } from './presets'

export type TestFormValues = z.infer<typeof testFormSchema>
