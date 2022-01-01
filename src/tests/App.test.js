import { render, screen } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import App from '../routes/App';

// link to icebreaker
test('full app rendering/navigating', () => {
  render(<App />, {wrapper: MemoryRouter})

  // verify page content for expected route
  expect(screen.getByText(/icebreaker/i)).toBeInTheDocument()
})

// link to littletalk
test('full app rendering/navigating', () => {
    render(<App />, {wrapper: MemoryRouter})
  
    // verify page content for expected route
    expect(screen.getByText(/littletalk/i)).toBeInTheDocument()
  })