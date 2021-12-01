import { NavBar } from './components/NavBar';
import { Cat } from './components/Cat';
import { Dog } from './components/Dog';
import notFound from './components/404.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Cat />
        <Dog />
        <img src={notFound} alt="Not found" width="800" />
      </main>
    </div>
  );
}

export default App;
