'use client'

import { ArrowRight, Store } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'

const cards = [
  {
    badgeKey: 'card1Badge',
    badgeVariant: 'yellow' as const,
    titleKey: 'card1Title',
    metaKey: 'card1Meta',
    authorKey: 'card1Author',
  },
  {
    badgeKey: 'card2Badge',
    badgeVariant: 'blue' as const,
    titleKey: 'card2Title',
    metaKey: 'card2Meta',
    authorKey: 'card2Author',
  },
  {
    badgeKey: 'card3Badge',
    badgeVariant: 'green' as const,
    titleKey: 'card3Title',
    metaKey: 'card3Meta',
    authorKey: 'card3Author',
  },
] as const

export function Marketplace() {
  const t = useTranslations('landing.marketplace')

  return (
    <section className="flex w-full flex-col items-center gap-12 px-20 py-25">
      <div className="flex flex-col items-center gap-5">
        <Badge variant="green" hasIcon>
          <Store />
          {t('badge')}
        </Badge>
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t('title')}
        </h2>
        <p className="text-deep-brown/55 max-w-[550px] text-center text-lg leading-relaxed">
          {t('subtitleLine1')}
          <br />
          {t('subtitleLine2')}
        </p>
      </div>

      <div className="flex w-full max-w-[1100px] gap-5">
        {cards.map((card) => (
          <div
            key={card.titleKey}
            className="border-deep-brown/4 flex flex-1 flex-col gap-4 rounded-[20px] border bg-white p-6"
          >
            <Badge variant={card.badgeVariant}>{t(card.badgeKey)}</Badge>
            <h3 className="font-heading text-deep-brown text-lg font-semibold">
              {t(card.titleKey)}
            </h3>
            <p className="text-2xs text-deep-brown/40">{t(card.metaKey)}</p>
            <p className="text-2xs text-deep-brown/50 font-medium">
              {t(card.authorKey)}
            </p>
          </div>
        ))}
      </div>

      <button className="text-deep-brown flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-70">
        {t('browseAll')}
        <ArrowRight className="size-4.5" />
      </button>
    </section>
  )
}
