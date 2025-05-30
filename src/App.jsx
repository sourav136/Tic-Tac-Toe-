import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Mode from './components/Mode';
import HumanVSHuman from './pages/HumanVSHuman';
import HumanVSBot from './pages/HumanVSBot';
import { GameProvider, useGame } from './context/GameContext';
import { ThemeProvider } from './context/ThemeContext';
import LoadingPage from './components/LoadingPage';

const AppContent = () => {
  const { loading, setLoading } = useGame();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (loading) return <LoadingPage />;

  return (
    <div className='app-container'>
      <HashRouter>
        <Routes>
          <Route exact path='/' Component={Mode} />
          <Route exact path='/human' Component={HumanVSHuman} />
          <Route exact path='/bot' Component={HumanVSBot} />
        </Routes>
      </HashRouter>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </ThemeProvider>
  );
};

export default App;
