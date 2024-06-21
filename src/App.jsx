// src/App.jsx
import React from 'react';
import { UsuariosContextProvider } from './contexts/GlobalContext';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <UsuariosContextProvider>
      <NavBar />
        <Outlet />
    </UsuariosContextProvider>
  );
}

export default App;
