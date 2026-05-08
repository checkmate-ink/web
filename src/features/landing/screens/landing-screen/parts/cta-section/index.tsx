'use client'

import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

import { FadeIn } from '../fade-in'

export function CtaSection() {
  const t = useTranslations('landing.cta')

  return (
    <section className="flex w-full flex-col items-center px-20 py-25">
      <FadeIn className="bg-deep-brown flex w-full flex-col items-center gap-7 rounded-3xl px-15 py-20">
        <h2 className="font-heading text-cream-background max-w-[700px] text-center text-[40px] font-bold">
          {t('title')}
        </h2>
        <p className="text-cream-background/70 max-w-[550px] text-center text-[17px] leading-relaxed">
          {t('subtitle')}
        </p>
        <Button size="lg">
          <Sparkles />
          {t('button')}
        </Button>
      </FadeIn>
    </section>
  )
}
