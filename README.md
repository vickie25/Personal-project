# Personal Project Showcase App

A responsive React dashboard for adding, searching, and reviewing personal project entries. This app is built with Vite and React, and includes Jest plus React Testing Library for component-level tests.

## Features

- Add new project cards with title and description
- Search projects by title or description
- Responsive layout for desktop and mobile
- Clear component tree with reusable child components
- Unit tests for form submission and search behavior

## Component Tree

- `App`
  - `Header`
  - `ProjectForm`
  - `SearchBar`
  - `ProjectList`
    - `ProjectCard`

## State and Props

- `App` holds central state via `useProjects`
  - `projects`
  - `searchTerm`
  - `filteredProjects`
- `ProjectForm` manages local input state and lifts new project data to `App`
- `SearchBar` receives `searchTerm` and `onChange` from `App`
- `ProjectList` receives filtered project data and renders `ProjectCard` components

## Setup

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the app in your browser at the address shown in the terminal

## Testing

Run unit tests with:

```bash
npm test
```

## Notes

- The app uses `useState` and `useMemo` for local state and derived data.
- Styling is implemented with modern CSS and responsive grid layout.
- Jest is configured with Babel to support JSX and CSS imports in tests.
