import { Movie } from '../types/movie';
import classes from './MovieList.module.css';
import { MovieCard } from './MovieCard';

interface Props {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export function MovieList({ movies, onMovieClick }: Props) {
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
