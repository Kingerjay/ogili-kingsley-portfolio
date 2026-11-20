import { education } from '../data/education'
import SectionHeader from '../components/ui/SectionHeader'
import Stack from '../components/ui/Stack'
import TimelineItem, { TimelineList } from '../components/ui/TimelineItem'

export default function Education({ headingLevel = 2 }) {
  const hasItems = education.length > 0

  return (
    <Stack>
      <SectionHeader
        title="Education & Certifications"
        description={
          hasItems
            ? 'Formal education and relevant certifications.'
            : 'Education and certification details will be added here soon.'
        }
        level={headingLevel}
      />
      {hasItems && (
        <TimelineList>
          {education.map((item) => (
            <TimelineItem
              key={item.id}
              title={item.name}
              subtitle={item.institution}
              date={item.date}
              link={item.verifyUrl ? { url: item.verifyUrl, label: 'Verify credential' } : undefined}
              headingLevel={headingLevel + 1}
            />
          ))}
        </TimelineList>
      )}
    </Stack>
  )
}