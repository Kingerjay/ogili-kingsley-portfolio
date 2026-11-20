import { ExternalLink, FolderGit2 } from 'lucide-react'
import { BadgeList } from '../ui/Badge'

export default function ProjectCard({ project, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`

  const links = [
    project.liveUrl && { label: 'Live Demo', href: project.liveUrl },
    project.playgroundUrl && { label: 'Playground', href: project.playgroundUrl },
    project.repoUrl && { label: 'GitHub', href: project.repoUrl },
    project.npmUrl && { label: 'npm Package', href: project.npmUrl },
  ].filter(Boolean)

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition duration-200 lg:hover:-translate-y-0.5 lg:hover:border-primary">
      <div className="aspect-video border-b border-border bg-primary-soft">
        {project.image ? (
          <img
            className="block size-full object-cover"
            src={project.image}
            alt={`Screenshot of the ${project.title} project`}
            loading="lazy"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-link" aria-hidden="true">
            <FolderGit2 size={32} strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <Heading className="text-(length:--text-h3) font-semibold leading-[1.3]">
          {project.title}
        </Heading>
        <p className="text-[0.9375rem] text-text-secondary">{project.description}</p>

        {project.tech?.length > 0 && <BadgeList items={project.tech} label="Technologies used" />}

        {links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="inline-flex items-center gap-1 text-[0.9375rem] font-medium text-link hover:underline"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label}: ${project.title} (opens in a new tab)`}
                >
                  {link.label}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}