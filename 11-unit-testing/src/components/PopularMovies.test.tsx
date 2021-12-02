import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PopularMovies from './PopularMovies';

describe('<PopularMovies />', () => {
  let oldFetch;
  beforeEach(() => {
    oldFetch = window.fetch;
    window.fetch = jest.fn(() => ({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: 'Ad Astra',
            vote_count: 1,
            vote_average: 1,
          },
        ]),
    }));
  });

  afterAll(() => {
    window.fetch = oldFetch;
  });

  test.only('it renders', async () => {
    render(
      <MemoryRouter>
        <PopularMovies />
      </MemoryRouter>
    );

    expect(await screen.findByText('Ad Astra')).toBeVisible();
  });
});

describe('<PopularMovies />', () => {
  let oldFetch;
  beforeEach(() => {
    oldFetch = window.fetch;
    window.fetch = jest.fn(() => ({
      ok: false,
      status: 404,
      statusText: 'Not found',
    }));
  });

  afterAll(() => {
    window.fetch = oldFetch;
  });

  test.only('it renders', async () => {
    render(
      <MemoryRouter>
        <PopularMovies />
      </MemoryRouter>
    );

    expect(await screen.findByText('Error: Not found')).toBeVisible();
  });
});
