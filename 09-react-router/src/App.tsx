import { NavBar } from './components/NavBar';
// import Cat from './components/Cat';
// import Dog from './components/Dog';
import notFound from './components/404.jpg';

import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import React from 'react';

const Cat = React.lazy(() => import('./components/Cat'));
const Dog = React.lazy(() => import('./components/Dog'));

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cat/:catName" element={<Cat />} />
          <Route path="/dog" element={<Dog />} />
          {/* <Route
            path="*"
            element={<img src={notFound} alt="Not found" width="800" />}
          /> */}
          <Route path="*" element={<Navigate to="/cat" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
