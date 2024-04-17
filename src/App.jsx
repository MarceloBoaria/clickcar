import "./App.css";
import { useState } from "react";
import Home from './components/Home';

function App() {

  const [conteudo, setConteudo] = useState(<Home />)
  
  return (
    <>
      { conteudo }
    </>
  );
}

export default App;
