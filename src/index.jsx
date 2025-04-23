import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './theme'; // 👈 ye import zaroori hai

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>       {/* 👈 Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);