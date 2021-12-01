import { SelectedMovie } from '../components/SelectedMovie';
import { AllActions, MovieState } from './types';

export function moviesReducer(
  state: MovieState = {
    movies: [],
    selectedMovieId: NaN,
  },
  action: AllActions
): MovieState {
  console.log(action, state);

  switch (action.type) {
    case 'MOVIES-LOADED':
      return { ...state, movies: action.payload };
    case 'SELECT-MOVIE':
      return { ...state, selectedMovieId: action.payload };
  }

  return state;
}
