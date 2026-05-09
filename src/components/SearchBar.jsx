function SearchBar({ value, onChange }) {
  return (
    <div className="search-panel">
      <label className="search-label" htmlFor="search-projects">
        Search Projects
      </label>
      <input
        id="search-projects"
        className="search-field"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or description"
        aria-label="Search projects"
      />
    </div>
  )
}

export default SearchBar
