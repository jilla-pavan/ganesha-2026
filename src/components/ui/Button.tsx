import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { useMagnetic } from '@/hooks/useMagnetic'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-[var(--ease-premium)] disabled:opacity-50 disabled:pointer-events-none select-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)] hover:bg-[var(--color-primary-dark)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5',
        gold:
          'bg-[var(--color-brown)] text-[var(--color-gold-soft)] border border-[var(--color-gold)]/40 hover:shadow-[var(--shadow-gold-glow)] hover:-translate-y-0.5',
        outline:
          'border border-[var(--color-brown)]/20 text-[var(--color-brown)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] bg-transparent',
        ghost: 'text-[var(--color-brown)] hover:bg-[var(--color-sand)]',
        whatsapp:
          'bg-[var(--color-whatsapp)] text-white shadow-[var(--shadow-card)] hover:bg-[var(--color-whatsapp-dark)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5',
      },
      size: {
        sm: 'h-9 px-4 text-sm rounded-[var(--radius-sm)]',
        md: 'h-12 px-6 text-[15px] rounded-[var(--radius-sm)]',
        lg: 'h-14 px-8 text-base rounded-[var(--radius-md)]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  magnetic?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = false, children, ...props }, forwardedRef) => {
    const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>(0.18)

    return (
      <button
        ref={magnetic ? ref : forwardedRef}
        onMouseMove={magnetic ? onMouseMove : undefined}
        onMouseLeave={magnetic ? onMouseLeave : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
