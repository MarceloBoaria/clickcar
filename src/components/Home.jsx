import "./Home.css";
import Estoque from "./Estoque";
import Localizacao from './Localizacao';
import Sobre from './Sobre';
import Contato from './Contato';

function Home() {
  
  return (
    <>
      <header>
        <nav>
          <div className="container">
              <div className="tabBar">
                  <h1>C L I C K C A R</h1>
                  <div className="cabecalho">
                      <p className="pNav">HOME</p>
                      <p className="pNav">ESTOQUE</p>
                      <p className="pNav">LOCALIZAÇÃO</p>
                      <p className="pNav">SOBRE</p>
                      <p className="pNav">CONTATO</p>
                  </div>
                  <div className="login-cadastro">
                      <button className="btnHeader">LOGIN</button>
                      <button className="btnHeader">CADASTRO</button>
                  </div>
              </div>
          </div>
        </nav>
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
