import { ReactElement, useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { SelectedMovie } from './SelectedMovie';

import classes from './PopularMovies.module.css';
import { MovieList } from './MovieList';

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies';

export default function PopularMovies(): ReactElement {
  const [selectedMovieId, setSelectedMovieId] = useState<Number>(NaN);
  const [movies, setMovies] = useState<Movie[]>([]);
  const selectedMovie = movies.find(
    (movie: Movie) => movie.id === selectedMovieId
  );

  useEffect(() => {
    async function executeFetch() {
      const rsp = await fetch(url);
      setMovies(await rsp.json());
    }

    executeFetch();
  }, []);

  function toggleFavorite(movieId: number): void {
    const newMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: !m.favorite } : m
    );
    setMovies(newMovies);
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>

      {selectedMovie ? (
        <SelectedMovie
          movie={selectedMovie}
          clearSelectedMovie={() => setSelectedMovieId(NaN)}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <MovieList
          movies={movies}
          onMovieClick={(movie) => setSelectedMovieId(movie.id)}
        />
      )}
    </main>
  );
}
