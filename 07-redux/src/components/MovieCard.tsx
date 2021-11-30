import { Movie } from '../types/movie';
import { Vote } from './Vote';

import classes from './MovieCard.module.css';

interface Props {
  movie: Movie;
  onMovieClick: () => void;
}

export function MovieCard({ movie, onMovieClick }: Props) {
  return (
    <article className={classes.MovieCard} onClick={onMovieClick}>
      <h2>{`${movie.favorite ? '♥ ' : ''}${movie.title}`}</h2>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
        width="220"
        height="330"
      />
      <Vote average={movie.vote_average / 2} count={movie.vote_count} max={5} />
    </article>
  );
}
