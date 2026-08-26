import { useEffect } from 'react'

/**
 * Reveals `.reveal` / `.reveal-line` elements as they enter the viewport.
 * Re-runs on every route change so freshly-mounted pages get observed too.
 *
 * Failsafe: if nothing has revealed after a few seconds the observer never
 * delivered, so we show everything rather than leave the page blank.
 */
export function useReveal(key: string) {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal, .reveal-line')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' },
    )

    targets.forEach((el) => observer.observe(el))

    const failsafe = window.setTimeout(() => {
      if (!document.querySelector('.reveal.in, .reveal-line.in')) {
        observer.disconnect()
        targets.forEach((el) => el.classList.add('in'))
      }
    }, 2500)

    return () => {
      window.clearTimeout(failsafe)
      observer.disconnect()
    }
  }, [key])
}
