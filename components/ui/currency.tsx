'use client'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'

type CurrencyProps = {
  value: number
  className?: string
}

export function Currency({ value, className }: CurrencyProps) {
  const { language } = useLanguage()

  return (
    <span className={cn('inline-flex items-baseline gap-1 font-inherit', className)}>
      {language === 'ar' ? (
        <>
          <span>{value}</span>
          <span>ر.س</span>
        </>
      ) : (
        <>
          <span>$</span>
          <span>{value}</span>
        </>
      )}
    </span>
  )
}

