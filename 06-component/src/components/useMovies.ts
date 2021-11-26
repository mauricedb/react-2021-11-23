import { useState, useEffect } from 'react';
import { Movie } from '../types/movie';

export function useMovies() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(
        'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies'
      );
      const movies = await rsp.json();
      setMovies((state) => movies);
    }

    fetchMovies();

    // return undefined;
  }, []);

  return movies;
}
