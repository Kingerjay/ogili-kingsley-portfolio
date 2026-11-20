import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import Button from '../components/ui/Button'
import ProjectGrid from '../components/projects/ProjectGrid'

export default function Overview({ headingLevel = 2 }) {
  const featured = projects.filter((project) => project.featured)
  const SubHeading = `h${headingLevel + 1}`

  return (
    <Stack>
      <div className="flex flex-col gap-6">
        <SectionHeader
          eyebrow="Welcome to my portfolio"
          title={profile.tagline}
          description={`${profile.name} · ${profile.title}`}
          level={headingLevel}
        />
        <p className="max-w-[65ch]">{profile.intro}</p>
        <div className="flex flex-wrap gap-3">
          <Button to="/projects">
            View Projects <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button to="/contact" variant="secondary">
            Contact Me
          </Button>
          <Button href={profile.cv.path} download={profile.cv.filename} variant="secondary">
            <Download size={16} aria-hidden="true" /> Download CV
          </Button>
        </div>
      </div>

      {featured.length > 0 && (
        <div className="hidden flex-col gap-4 lg:flex">
          <SubHeading className="text-(length:--text-h3) font-semibold">
            Featured Projects
          </SubHeading>
          <ProjectGrid projects={featured} headingLevel={headingLevel + 2} />
        </div>
      )}
    </Stack>
  )
}