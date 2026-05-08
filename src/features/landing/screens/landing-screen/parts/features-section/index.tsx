'use client'

import { BookOpen, CircleCheck, TrendingUp, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import { FadeIn } from '../fade-in'

const features = [
  [
    {
      icon: Zap,
      titleKey: 'createTitle',
      descKey: 'createDesc',
      bg: 'bg-cream-yellow',
    },
    {
      icon: CircleCheck,
      titleKey: 'gradingTitle',
      descKey: 'gradingDesc',
      bg: 'bg-soft-blue',
    },
  ],
  [
    {
      icon: TrendingUp,
      titleKey: 'analyticsTitle',
      descKey: 'analyticsDesc',
      bg: 'bg-light-olive',
    },
    {
      icon: BookOpen,
      titleKey: 'studyTitle',
      descKey: 'studyDesc',
      bg: 'bg-soft-peach',
    },
  ],
] as const

export function FeaturesSection() {
  const t = useTranslations('landing.features')

  return (
    <section
      id="features"
      className="flex w-full flex-col items-center gap-15 px-20 py-25"
    >
      <FadeIn>
        <h2 className="font-heading text-deep-brown max-w-[800px] text-center text-5xl font-bold">
          {t('title')}
        </h2>
      </FadeIn>

      <div className="flex w-full max-w-[1100px] flex-col gap-6">
        {features.map((row, i) => (
          <div key={i} className="flex gap-6">
            {row.map((feature, j) => (
              <FadeIn
                key={feature.titleKey}
                delay={i * 0.15 + j * 0.1}
                className={cn(
                  'flex flex-1 flex-col gap-4 rounded-[20px] p-9',
                  feature.bg,
                )}
              >
                <feature.icon className="text-deep-brown size-8" />
                <h3 className="font-heading text-deep-brown text-[22px] font-semibold">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-md text-deep-brown/65 leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </FadeIn>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
