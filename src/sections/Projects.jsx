import { projects } from '../data/projects'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import ProjectGrid from '../components/projects/ProjectGrid'

export default function Projects({ headingLevel = 2 }) {
  return (
    <Stack>
      <SectionHeader
        title="Projects"
        description="Things I've built, with live demos and source code where available."
        level={headingLevel}
      />
      <ProjectGrid projects={projects} headingLevel={headingLevel + 1} />
    </Stack>
  )
}