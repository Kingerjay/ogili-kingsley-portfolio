import { navItems } from '../../data/navigation'
import NavigationItem from './NavigationItem'
import DownloadCV from '../ui/DownloadCV'

export default function Sidebar() {
  return (
    <aside className="sticky top-(--header-height) flex h-[calc(100dvh-var(--header-height))] w-(--sidebar-width) shrink-0 flex-col justify-between self-start overflow-y-auto border-r border-border bg-bg p-4 transition-colors duration-200">
      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavigationItem to={item.to} label={item.label} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-border pt-4">
        <DownloadCV />
      </div>
    </aside>
  )
}