import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
  label: string
}

export function IconButton({ children, active, label, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={label}
      title={label}
      className={cn(
        'grid place-items-center h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-premium)] hover:scale-110 hover:shadow-[var(--shadow-card)]',
        active ? 'text-[var(--color-primary)]' : 'text-[var(--color-brown)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
