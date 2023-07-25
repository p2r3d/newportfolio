import React from 'react';
// gestion des routes
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// retourne l'UI de l'utilisateur
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

