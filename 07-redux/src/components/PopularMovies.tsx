import { Dispatch, ReactElement, useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { SelectedMovie } from './SelectedMovie';

import classes from './PopularMovies.module.css';
import { MovieList } from './MovieList';
import { useDispatch, useSelector } from 'react-redux';
import { AllActions, LOAD_MOVIES, MovieState } from '../store/types';

export default function PopularMovies(): ReactElement {
  const dispatch = useDispatch();

  const movies = useSelector<MovieState, Movie[]>((state) => state.movies);
  const selectedMovieId = useSelector<MovieState, number>(
    (state) => state.selectedMovieId
  );

  const selectedMovie = movies.find(
    (movie: Movie) => movie.id === selectedMovieId
  );

  useEffect(() => {
    dispatch(LOAD_MOVIES);
  }, [dispatch]);

  function toggleFavorite(movieId: number): void {
    const newMovies = movies.map((movie) => {
      if (movie.id === movieId) {
        return { ...movie, favorite: !movie.favorite };
      }
      return movie;
    });

    // setMovies(newMovies);
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>

      {selectedMovie ? (
        <SelectedMovie
          movie={selectedMovie}
          clearSelectedMovie={() => {
            //  setSelectedMovieId(NaN);
            dispatch({ type: 'SELECT-MOVIE', payload: NaN });
          }}
          toggleFavorite={toggleFavorite}
        />
      ) : (
        <MovieList />
      )}
    </main>
  );
}
