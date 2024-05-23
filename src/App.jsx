import "./App.css";
import { UsuariosContextProvider } from './contexts/GlobalContext';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <UsuariosContextProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </UsuariosContextProvider>
    </>
  )
}

export default App;
