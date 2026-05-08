'use client'

import {
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  Landmark,
  Loader,
  Sparkles,
} from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import * as m from 'motion/react-client'
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TestLoadingCard } from '@/features/tests/parts/test-loading-card'
import { $api } from '@/lib/api/client'

import { useTestForm } from './hooks/use-test-form'
import { DIFFICULTY_LEVELS, PRESETS, QUESTION_TYPES } from './presets'
import {
  type TestFormValues,
} from './types'

export function TestGenerationForm() {
  const t = useTranslations()
  const form = useTestForm()
  const createTest = $api.useMutation('post', '/v1/tests')
  const testId = createTest.data?.test_id
  const testStatus = $api.useQuery(
    'get',
    '/v1/tests/{testId}',
    { params: { path: { testId: testId! } } },
    {
      enabled: !!testId,
      refetchInterval: (query) => {
        const status = query.state.data?.status
        return status === 'pending' ? 1000 : false
      },
    },
  )

  const isGenerating = !!testId && testStatus.data?.status === 'pending'

  function onSubmit(data: TestFormValues) {
    createTest.mutate({
      body: {
        test_request: {
          subject: data.subject,
          difficulty_level: data.difficulty,
          language: data.language || 'English',
          [data.questionType ?? 'mcq_single']: { amount: 5, topic: data.topic || undefined },
        },
      },
    })
  }

  return (
    <AnimatePresence mode="wait">
      {isGenerating ? (
        <m.div
          key="loading"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <TestLoadingCard
            title={t('tests.loading.title')}
            subtitle={t('tests.loading.subtitle')}
            steps={[
              t('tests.loading.steps.analyzing'),
              t('tests.loading.steps.generating'),
              t('tests.loading.steps.reviewing'),
              t('tests.loading.steps.finalizing'),
            ]}
          />
        </m.div>
      ) : (
        <m.div
          key="form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="w-full flex justify-center"
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-[1000px] flex-col gap-6 rounded-3xl bg-white p-8 shadow-card"
            >
              <div className="flex flex-col gap-2.5">
                <span className="text-2xs text-deep-brown/45 font-medium">
                  {t('landing.testForm.presetsLabel')}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <Badge variant="yellow" hasIcon pressable onClick={() => form.reset(PRESETS.biology)}>
                    <FlaskConical />
                    {t('landing.testForm.presetBiology')}
                  </Badge>
                  <Badge variant="blue" hasIcon pressable onClick={() => form.reset(PRESETS.english)}>
                    <BookOpen />
                    {t('landing.testForm.presetEnglish')}
                  </Badge>
                  <Badge variant="green" hasIcon pressable onClick={() => form.reset(PRESETS.history)}>
                    <Landmark />
                    {t('landing.testForm.presetHistory')}
                  </Badge>
                  <Badge variant="pink" hasIcon pressable onClick={() => form.reset(PRESETS.math)}>
                    <Calculator />
                    {t('landing.testForm.presetMath')}
                  </Badge>
                </div>
              </div>

              <hr className="border-deep-brown/5" />

              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t('landing.testForm.subject')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('landing.testForm.subjectPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t('landing.testForm.topic')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('landing.testForm.topicPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t('landing.testForm.language')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('landing.testForm.languagePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="difficulty"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t('landing.testForm.difficulty')}</FormLabel>
                      <Select value={field.value ?? null} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('landing.testForm.difficultyPlaceholder')}>
                            {(value: string | null) => value ? t(`landing.testForm.difficulties.${value}`) : t('landing.testForm.difficultyPlaceholder')}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {DIFFICULTY_LEVELS.map((level) => (
                            <SelectItem key={level} value={level}>
                              {t(`landing.testForm.difficulties.${level}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-5">
                <FormField
                  control={form.control}
                  name="questionType"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>{t('landing.testForm.questionType')}</FormLabel>
                      <Select value={field.value ?? null} onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('landing.testForm.questionTypePlaceholder')}>
                            {(value: string | null) => value ? t(`landing.testForm.questionTypes.${value}`) : t('landing.testForm.questionTypePlaceholder')}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {QUESTION_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {t(`landing.testForm.questionTypes.${type}`)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-between">
                <Button type="button" variant="ghost" size="sm" className="text-deep-brown/50 hover:text-deep-brown/70 hover:bg-transparent">
                  {t('landing.testForm.advanced')}
                  <ArrowRight className="size-4" />
                </Button>
                <Button type="submit" disabled={createTest.isPending}>
                  {createTest.isPending ? (
                    <Loader className="animate-spin" />
                  ) : (
                    <Sparkles />
                  )}
                  {t('landing.testForm.generate')}
                </Button>
              </div>
            </form>
          </Form>
        </m.div>
      )}
    </AnimatePresence>
  )
}
