'use client'

import { Mail, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('landing')

  return (
    <footer className="border-deep-brown/7 flex w-full flex-col gap-6 border-t px-20 py-10">
      <div className="flex items-center justify-between">
        <span className="font-heading text-deep-brown text-xl font-bold">
          {t('nav.logo')}
        </span>
        <div className="flex items-center gap-8">
          <a
            href={`mailto:${t('contact.email')}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Mail className="text-deep-brown/45 size-4" />
            <span className="text-deep-brown/55 text-sm">
              {t('contact.email')}
            </span>
          </a>
          <a
            href={`tel:${t('contact.phone').replace(/\s/g, '')}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
          >
            <Phone className="text-deep-brown/45 size-4" />
            <span className="text-deep-brown/55 text-sm">
              {t('contact.phone')}
            </span>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-deep-brown/40 text-sm">
          {t('footer.tagline')}
        </span>
        <span className="text-deep-brown/40 text-sm">
          {t('footer.copyright')}
        </span>
      </div>
    </footer>
  )
}
