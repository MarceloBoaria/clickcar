// src/App.jsx
import React from 'react';
import { UsuariosContextProvider } from './contexts/GlobalContext';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
// import BackgroundVideo from './components/ImageCar/BackgroundVideo';

function App() {
  return (
    <UsuariosContextProvider>
      <NavBar />
      {/* <div className="content"> */}
        <Outlet />
      {/* </div> */}
    
    </UsuariosContextProvider>
  );
}

export default App;
