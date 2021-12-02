import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

describe('<MovieCard />', () => {
  test('can render without errors', () => {
    const movie = {
      id: 1,
      title: 'A movie',
      vote_count: 1,
      vote_average: 2,
      poster_path: '',
    } as Movie;

    render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>
    );

    expect(screen.getByText('A movie')).toBeVisible();
  });
  test('can render the rating', () => {
    const movie = {
      id: 1,
      title: 'A movie',
      vote_count: 1,
      vote_average: 8,
      poster_path: '',
    } as Movie;

    render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>
    );

    expect(screen.getByText(/★★★★☆/)).toBeVisible();
    expect(screen.getByText('Votes: ★★★★☆ (1)')).toBeVisible();
  });
});
