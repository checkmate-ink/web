'use client'

import {
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  Landmark,
  Sparkles,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { FormField } from '../form-field'

export function TestGenerationForm() {
  const t = useTranslations('landing.testForm')

  return (
    <div className="flex w-full max-w-[1000px] flex-col gap-6 rounded-3xl bg-white p-8 shadow-[0_12px_40px_#351C070F]">
      <div className="flex flex-col gap-2.5">
        <span className="text-2xs text-deep-brown/45 font-medium">
          {t('presetsLabel')}
        </span>
        <div className="flex flex-wrap gap-2.5">
          <Badge variant="yellow" hasIcon>
            <FlaskConical />
            {t('presetBiology')}
          </Badge>
          <Badge variant="blue" hasIcon>
            <BookOpen />
            {t('presetEnglish')}
          </Badge>
          <Badge variant="green" hasIcon>
            <Landmark />
            {t('presetHistory')}
          </Badge>
          <Badge variant="pink" hasIcon>
            <Calculator />
            {t('presetMath')}
          </Badge>
        </div>
      </div>

      <hr className="border-deep-brown/5" />

      <div className="flex gap-5">
        <FormField label={t('subject')} placeholder={t('subjectPlaceholder')} />
        <FormField label={t('topic')} placeholder={t('topicPlaceholder')} />
      </div>

      <div className="flex gap-5">
        <FormField
          label={t('language')}
          placeholder={t('languagePlaceholder')}
        />
        <FormField
          label={t('difficulty')}
          placeholder={t('difficultyPlaceholder')}
        />
      </div>

      <div className="flex gap-5">
        <FormField
          label={t('questionType')}
          placeholder={t('questionTypePlaceholder')}
        />
      </div>

      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" className="text-deep-brown/50 hover:text-deep-brown/70 hover:bg-transparent">
          {t('advanced')}
          <ArrowRight className="size-4" />
        </Button>
        <Button>
          <Sparkles />
          {t('generate')}
        </Button>
      </div>
    </div>
  )
}
