import { Download } from 'lucide-react'
import { profile } from '../../data/profile'

export default function DownloadCV() {
  return (
    <a
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.9375rem] text-text transition-colors duration-150 hover:bg-surface"
      href={profile.cv.path}
      download={profile.cv.filename}
    >
      <Download className="shrink-0 text-link" size={18} strokeWidth={1.75} aria-hidden="true" />
      <span>Download CV</span>
    </a>
  )
}