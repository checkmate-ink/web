'use client'

import { Progress, ProgressLabel, ProgressValue, } from '@/components/ui/progress'

import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import { StepIcon } from './parts/step-icon'
import { getStepStatus } from './utils'

interface TestLoadingCardProps {
  title: string
  subtitle?: string
  /** Labels for each loading step */
  steps: string[]
  /** Milliseconds between each step completing. Default 2500. */
  stepDuration?: number
}

export function TestLoadingCard({
  title,
  subtitle,
  steps,
  stepDuration = 2500,
}: TestLoadingCardProps) {
  const t = useTranslations('tests.loading')
  const totalSteps = steps.length
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const isLastStep = currentStep >= totalSteps - 1
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef(0)

  // Advance steps on a timer (stop before last step completes)
  useEffect(() => {
    if (isLastStep) return

    const timer = setTimeout(() => {
      setCurrentStep((s) => s + 1)
    }, stepDuration)

    return () => clearTimeout(timer)
  }, [currentStep, stepDuration, isLastStep])

  // Animate progress smoothly via requestAnimationFrame
  useEffect(() => {
    startTimeRef.current = Date.now()

    function tick() {
      const elapsed = Date.now() - startTimeRef.current
      const stepProgress = Math.min(elapsed / stepDuration, 1)

      // Each completed step is worth an equal share of the bar
      const perStep = 100 / totalSteps
      const completedProgress = currentStep * perStep

      if (currentStep < totalSteps - 1) {
        // Normal step: smoothly fill to next checkpoint
        setProgress(completedProgress + stepProgress * perStep)
      } else {
        // Last step: crawl slowly toward ~95% but never reach 100
        const crawl = (1 - Math.exp(-elapsed / 15000)) * perStep * 0.9
        setProgress(completedProgress + crawl)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [currentStep, stepDuration, totalSteps])

  return (
    <div className="border-deep-brown/4 flex w-130 flex-col items-center gap-8 rounded-3xl border bg-white p-10">

      <div className="flex flex-col items-center gap-2">
        <Sparkles className="text-warm-yellow size-12 opacity-80" />
        <h2 className="font-heading text-deep-brown text-2xl font-semibold">
          {title}
        </h2>
        {subtitle && <p className="text-deep-brown/50 text-sm">{subtitle}</p>}
      </div>


      <div className="flex w-full flex-col">
        {steps.map((label, i) => {
          const status = getStepStatus(i, currentStep)
          return (
            <div key={label}>
              {i > 0 && <div className="bg-deep-brown/4 h-px w-full" />}
              <div
                className={cn(
                  'flex items-center gap-3 py-3.5 transition-opacity duration-300',
                  status === 'pending' && 'opacity-35',
                )}
              >
                <StepIcon status={status} />
                <span
                  className={cn(
                    'text-deep-brown text-sm',
                    status === 'in-progress' && 'font-medium',
                  )}
                >
                  {label}
                </span>
              </div>
            </div>
          )
        })}
      </div>


      <Progress value={Math.round(progress)} className="w-full">
        <ProgressLabel>{t('progress')}</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}
