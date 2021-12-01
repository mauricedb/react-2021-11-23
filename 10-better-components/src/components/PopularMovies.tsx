import { ReactElement, useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

import classes from './PopularMovies.module.css';

export default function PopularMovies(): ReactElement {
  const [error, setError] = useState<Error | undefined>(undefined);
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);

  useEffect(() => {
    async function executeFetch() {
      try {
        setMovies(undefined);
        setError(undefined);

        const rsp = await fetch(
          'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies'
        );
        if (rsp.ok) {
          const data = await rsp.json();

          setMovies(data);
        } else {
          setError(new Error(rsp.statusText));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unkown error when fetching data'));
        }
      }
    }

    executeFetch();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>
      <div>
        <button
          onClick={() => {
            setMovies([
              {
                id: Date.now(),
                title: 'Top Gun: Maverick',
                overview:
                  "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
                vote_average: 10 * Math.random(),
                vote_count: Math.floor(1000 * Math.random()),
                release_date: '2022-01-01',
                poster_path: '/i0FHyNF9VvQTXOi4yKnZJ1zql1.jpg',
              } as Movie,
              ...movies,
            ]);
          }}
        >
          Add Top Gun: Maverick
        </button>
      </div>
      <section className={classes.MovieList}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
}
