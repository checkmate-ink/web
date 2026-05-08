'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { FadeIn } from '../fade-in'

const members = [
  {
    nameKey: 'zarifName',
    roleKey: 'zarifRole',
    avatar: '/images/team/zarif.png',
  },
  {
    nameKey: 'kayleeName',
    roleKey: 'kayleeRole',
    avatar: '/images/team/kaylee.png',
  },
  {
    nameKey: 'filipName',
    roleKey: 'filipRole',
    avatar: '/images/team/filip.png',
  },
  { nameKey: 'janName', roleKey: 'janRole', avatar: '/images/team/jan.png' },
] as const

export function MeetTheTeam() {
  const t = useTranslations('landing.team')

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center gap-15 px-20 py-25"
    >
      <FadeIn className="flex flex-col items-center gap-4">
        <h2 className="font-heading text-deep-brown text-center text-5xl font-bold">
          {t('title')}
        </h2>
        <p className="text-deep-brown/55 max-w-[650px] text-center text-lg leading-relaxed">
          {t('subtitle')}
        </p>
      </FadeIn>

      <div className="flex w-full max-w-[1000px] gap-8">
        {members.map((member, i) => (
          <FadeIn
            key={member.nameKey}
            delay={i * 0.1}
            className="flex flex-1 flex-col items-center gap-4"
          >
            <Image
              src={member.avatar}
              alt={t(member.nameKey)}
              width={120}
              height={120}
              className="size-30 rounded-full object-cover"
            />
            <h3 className="font-heading text-deep-brown text-center text-lg font-semibold">
              {t(member.nameKey)}
            </h3>
            <p className="text-deep-brown/50 text-center text-sm">
              {t(member.roleKey)}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
