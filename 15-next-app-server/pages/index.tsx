import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieCard } from '../components/MovieCard';
import { SelectedMovie } from '../components/SelectedMovie';

import classes from '../components/PopularMovies.module.css';

const Home: NextPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const { data: movies, error } = useFetch<Movie[]>(
    'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies'
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>
      {selectedMovie ? (
        <SelectedMovie
          movie={selectedMovie}
          clearSelectedMovie={() => setSelectedMovie(null)}
        />
      ) : (
        <>
          <section className={classes.MovieList}>
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                selectMovie={() => setSelectedMovie(movie)}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
