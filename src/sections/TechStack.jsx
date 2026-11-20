import { techStack } from '../data/techStack'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import { BadgeList } from '../components/ui/Badge'

export default function TechStack({ headingLevel = 2 }) {
  const GroupHeading = `h${headingLevel + 1}`

  return (
    <Stack>
      <SectionHeader
        title="Tech Stack"
        description="The languages, frameworks and tools I work with."
        level={headingLevel}
      />
      <div className="flex flex-col gap-6">
        {techStack.map((group) => (
          <div key={group.group} className="flex flex-col gap-3">
            <GroupHeading className="text-(length:--text-h3) font-semibold">
              {group.group}
            </GroupHeading>
            <BadgeList items={group.items} label={`${group.group} technologies`} />
          </div>
        ))}
      </div>
    </Stack>
  )
}