import { ReactElement } from 'react';
import { Movie } from '../types/movie';

import classes from './MovieTable.module.css';

interface Props {
  data: Movie[] | undefined;
  error: Error | undefined;
  selectMovie: (movie: Movie) => void;
}

export function MovieTable({ data, error, selectMovie }: Props): ReactElement {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
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
        {data.map((movie) => (
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
