import ProjectCard from './ProjectCard'

export default function ProjectGrid({ projects, headingLevel = 3 }) {
  return (
    <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}