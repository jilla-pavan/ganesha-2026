import { useEffect, useRef } from 'react'

/**
 * Adds the `.is-visible` class to the element once it enters the viewport.
 * Pairs with the `.reveal` base class defined in index.css.
 */
export function useScrollReveal<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
