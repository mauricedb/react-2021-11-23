import { ReactElement, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';
import { SelectedMovie } from './SelectedMovie';

import classes from './PopularMovies.module.css';

export function PopularMovies(): ReactElement {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { data: movies, error } = useFetch<Movie[]>(
    'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies'
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>
      {selectedMovie ? (
        <SelectedMovie
          movie={selectedMovie}
          clearSelectedMovie={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <section className={classes.MovieList}>
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                selectMovie={() => setSelectedMovie(movie)}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
}
