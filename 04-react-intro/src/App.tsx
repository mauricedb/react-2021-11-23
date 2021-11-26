import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Greeter } from './components/Greeter';
import { GetName } from './components/GetName';
import { RandomJoke } from './components/RandomJoke';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <RandomJoke />
        <GetName name={name} setName={setName} />
        <Greeter city={null} />
        <Greeter name={name} city="Zoetermeer" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
