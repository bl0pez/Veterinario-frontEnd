import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';
import { App } from './App';

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          <App />
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
