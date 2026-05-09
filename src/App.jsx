import './App.css'
import Header from './components/Header'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import { useProjects } from './hooks/useProjects'

function App() {
  const { filteredProjects, searchTerm, setSearchTerm, addProject } = useProjects()

  return (
    <div className="app-shell">
      <Header />
      <main className="content-grid">
        <section className="panel panel--form">
          <div className="panel__header">
            <h2>Add Project</h2>
          </div>
          <ProjectForm onAddProject={addProject} />
        </section>

        <section className="panel panel--projects">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </div>
  )
}

export default App
