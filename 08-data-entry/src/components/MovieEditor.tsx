import { Movie } from '../types/movie';
import { useFetch } from '../hooks/useFetch';

import classes from './MovieEditor.module.css';
import { useMemo } from 'react';
import { Field, Form, Formik } from 'formik';

interface Props {
  movieId: number;
  clearSelectedMovie: () => void;
}

function validate(movie?: Movie): string {
  if (!movie?.title) {
    return 'The title is required';
  }

  return '';
}

const baseUrl =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/';

export function MovieEditor({ clearSelectedMovie, movieId }: Props) {
  const url = `${baseUrl}${movieId}`;
  const { data: movie, error, setData } = useFetch<Movie>(url);
  const errorMessage = useMemo(() => validate(movie), [movie]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Formik
      initialValues={movie}
      onSubmit={async (movie) => {
        await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(movie),
        });
        clearSelectedMovie();
      }}
    >
      <Form className={classes.MovieEditor}>
        <div>{errorMessage}</div>

        <label>Title</label>
        <Field type="text" name="title" />

        <label>Overview</label>
        <Field rows={10} name="overview" />

        {/* <label>Release date</label>
      <input
        type="date"
        name="release_date"
        value={movie.release_date}
        onChange={(e) =>
          setData((movie) => ({ ...movie!, release_date: e.target.value }))
        }
      />

      <label>vote_average</label>
      <input
        type="number"
        min={1}
        max={10}
        value={movie.vote_average}
        onChange={(e) =>
          setData((movie) => ({ ...movie!, vote_average: +e.target.value }))
        }
      />

      <label>vote_count</label>
      <input
        type="number"
        value={movie.vote_count}
        onChange={(e) =>
          setData((movie) => ({ ...movie!, vote_count: +e.target.value }))
        }
      />

      <label>original_language</label>
      <input type="text" defaultValue={movie.original_language} /> */}

        <div className={classes.EditorButtons}>
          <button type="submit" disabled={!!errorMessage}>
            Save
          </button>
          <button type="button" onClick={clearSelectedMovie}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
}
