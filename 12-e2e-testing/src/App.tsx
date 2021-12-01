import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import PopularMovies from './components/PopularMovies';
import { SelectedMovie } from './components/SelectedMovie';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <PopularMovies />,
    },
    { path: '/movie/:id', element: <SelectedMovie /> },
  ]);

  return <div className="App">{element}</div>;
}

export default App;
