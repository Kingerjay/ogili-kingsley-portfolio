import { profile } from '../../data/profile'
import { LinkedInIcon, GitHubIcon } from '../ui/SocialIcons'
import IconButton from '../ui/IconButton'
import ThemeToggle from '../ui/ThemeToggle'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-(--header-height) items-center justify-between gap-3 border-b border-border bg-bg px-4 transition-colors duration-200 min-[481px]:px-6">
      <Link to="/" className="min-w-0 truncate text-base font-semibold tracking-[-0.01em] min-[481px]:text-xl">
        {profile.name}
      </Link>

      <div className="flex shrink-0 items-center gap-1">
        <IconButton href={profile.social.linkedin} label="LinkedIn profile">
          <LinkedInIcon />
        </IconButton>
        <IconButton href={profile.social.github} label="GitHub profile">
          <GitHubIcon />
        </IconButton>
        <ThemeToggle />
      </div>
    </header>
  )
}