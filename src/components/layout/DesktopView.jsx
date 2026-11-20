import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { profile } from '../../data/profile'
import { sectionComponents } from '../../sections'

const defaultTitle = `${profile.name} | ${profile.title}`

export default function DesktopView() {
  const { pathname } = useLocation()
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const current = navItems.find((item) => item.to === normalizedPath)

  // Each desktop view starts at the top of the page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [normalizedPath])

  // Update the tab title per section; restore the default when leaving desktop mode.
  useEffect(() => {
    document.title =
      current && current.to !== '/' ? `${current.label} | ${profile.name}` : defaultTitle
    return () => {
      document.title = defaultTitle
    }
  }, [current])

  return (
    <div key={normalizedPath} className="animate-fade-in">
      <Routes>
        {navItems.map((item) => {
          const Section = sectionComponents[item.id]
          return <Route key={item.id} path={item.to} element={<Section headingLevel={1} />} />
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}