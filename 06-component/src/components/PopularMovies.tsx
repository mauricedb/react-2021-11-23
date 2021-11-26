import { time } from 'console';
import { ReactElement, useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { SelectedMovie } from './SelectedMovie';
import { useMovies } from './useMovies';
import { Votes } from './Votes';

export default function PopularMovies(): ReactElement {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // setSelectedMovie((movie) => ({ ...(movie as Movie), title: 'New Title' }));

  const movies = useMovies();

  useEffect(() => {
    const handle = setInterval(() => {}, 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <main className="PopularMovies">
      <h1>Popular Movies</h1>
      {selectedMovie ? (
        <SelectedMovie
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      ) : (
        <>
          <section className="MovieList">
            {movies?.map((movie) => (
              <article className="MovieCard" key={movie.id}>
                <h2>{movie.title}</h2>
                <img
                  className="xx"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                  width="220"
                  height="330"
                  onClick={() => setSelectedMovie(movie)}
                />
                <Votes
                  voteAverage={movie.vote_average}
                  voteCount={movie.vote_count}
                />
              </article>
            ))}
          </section>
        </>
      )}
    </main>
  );
}
