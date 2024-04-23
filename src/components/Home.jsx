import "./Home.css";
import Estoque from "./Estoque";
import Localizacao from './Localizacao';
import Sobre from './Sobre';
import Contato from './Contato';
import NavBar from './NavBar';

function Home() {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>
        <div className="estoque">
          <p className="tituloEstoque">ALGUNS DOS VEÍCULOS EM NOSSO ESTOQUE</p>
          <p className="pEstoque">Todos os nossos veículos são inspecionados e periciados, garantindo o máximo em qualidade e excelência.</p>
          <button className="btnEstoque">CONFIRA NOSSO ESTOQUE COMPLETO</button>
          <Estoque />
          <div className="estoqueCompleto">
            <h2>CONFIRA NOSSO ESTOQUE COMPLETO</h2>
          </div>
        </div>
      </section>
      <footer>
        <Localizacao />
        <Sobre />
        <Contato />
      </footer>
    </>
  );
}

export default Home;
