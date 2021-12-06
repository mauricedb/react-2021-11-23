import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '../types/movie';
import { Vote } from './Vote';

import classes from './MovieCard.module.css';

interface Props {
  movie: Movie;
}

export function MovieCard({ movie }: Props) {
  return (
    <article className={classes.MovieCard}>
      <Link href={`/movie/${movie.id}`}>
        <a>
          <h2>{movie.title}</h2>
          <Image
            src={`https://www.themoviedb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width="220"
            height="330"
          />
          <Vote
            average={movie.vote_average / 2}
            count={movie.vote_count}
            max={5}
          />
        </a>
      </Link>
    </article>
  );
}
