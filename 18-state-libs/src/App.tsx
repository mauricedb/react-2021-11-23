import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NavBar } from './components/shared';

import { MobxApp } from './components/mobx-react';
import { RecoilApp } from './components/recoil';
import { ReduxApp } from './components/redux';
import { UseReducerApp } from './components/use-reducer';
import { UseStateApp } from './components/use-state';
import { XStateApp } from './components/xstate';
import { ZustandApp } from './components/zustand';
import { JotaiApp } from './components/jotai';
import { ValtioApp } from './components/valtio';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <NavBar />
          <Routes>
            <Route path="/use-state" element={<UseStateApp />} />
            <Route path="/use-reducer" element={<UseReducerApp />} />
            <Route path="/redux" element={<ReduxApp />} />
            <Route path="/mobx" element={<MobxApp />} />
            <Route path="/recoil" element={<RecoilApp />} />
            <Route path="/xstate" element={<XStateApp />} />
            <Route path="/zustand" element={<ZustandApp />} />
            <Route path="/jotai" element={<JotaiApp />} />
            <Route path="/valtio" element={<ValtioApp />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
