'use client'

import { ClipboardList } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

export function HelpUs() {
  const t = useTranslations('landing.helpUs')

  return (
    <section className="flex w-full flex-col items-center px-20 py-20">
      <div className="bg-cream-yellow flex w-full flex-col items-center gap-6 rounded-3xl px-15 py-16">
        <h2 className="font-heading text-deep-brown text-center text-4xl font-bold">
          {t('title')}
        </h2>
        <p className="text-deep-brown/60 text-center text-lg">
          {t('subtitle')}
        </p>
        <Button>
          <ClipboardList />
          {t('cta')}
        </Button>
      </div>
    </section>
  )
}
