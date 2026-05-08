'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { FadeIn } from '../fade-in'

import { TestGenerationForm } from './parts/test-generation-form'

export function HeroSection() {
  const t = useTranslations('landing.hero')

  return (
    <section className="flex w-full flex-col items-center gap-8 px-20 pt-20 pb-25">
      <FadeIn>
        <Badge variant="yellow" hasIcon>
          <Sparkles />
          {t('badge')}
        </Badge>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="font-heading text-deep-brown max-w-[900px] text-center text-[64px] leading-[1.1] font-bold">
          {t('titleLine1')}
          <br />
          {t('titleLine2')}
          <br />
          {t('titleLine3')}
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-deep-brown/60 max-w-[620px] text-center text-xl leading-relaxed">
          {t('subtitle')}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <Button size="lg">
          <Sparkles />
          {t('cta')}
        </Button>
      </FadeIn>

      <FadeIn delay={0.4} className="w-full flex justify-center">
        <TestGenerationForm />
      </FadeIn>
    </section>
  )
}
