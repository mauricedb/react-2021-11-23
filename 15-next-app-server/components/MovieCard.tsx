import { Movie } from '../types/movie';
import { Vote } from './Vote';

import classes from './MovieCard.module.css';

interface Props {
  movie: Movie;
  selectMovie: () => void;
}

export function MovieCard({ movie, selectMovie }: Props) {
  return (
    <article className={classes.MovieCard} onClick={selectMovie}>
      <h2>{movie.title}</h2>
      <img
        src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width="220"
        height="330"
      />
      <Vote average={movie.vote_average / 2} count={movie.vote_count} max={5} />
    </article>
  );
}
