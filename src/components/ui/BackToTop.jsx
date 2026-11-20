import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollable > 0 && window.scrollY / scrollable >= 0.5)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-4 right-4 z-20 flex size-11 items-center justify-center rounded-full border border-border bg-bg text-link shadow-md transition-[opacity,transform,visibility] duration-200 hover:bg-primary-soft ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-2 opacity-0'
      }`}
    >
      <ArrowUp size={20} strokeWidth={2} aria-hidden="true" />
    </button>
  )
}