'use client'

import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function ContactUs() {
  const t = useTranslations('landing.contact')

  return (
    <section className="flex w-full flex-col items-center gap-8 px-20 py-20">
      <h2 className="font-heading text-deep-brown text-center text-4xl font-bold">
        {t('title')}
      </h2>

      <div className="flex items-center gap-12">
        <a
          href={`mailto:${t('email')}`}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <Mail className="text-deep-brown/50 size-5" />
          <span className="text-deep-brown text-base font-medium">
            {t('email')}
          </span>
        </a>
        <a
          href={`tel:${t('phone').replace(/\s/g, '')}`}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-70"
        >
          <Phone className="text-deep-brown/50 size-5" />
          <span className="text-deep-brown text-base font-medium">
            {t('phone')}
          </span>
        </a>
      </div>
    </section>
  )
}
