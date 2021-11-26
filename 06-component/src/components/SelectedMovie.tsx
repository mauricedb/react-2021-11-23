import { Movie } from '../types/movie';

// From https://gist.github.com/basarat/1c2923f91643a16a90de638e76bce0ab
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

interface Props {
  selectedMovie: DeepReadonly<Movie>;
  setSelectedMovie: (movie: Movie | null) => void;
}

export function SelectedMovie({ selectedMovie, setSelectedMovie }: Props) {
  // selectedMovie.release_date = '';

  return (
    <section className="SelectedMovie">
      <h1>{selectedMovie.title}</h1>
      <p>{selectedMovie.overview}</p>
      <p>
        Released on:&nbsp;
        {new Date(selectedMovie.release_date).toLocaleDateString()}
      </p>
      <p>
        Votes:&nbsp;
        {'★'.repeat(selectedMovie.vote_average).padEnd(10, '☆')}
        &nbsp;({selectedMovie.vote_count.toLocaleString()})
      </p>
      <p>
        <button onClick={() => setSelectedMovie(null)}>Back</button>
      </p>
    </section>
  );
}
