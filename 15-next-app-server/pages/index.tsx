import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ReactElement, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieCard } from '../components/MovieCard';
import { SelectedMovie } from '../components/SelectedMovie';

import classes from '../components/PopularMovies.module.css';

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const rsp = await fetch(
//     `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies`
//   );
//   const movies = await rsp.json();

//   return {
//     props: { movies },
//   };
// };

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const rsp = await fetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies`
  );
  const movies = await rsp.json();

  return {
    props: { movies },
    revalidate: 60,
  };
};

interface Props {
  movies: Movie[];
}

const Home: NextPage<Props> = ({ movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <main className={classes.PopularMovies}>
      <h1>Popular Movies</h1>

      <>
        <section className={classes.MovieList}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </>
    </main>
  );
};

export default Home;
