import {
  LayoutDashboard,
  UserRound,
  FolderGit2,
  CodeXml,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
} from 'lucide-react'

export const navItems = [
  { id: 'overview', to: '/', label: 'Overview', icon: LayoutDashboard },
  { id: 'about', to: '/about', label: 'About Me', icon: UserRound },
  { id: 'projects', to: '/projects', label: 'Projects', icon: FolderGit2 },
  { id: 'tech-stack', to: '/tech-stack', label: 'Tech Stack', icon: CodeXml },
  { id: 'experience', to: '/experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'education', to: '/education', label: 'Education & Certifications', icon: GraduationCap },
  { id: 'contact', to: '/contact', label: 'Contact', icon: Mail },
]