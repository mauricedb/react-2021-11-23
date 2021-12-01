import { Movie } from '../types/movie';
import classes from './MovieList.module.css';
import { MovieCard } from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { AllActions, MovieState } from '../store/types';
import { Dispatch } from 'react';

export function MovieList() {
  const dispatch = useDispatch<Dispatch<AllActions>>();
  const movies = useSelector<MovieState, Movie[]>((state) => state.movies);
  function onMovieClick(movie: Movie) {
    dispatch({ type: 'SELECT-MOVIE', payload: movie.id });
  }

  return (
    <section className={classes.MovieList}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => onMovieClick(movie)}
        />
      ))}
    </section>
  );
}
