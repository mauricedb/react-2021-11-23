import React, { Suspense, useContext } from 'react';
import { useRoutes, useLocation, RouteObject } from 'react-router-dom';
import './App.css';
import { AuthContext } from './components/AuthContext';
import { AuthContextProvider } from './components/AuthContextProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Login } from './components/Login';
import { MovieList } from './components/MovieList';
import { NavBar } from './components/NavBar';
import { SelectedMovie } from './components/SelectedMovie';

function App() {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  let routes = useRoutes(
    [
      {
        path: '/',
        element: (
          <div>
            <h1>Select a category of movies</h1>
          </div>
        ),
      },
      user
        ? {
            path: '/popular-movies',
            element: (
              <MovieList
                title="Popular Movies"
                type="popular-movies"
                url="https://the-problem-solver-sample-data.azurewebsites.net/popular-movies"
              />
            ),
          }
        : undefined,
      user
        ? {
            path: '/top-rated-movies',
            element: (
              <MovieList
                title="Top Rated Movies"
                type="top-rated-movies"
                url="https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies"
              />
            ),
          }
        : undefined,
      { path: '/:type/:id', element: <SelectedMovie /> },
      { path: '/login', element: <Login /> },
    ].filter(Boolean) as RouteObject[]
  );

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Suspense fallback={<div>Suspended for now</div>}>
        <ErrorBoundary key={location.pathname}>{routes}</ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default App;
