import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('Personal Project Showcase', () => {
  test('renders the dashboard header and initial projects', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /build, search, and review your ideas/i }),
    ).toBeInTheDocument()

    expect(screen.getByText(/project 1/i)).toBeInTheDocument()
    expect(screen.getByText(/project 2/i)).toBeInTheDocument()
    expect(screen.getByText(/project 3/i)).toBeInTheDocument()
  })

  test('adds a new project and displays it in the list', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/project title/i), 'New App')
    await user.type(
      screen.getByLabelText(/project description/i),
      'A strong app example',
    )
    await user.click(screen.getByRole('button', { name: /add/i }))

    expect(screen.getByText(/new app/i)).toBeInTheDocument()
    expect(screen.getByText(/a strong app example/i)).toBeInTheDocument()
  })

  test('filters the list when the search input changes', async () => {
    const user = userEvent.setup()
    render(<App />)

    const searchInput = screen.getByLabelText(/search projects/i)
    await user.type(searchInput, 'Project 2')

    expect(screen.getByText(/project 2/i)).toBeInTheDocument()
    expect(screen.queryByText(/project 1/i)).not.toBeInTheDocument()
  })
})
