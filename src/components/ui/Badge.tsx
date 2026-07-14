import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

const tones: Record<string, string> = {
  Bestseller: 'bg-[var(--color-primary)]/10 text-[var(--color-primary-dark)]',
  New: 'bg-emerald-600/10 text-emerald-700',
  Limited: 'bg-[var(--color-brown)]/10 text-[var(--color-brown)]',
  Premium: 'bg-[var(--color-gold)]/15 text-[#8a6d1a]',
  default: 'bg-[var(--color-sand)] text-[var(--color-brown-soft)]',
}

export function Badge({ children, tone = 'default' }: { children: ReactNode; tone?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider',
        tones[tone] ?? tones.default
      )}
    >
      {children}
    </span>
  )
}
