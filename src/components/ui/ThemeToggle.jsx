import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import IconButton from './IconButton'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const Icon = isDark ? Sun : Moon

  return (
    <IconButton
      onClick={toggleTheme}
      label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <Icon size={22} strokeWidth={2} aria-hidden="true" />
    </IconButton>
  )
}