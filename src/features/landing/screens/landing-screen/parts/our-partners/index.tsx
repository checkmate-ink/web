'use client'

import { useTranslations } from 'next-intl'

import { FadeIn } from '../fade-in'

const partners = ['BlockJam', 'Theta EdgeCloud', 'Theta Network', 'AWS']

export function OurPartners() {
  const t = useTranslations('landing.partners')

  return (
    <section
      id="partners"
      className="flex w-full flex-col items-center gap-12 px-20 py-25"
    >
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t('title')}
        </h2>
        <p className="text-deep-brown/55 max-w-[600px] text-center text-lg leading-relaxed">
          {t('subtitle')}
        </p>
      </FadeIn>

      <FadeIn>
        <span className="text-2xs text-deep-brown/35 font-semibold tracking-[2px] uppercase">
          {t('label')}
        </span>
      </FadeIn>

      <div className="flex w-full max-w-[1000px] items-center justify-center gap-6">
        {partners.map((partner, i) => (
          <FadeIn
            key={partner}
            delay={i * 0.1}
            className="border-deep-brown/5 flex h-[90px] flex-1 items-center justify-center rounded-2xl border bg-white"
          >
            <span className="font-heading text-deep-brown/70 text-xl font-bold">
              {partner}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
