import { useEffect, useRef, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  )
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const toggleTheme = () => {
    const root = document.documentElement
    const next = theme === 'dark' ? 'light' : 'dark'

    // Enables the short color transition defined in global.css
    root.setAttribute('data-theme-transition', '')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => root.removeAttribute('data-theme-transition'), 300)

    setTheme(next)
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* storage unavailable; theme still works for this session */
    }
  }

  return { theme, toggleTheme }
}