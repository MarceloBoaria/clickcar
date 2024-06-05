// src/App.jsx
import React from 'react';
import { UsuariosContextProvider } from './contexts/GlobalContext';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import './App.css';
// import BackgroundVideo from './components/ImageCar/BackgroundVideo';

function App() {
  return (
    <UsuariosContextProvider>
      <NavBar />
      {/* <div className="content"> */}
        <Outlet />
      {/* </div> */}
      <Footer />
    </UsuariosContextProvider>
  );
}

export default App;
