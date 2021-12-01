import { Movie } from '../types/movie';
import { useFetch } from '../hooks/useFetch';

import classes from './MovieEditor.module.css';
import { useEffect, useRef } from 'react';

interface Props {
  movieId: number;
  clearSelectedMovie: () => void;
}

const baseUrl =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/';

export function MovieEditor({ clearSelectedMovie, movieId }: Props) {
  const url = `${baseUrl}${movieId}`;
  const { data: movie, error, setData } = useFetch<Movie>(url);

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setData((movie) => ({ ...movie!, title: 'New title' }));
    }, 2500);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <form
      className={classes.MovieEditor}
      onSubmit={async (e) => {
        e.preventDefault();

        movie.title = titleRef.current?.value ?? '';

        if (titleRef.current) {
          movie.title = titleRef.current.value;
        }

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
      <label>Title</label>
      <input type="text" ref={titleRef} defaultValue={movie.title} />

      <label>Overview</label>
      <textarea rows={10} defaultValue={movie.overview} />

      <label>Release date</label>
      <input
        type="date"
        name="release_date"
        defaultValue={movie.release_date}
      />

      <label>vote_average</label>
      <input type="number" min={1} max={10} />

      <label>vote_count</label>
      <input type="number" />

      <div className={classes.EditorButtons}>
        <button type="submit">Save</button>
        <button type="button" onClick={clearSelectedMovie}>
          Cancel
        </button>
      </div>
    </form>
  );
}
