import { ComponentProps } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieEditor } from './MovieEditor';

const baseUrl =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/';

type Props = Omit<
  ComponentProps<typeof MovieEditor>,
  'data' | 'error' | 'setData'
>;

export function MovieEditorLoader({ movieId, ...props }: Props) {
  const url = `${baseUrl}${movieId}`;
  const fetchResult = useFetch<Movie>(url);

  return <MovieEditor movieId={movieId} {...props} {...fetchResult} />;
}
