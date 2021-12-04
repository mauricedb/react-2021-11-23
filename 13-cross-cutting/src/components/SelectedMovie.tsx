import { Link, useParams } from 'react-router-dom';
import { Movie } from '../types/movie';
import { Vote } from './Vote';
import classes from './SelectedMovie.module.css';
import { useFetch } from '../hooks/useFetch';

export function SelectedMovie() {
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

  return (
    <section className={classes.SelectedMovie}>
      <div>
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
