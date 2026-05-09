import { useMemo, useState } from 'react'

const initialProjects = [
  {
    id: 'project-1',
    title: 'Project 1',
    description: 'Description of the project',
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Description of the project',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    description: 'Description of the project',
  },
]

export function useProjects() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase()

    if (!normalizedTerm) {
      return projects
    }

    return projects.filter((project) => {
      return (
        project.title.toLowerCase().includes(normalizedTerm) ||
        project.description.toLowerCase().includes(normalizedTerm)
      )
    })
  }, [projects, searchTerm])

  const addProject = ({ title, description }) => {
    const nextProject = {
      id: `project-${Date.now()}`,
      title,
      description,
    }

    setProjects((currentProjects) => [nextProject, ...currentProjects])
  }

  return {
    projects,
    filteredProjects,
    searchTerm,
    setSearchTerm,
    addProject,
  }
}
