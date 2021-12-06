import { ComponentProps, ReactElement } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import { MovieTable } from './MovieTable';

type Props = Omit<ComponentProps<typeof MovieTable>, 'data' | 'error'>;

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies';

export function MovieTableLoader(props: Props): ReactElement {
  const fetchResult = useFetch<Movie[]>(url);

  return <MovieTable {...props} {...fetchResult} />;
}
