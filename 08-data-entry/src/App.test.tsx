import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders popular movies header', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/popular movies/i);
  expect(linkElement).toBeInTheDocument();
});
