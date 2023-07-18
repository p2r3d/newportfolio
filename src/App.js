import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

 
function App() {
  console.log(window.location.hostname);
  let basename="/newportfolio/";
  if (window.location.hostname === "p2r3d.github.io") {
    basename="/newportfolio";
  }
    console.log(basename);

  return (
      <Routes basename={basename}>
        <Route path="/" element={<Home />}/>
      </Routes>   
  )
}

export default App;
