import { useNavigate } from 'react-router';

import { Movie } from '../types/movie';
import { Vote } from './Vote';

import classes from './MovieCard.module.css';
import React from 'react';

interface Props {
  movie: Movie;
  styles?: object;
}

export function MovieCard({ movie, styles }: Props) {
  const navigate = useNavigate();

  console.count('MovieCard');
  return (
    <article
      style={styles}
      className={classes.MovieCard}
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      <h2>{movie.title}</h2>
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

export const MovieCardMemo = React.memo(MovieCard);

MovieCardMemo.displayName = 'MovieCardMemo2';
