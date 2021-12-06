import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next';
import Head from 'next/head';
import React from 'react';

import classes from '../../components/SelectedMovie.module.css';
import { Movie } from '../../types/movie';
import { Vote } from '../../components/Vote';
import { useRouter } from 'next/router';

// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const movieId = context.query.movieId;

//   const rsp = await fetch(
//     `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies/${movieId}`
//   );
//   const movie = await rsp.json();

//   return {
//     props: { movie },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const rsp = await fetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies`
  );
  const movies = await rsp.json();

  const paths = movies
    .filter((m: unknown, i: number) => i < 10)
    .map((m: Movie) => ({
      params: {
        movieId: m.id.toString(),
      },
    }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const movieId = context.params?.movieId;

  const rsp = await fetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies/${movieId}`
  );
  const movie = await rsp.json();

  return {
    props: { movie },
  };
};

interface Props {
  movie: Movie;
}

const MovieDetails: NextPage<Props> = ({ movie }) => {
  const router = useRouter();

  return (
    <section className={classes.SelectedMovie}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <Head>
        <title>{movie.title}</title>
      </Head>

      <p>
        Released on:&nbsp;
        {new Date(movie.release_date).toLocaleDateString()}
      </p>
      <Vote average={movie.vote_average} count={movie.vote_count} />
      <p>
        <button
          onClick={() => {
            router.push('/');
          }}
        >
          Back
        </button>
      </p>
    </section>
  );
};

export default MovieDetails;
