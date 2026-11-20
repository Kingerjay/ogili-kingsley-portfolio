import { experience } from '../data/experience'
import { projects } from '../data/projects'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import TimelineItem, { TimelineList } from '../components/ui/TimelineItem'

export default function Experience({ headingLevel = 2 }) {
  const hasExperience = experience.length > 0
  const itemLevel = headingLevel + 1

  return (
    <Stack>
      <SectionHeader
        title="Experience"
        description={
          hasExperience
            ? 'Roles and practical work.'
            : "I'm currently looking for a software developer role or internship. Until then, here is the practical work I can show today."
        }
        level={headingLevel}
      />
      <TimelineList>
        {hasExperience
          ? experience.map((entry) => (
              <TimelineItem
                key={entry.id}
                title={entry.role}
                subtitle={entry.organization}
                date={entry.dates}
                description={entry.description}
                points={entry.responsibilities}
                tech={entry.tech}
                headingLevel={itemLevel}
              />
            ))
          : projects.map((project) => {
              const url = project.liveUrl ?? project.npmUrl ?? project.repoUrl
              return (
                <TimelineItem
                  key={project.id}
                  title={project.title}
                  subtitle="Practical project"
                  description={project.description}
                  tech={project.tech}
                  link={url ? { url, label: 'View project' } : undefined}
                  headingLevel={itemLevel}
                />
              )
            })}
      </TimelineList>
    </Stack>
  )
}