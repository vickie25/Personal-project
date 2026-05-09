import { useState } from 'react'

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedDescription = description.trim()

    if (!trimmedTitle || !trimmedDescription) {
      return
    }

    onAddProject({ title: trimmedTitle, description: trimmedDescription })
    setTitle('')
    setDescription('')
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <label className="form-group">
        <span className="field-label">Title</span>
        <input
          className="field-input"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Project name"
          aria-label="Project title"
        />
      </label>

      <label className="form-group">
        <span className="field-label">Description</span>
        <textarea
          className="field-textarea"
          rows="5"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe the project"
          aria-label="Project description"
        />
      </label>

      <div className="form-actions">
        <button type="submit" className="button button--primary">
          Add
        </button>
      </div>
    </form>
  )
}

export default ProjectForm
