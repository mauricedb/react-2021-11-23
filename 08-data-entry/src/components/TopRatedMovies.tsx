import { ReactElement, useState } from 'react';
import { MovieEditor } from './MovieEditor';

import classes from './TopRatedMovies.module.css';
import { MovieTable } from './MovieTable';

export function TopRatedMovies(): ReactElement {
  const [selectedMovieId, setSelectedMovieId] = useState<number>(NaN);

  return (
    <main className={classes.PopularMovies}>
      <h1>Top Rated Movies</h1>

      {selectedMovieId ? (
        <MovieEditor
          movieId={selectedMovieId}
          clearSelectedMovie={() => setSelectedMovieId(NaN)}
        />
      ) : (
        <MovieTable selectMovie={(movie) => setSelectedMovieId(movie.id)} />
      )}
    </main>
  );
}
