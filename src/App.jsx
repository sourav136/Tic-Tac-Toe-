import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mode from './components/Mode';
import HumanVSHuman from './pages/HumanVSHuman';
import HumanVSBot from './pages/HumanVSBot';
import { GameProvider } from './context/GameContext';
const App = () => {
  return (
    <>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' Component={Mode}/>
            <Route exact path='/human' Component={HumanVSHuman}/>
            <Route exact path='/bot' Component={HumanVSBot}/>
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </>
  );
};

export default App;