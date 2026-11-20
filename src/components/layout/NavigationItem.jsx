import { NavLink } from 'react-router-dom'

const base =
  'relative flex items-center gap-3 rounded-md px-3 py-2.5 text-[0.9375rem] transition-colors duration-150'
const idle = 'text-text hover:bg-surface'
const active =
  'overflow-hidden bg-primary-soft font-semibold text-link after:absolute after:inset-y-0 after:right-0 after:w-[3px] after:bg-primary'

export default function NavigationItem({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) => `${base} ${isActive ? active : idle}`}
    >
      <Icon className="shrink-0 text-link" size={18} strokeWidth={1.75} aria-hidden="true" />
      <span>{label}</span>
    </NavLink>
  )
}