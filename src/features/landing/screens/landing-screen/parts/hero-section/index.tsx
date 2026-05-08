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

export function HeroSection() {
  const t = useTranslations('landing.hero')

  return (
    <section className="flex w-full flex-col items-center gap-8 px-20 pt-20 pb-25">
      <Badge variant="yellow" hasIcon>
        <Sparkles />
        {t('badge')}
      </Badge>

      <h1 className="font-heading text-deep-brown max-w-[900px] text-center text-[64px] leading-[1.1] font-bold">
        {t('titleLine1')}
        <br />
        {t('titleLine2')}
        <br />
        {t('titleLine3')}
      </h1>

      <p className="text-deep-brown/60 max-w-[620px] text-center text-xl leading-relaxed">
        {t('subtitle')}
      </p>

      <Button size="lg">
        <Sparkles />
        {t('cta')}
      </Button>

      <TestGenerationForm />
    </section>
  )
}

function TestGenerationForm() {
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
        <button className="text-deep-brown/50 hover:text-deep-brown/70 flex items-center gap-1.5 text-sm font-medium transition-colors">
          {t('advanced')}
          <ArrowRight className="size-4" />
        </button>
        <Button>
          <Sparkles />
          {t('generate')}
        </Button>
      </div>
    </div>
  )
}

function FormField({
  label,
  placeholder,
}: {
  label: string
  placeholder: string
}) {
  return (
    <div className="flex flex-1 flex-col gap-1.5">
      <label className="text-deep-brown text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border-deep-brown/15 text-deep-brown placeholder:text-deep-brown/35 focus:border-warm-yellow w-full rounded-xl border-[1.5px] bg-transparent px-4 py-3 text-sm transition-colors outline-none"
      />
    </div>
  )
}
