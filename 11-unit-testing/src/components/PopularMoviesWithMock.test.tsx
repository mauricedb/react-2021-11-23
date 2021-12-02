import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PopularMovies from './PopularMovies';

let mockData = [];

jest.mock('../hooks/useFetch', () => ({
  useFetch: () => ({
    data: mockData,
    error: null,
  }),
}));

describe('<PopularMovies />', () => {
  test('it renders', () => {
    mockData = [];

    render(
      <MemoryRouter>
        <PopularMovies />
      </MemoryRouter>
    );

    expect(screen.getByText('Popular Movies')).toBeVisible();
  });

  test('it a movies card', () => {
    mockData = [
      {
        id: 1,
        title: 'The Movie Title',
        vote_count: 1,
        vote_average: 1,
      },
    ];

    render(
      <MemoryRouter>
        <PopularMovies />
      </MemoryRouter>
    );

    expect(screen.getByText('The Movie Title')).toBeVisible();
  });
});
