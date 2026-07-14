import type { ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-[1320px] px-6 md:px-10', className)}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
      <span className="h-px w-6 bg-[var(--color-primary)]" />
      {children}
    </span>
  )
}

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? 'fill-[var(--color-gold)] text-[var(--color-gold)]' : 'text-[var(--color-sand-line)]'}
        />
      ))}
    </div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display mt-4 text-[36px] leading-[1.1] font-medium text-[var(--color-brown)] md:text-[48px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-brown-soft)]">{description}</p>
      )}
    </div>
  )
}
