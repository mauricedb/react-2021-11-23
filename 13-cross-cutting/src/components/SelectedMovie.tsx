import { Link, useParams } from 'react-router-dom';
import { Movie } from '../types/movie';
import { Vote } from './Vote';
import classes from './SelectedMovie.module.css';
import { useFetch } from '../hooks/useFetch';
import { useState } from 'react';

export function SelectedMovie() {
  const [suspend, setSuspend] = useState(false);
  const { id, type } = useParams<'id' | 'type'>();

  const { data: movie, error } = useFetch<Movie>(
    `https://the-problem-solver-sample-data.azurewebsites.net/${type}/${id}`
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  if (movie.title.length > 20) {
    throw new Error('The title is tool long');
  }

  if (suspend) {
    throw new Promise((resolve) => {
      setTimeout(() => {
        setSuspend(false);
        resolve(0);
      }, 2000);
    });
  }

  return (
    <section className={classes.SelectedMovie}>
      <div>
        <button
          onClick={() => {
            setSuspend(true);
          }}
        >
          Suspend
        </button>

        <button
          onClick={() => {
            if (movie.title.length > 20) {
              throw new Error('The title is tool long');
            }
          }}
        >
          CLicke me
        </button>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>
          Released on:&nbsp;
          {new Date(movie.release_date).toLocaleDateString()}
        </p>
        <Vote average={movie.vote_average} count={movie.vote_count} />
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    </section>
  );
}
