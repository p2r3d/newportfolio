/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes } from 'react-router-dom';
import App from './App';
import './style/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes>
    <App />
  </Routes>
);*/
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importation correcte depuis "react-dom/client"
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './style/main.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
*/
