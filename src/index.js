import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//visas react bus sukreitinamas ir renderinamas sitame dive, kuri mes pasiemas. pasigetinam sita diva ir i ji viska sudedame..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
