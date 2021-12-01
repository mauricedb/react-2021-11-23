import { applyMiddleware, compose, createStore } from 'redux';
import { moviesReducer } from './moviesReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  moviesReducer /* preloadedState, */,
  composeEnhancers(applyMiddleware(thunk))
);

// store.dispatch({
//   type: 'MOVIES-LOADED',
//   payload: [],
// });
