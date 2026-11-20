import { useEffect, useRef } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { sectionComponents } from '../../sections'
import Footer from './Footer'
import BackToTop from '../ui/BackToTop'

export default function MobileView() {
  const { pathname, key } = useLocation()
  const isFirstRender = useRef(true)

  // Treat "/projects/" the same as "/projects".
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const target = navItems.find((item) => item.to === normalizedPath)

  // Scroll to the section matching the URL. `key` changes on every navigation,
  // so a link to the section you're already on still scrolls.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = isFirstRender.current || prefersReducedMotion ? 'auto' : 'smooth'
    isFirstRender.current = false

    if (!target || target.to === '/') {
      window.scrollTo({ top: 0, behavior })
      return
    }
    document.getElementById(target.id)?.scrollIntoView({ behavior, block: 'start' })
  }, [key, target])

  if (!target) return <Navigate to="/" replace />

  return (
    <div>
      {navItems.map((item, index) => {
        const Section = sectionComponents[item.id]
        return (
          <section
            key={item.id}
            id={item.id}
            aria-label={item.label}
            className={`scroll-mt-(--header-height) ${
              index > 0 ? 'mt-10 border-t border-border pt-10' : ''
            }`}
          >
            <Section headingLevel={index === 0 ? 1 : 2} />
          </section>
        )
      })}
      <Footer />
      <BackToTop />
    </div>
  )
}