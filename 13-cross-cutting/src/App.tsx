import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { MovieList } from './components/MovieList';
import { NavBar } from './components/NavBar';
import { SelectedMovie } from './components/SelectedMovie';

function App() {
  let routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <h1>Select a category of movies</h1>
        </div>
      ),
    },
    {
      path: '/popular-movies',
      element: (
        <MovieList
          title="Popular Movies"
          type="popular-movies"
          url="https://the-problem-solver-sample-data.azurewebsites.net/popular-movies"
        />
      ),
    },
    {
      path: '/top-rated-movies',
      element: (
        <MovieList
          title="Top Rated Movies"
          type="top-rated-movies"
          url="https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies"
        />
      ),
    },
    { path: '/:type/:id', element: <SelectedMovie /> },
    { path: '/login', element: <Login /> },
  ]);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      {routes}
    </div>
  );
}

export default App;
