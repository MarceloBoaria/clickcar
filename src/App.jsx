import "./App.css";
import { useState } from "react";
import Home from './components/Home';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Register from './components/Register';
import RegisterCar from "./components/RegisterCar";

function App() {

  const [conteudo, setConteudo] = useState(<Register />)
  
  return (
    <>
      { conteudo }
    </>
  );
}

export default App;
