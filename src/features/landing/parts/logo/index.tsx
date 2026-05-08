import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  const t = useTranslations('landing.nav')

  return (
    <span
      className={cn('font-heading text-deep-brown font-bold', className)}
    >
      {t('logo')}
    </span>
  )
}
