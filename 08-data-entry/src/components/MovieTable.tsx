import { ReactElement } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';

import classes from './MovieTable.module.css';

interface Props {
  selectMovie: (movie: Movie) => void;
}

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies';

export function MovieTable({ selectMovie }: Props): ReactElement {
  const { data: movies, error } = useFetch<Movie[]>(url);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <table className={classes.Table}>
      <thead>
        <tr>
          <th className={classes.TitleHeader}>Title</th>
          <th className={classes.ButtonHeader} />
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>
              <button onClick={() => selectMovie(movie)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
