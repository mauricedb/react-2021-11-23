import { Dispatch } from 'react';
import { Movie } from '../types/movie';

export interface MovieState {
  movies: Movie[];
  selectedMovieId: number;
}

interface MoviesLoaded {
  type: 'MOVIES-LOADED';
  payload: Movie[];
}

interface SelectMovie {
  type: 'SELECT-MOVIE';
  payload: number;
}

export type AllActions = MoviesLoaded | SelectMovie;

const url =
  'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies';

export const LOAD_MOVIES = async (dispatch: Dispatch<AllActions>) => {
  try {
    const rsp = await fetch(url);

    dispatch({
      type: 'MOVIES-LOADED',
      payload: await rsp.json(),
    });
  } catch (e) {
    // dispatch({
    //     type: 'MOVIES-LOADED-ERROR',
    //     payload: e.message,
    //   });
  }
};
