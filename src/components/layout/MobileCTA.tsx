import { MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { buildWhatsAppLink, generalEnquiryMessage } from '@/utils/whatsapp'
import { cn } from '@/utils/cn'

export function MobileCTA() {
  const href = buildWhatsAppLink(generalEnquiryMessage())

  return (
    <>
      {/* Desktop floating bubble */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110 md:grid"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile sticky order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-sand-line)] bg-white/95 p-4 backdrop-blur-md md:hidden">
        <a href={href} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: 'whatsapp', size: 'lg' }), 'w-full')}>
          <MessageCircle size={19} />
          Chat to Order on WhatsApp
        </a>
      </div>
    </>
  )
}
