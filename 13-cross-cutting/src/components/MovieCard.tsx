import { useNavigate } from 'react-router-dom';

import { Movie } from '../types/movie';
import { Vote } from './Vote';

import classes from './MovieCard.module.css';
import React from 'react';

interface Props {
  movie: Movie;
  styles?: object;
  type: string;
}

export function MovieCard({ movie, styles, type }: Props) {
  const navigate = useNavigate();

  return (
    <article
      style={styles}
      className={classes.MovieCard}
      onClick={() => {
        navigate(`/${type}/${movie.id}`);
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
