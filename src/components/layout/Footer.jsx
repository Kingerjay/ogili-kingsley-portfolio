import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-1 border-t border-border pt-6 text-sm text-text-secondary">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      
    </footer>
  )
}