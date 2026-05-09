function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__icon">⚡</span>
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectCard
