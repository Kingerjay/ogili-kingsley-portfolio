import { ExternalLink } from 'lucide-react'
import { BadgeList } from './Badge'

export function TimelineList({ children }) {
  return <ul className="flex flex-col gap-8">{children}</ul>
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  description,
  points,
  tech,
  link,
  headingLevel = 3,
}) {
  const Heading = `h${headingLevel}`

  return (
    <li className="flex flex-col gap-2 border-l-2 border-border pl-5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <Heading className="text-(length:--text-h3) font-semibold leading-[1.3]">{title}</Heading>
        {date && <p className="text-sm text-text-secondary">{date}</p>}
      </div>
      {subtitle && <p className="text-sm font-medium text-text-secondary">{subtitle}</p>}
      {description && <p className="max-w-[65ch] text-text-secondary">{description}</p>}
      {points?.length > 0 && (
        <ul className="flex list-disc flex-col gap-1 pl-5 text-text-secondary">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {tech?.length > 0 && <BadgeList items={tech} label="Technologies used" />}
      {link && (
        <a
          className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-link hover:underline"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
          <ExternalLink size={14} aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      )}
    </li>
  )
}