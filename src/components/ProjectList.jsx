import ProjectCard from './ProjectCard'

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No projects match your search</p>
        <p className="empty-state__description">
          Adjust the search term or add a new project to begin tracking your
          showcase.
        </p>
      </div>
    )
  }

  return (
    <ul className="project-list" aria-live="polite">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  )
}

export default ProjectList
