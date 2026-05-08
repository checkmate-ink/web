'use client'

import { useTranslations } from 'next-intl'

const steps = [
  { num: '1', titleKey: 'step1Title', descKey: 'step1Desc' },
  { num: '2', titleKey: 'step2Title', descKey: 'step2Desc' },
  { num: '3', titleKey: 'step3Title', descKey: 'step3Desc' },
  { num: '4', titleKey: 'step4Title', descKey: 'step4Desc' },
] as const

export function HowItWorks() {
  const t = useTranslations('landing.howItWorks')

  return (
    <section
      id="how-it-works"
      className="flex w-full flex-col items-center gap-15 px-20 py-25"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t('title')}
        </h2>
        <p className="text-deep-brown/60 text-center text-xl">
          {t('subtitle')}
        </p>
      </div>

      <div className="flex w-full max-w-[1100px] gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-1 flex-col items-center gap-4 rounded-[20px] bg-white px-6 py-8"
          >
            <div className="bg-warm-yellow flex size-11 items-center justify-center rounded-full">
              <span className="font-heading text-deep-brown text-xl font-bold">
                {step.num}
              </span>
            </div>
            <h3 className="font-heading text-deep-brown text-center text-lg font-semibold">
              {t(step.titleKey)}
            </h3>
            <p className="text-deep-brown/55 text-center text-sm leading-relaxed">
              {t(step.descKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
