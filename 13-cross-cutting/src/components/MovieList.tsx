import { ReactElement, useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

import classes from './MovieList.module.css';

interface Props {
  title: string;
  type: string;
  url: string;
}

export function MovieList({ title, type, url }: Props): ReactElement {
  const { data: movies, error } = useFetch<Movie[]>(url);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{title}</h1>
      <section className={classes.MovieList}>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} type={type} />
        ))}
      </section>
    </main>
  );
}
