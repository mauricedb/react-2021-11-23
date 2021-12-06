import { ReactElement, useState } from 'react';

import { MovieTableLoader } from './MovieTableLoader';
import { MovieEditorLoader } from './MovieEditorLoader';

import classes from './TopRatedMovies.module.css';

export function TopRatedMovies(): ReactElement {
  const [selectedMovieId, setSelectedMovieId] = useState<number>(NaN);

  return (
    <main className={classes.PopularMovies}>
      <h1>Top Rated Movies</h1>

      {selectedMovieId ? (
        <MovieEditorLoader
          movieId={selectedMovieId}
          clearSelectedMovie={() => setSelectedMovieId(NaN)}
        />
      ) : (
        <MovieTableLoader
          selectMovie={(movie) => setSelectedMovieId(movie.id)}
        />
      )}
    </main>
  );
}
