import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  // environnement local (port 3000), sinon sur github suivi de /newportfolio
  const basename = window.location.hostname === 'localhost'
    ? ''
    : '/newportfolio';

  return (
    <Routes basename={basename}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

