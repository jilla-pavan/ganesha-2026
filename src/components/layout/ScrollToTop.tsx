import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/utils/cn'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Track the viewport scroll position to determine visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button once user scrolls past 300 pixels
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enforces smooth scrolling animation native to the browser
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top of the page"
          // Kept near the bottom right corner exactly like WhatsApp's float layout elements
          className={cn(
            "fixed bottom-24 right-6 z-40",
            "flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2D1B14]",
            "border border-neutral-200/80 shadow-[0_4px_14px_rgba(0,0,0,0.06)]",
            "transition-all duration-200 hover:text-[#A33B23] hover:border-neutral-300",
            "active:scale-95 outline-none focus:outline-none"
          )}
        >
          <ChevronUp size={18} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}