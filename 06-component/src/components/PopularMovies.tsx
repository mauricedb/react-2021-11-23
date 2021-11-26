import { ReactElement, useEffect, useState } from 'react';
import { Movie } from '../types/movie';

export default function PopularMovies(): ReactElement {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      const rsp = await fetch(
        'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies'
      );
      const movies = await rsp.json();
      setMovies(movies);
    }

    fetchMovies();
  }, []);

  return (
    <main className="PopularMovies">
      <h1>Popular Movies</h1>
      {selectedMovie ? (
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
      ) : (
        <>
          <section className="MovieList">
            {movies?.map((movie) => (
              <article
                className="MovieCard"
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
              >
                <h2>{movie.title}</h2>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                  width="220"
                  height="330"
                />
                <p>
                  Votes:&nbsp;
                  {'★'.repeat(movie.vote_average / 2).padEnd(5, '☆')}
                  &nbsp;({movie.vote_count.toLocaleString()})
                </p>
              </article>
            ))}
          </section>
        </>
      )}
    </main>
  );
}
