import React from 'react';
import './App.css';
import PopularMovies from './components/PopularMovies';

import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PopularMovies />
      </div>
    </Provider>
  );
}

export default App;
