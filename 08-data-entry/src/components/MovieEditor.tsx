import { Movie } from '../types/movie';
import { useFetch } from '../hooks/useFetch';

import classes from './MovieEditor.module.css';

interface Props {
  movieId: number;
  clearSelectedMovie: () => void;
}

const baseUrl =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/';

export function MovieEditor({ clearSelectedMovie, movieId }: Props) {
  const url = `${baseUrl}${movieId}`;
  const { data: movie, error } = useFetch<Movie>(url);

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
      <input type="text" value={movie.title} />

      <label>Overview</label>
      <textarea value={movie.overview} rows={10} />

      <label>Release date</label>
      <input type="date" value={movie.release_date} />

      <label>vote_average</label>
      <input type="number" defaultValue={movie.vote_average} min={1} max={10} />

      <label>vote_count</label>
      <input type="number" value={movie.vote_count} />

      <div className={classes.EditorButtons}>
        <button type="submit">Save</button>
        <button type="button" onClick={clearSelectedMovie}>
          Cancel
        </button>
      </div>
    </form>
  );
}
