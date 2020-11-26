import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Fake Server
import { mockedServer } from './server/';

mockedServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
