import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router';

test('renders popular movies header', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = await screen.findByText(/popular movies/i);
  expect(linkElement).toBeInTheDocument();
});
