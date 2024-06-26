import { Link } from "react-router-dom";
import "./StockHome.css";
import Carro from "../../components/Cars/Carro";
import Footer from "../../components/Footer/Footer";

const Stock = () => {
  const carros = [
    {
      id: 1,
      marca: "LaFerrari ",
      modelo: "6.3 V12 Turbo Gasolina mais motor eletrico de 160CV",
      preco: "R$2.950.000",
      ano: "2022",
      km: "3.500Km",
      image: "images/Ferrari/Ferrari10.jpg",
    },
    {
      id: 2,
      marca: "Lamborghini",
      modelo: "6.3 V12 Turbo Gasolina",
      preco: "R$2.950.000",
      ano: 2023,
      km: "3.500Km",
      image: "images/Lamborghini/Lambo9.jpg",
    },
    {
      id: 3,
      marca: "Bugatti",
      modelo: "Chiron",
      preco: "R$2.950.000",
      ano: 2024,
      km: "3.500Km",
      image: "images/Bugatti/Bugatti1.jpg",
    },
    {
      id: 4,
      marca: "Porsche",
      modelo: "911 Turbo S",
      preco: "R$2.950.000",
      ano: 2022,
      km: "3.500Km",
      image: "images/Porsche/Porsche3.jpg",
    },
    {
      id: 5,
      marca: "Rolls-Royce",
      modelo: "Phantom",
      preco: "R$2.950.000",
      ano: 2023,
      km: "3.200Km",
      image: "images/RollsRoyce/RollsRoyce1.jpg",
    },
    {
      id: 6,
      marca: "Volvo XC40",
      modelo: "XC40 BEV 69 kWh Recharge Plus automático",
      preco: "R$399.950",
      ano: 2024,
      km: "3.500Km",
      image: "images/Volvo/volvo.jpg",
    },
    {
      id: 6,
      marca: "Bmw M2",
      modelo: "M2 Coupé Track 3.0 automático",
      preco: "R$617.950",
      ano: 2024,
      km: "17.000Km",
      image: "images/Bmw/bmw.jpg",
    },
    {
      id: 6,
      marca: "Jaguar F-Type",
      modelo: "2.0 p300 gasolina r-dynamic cabrio automático",
      preco: "R$589.377",
      ano: 2021,
      km: "45.600Km",
      image: "images/Jaguar/jaguar.jpg",
    },
    
  ];

  return (
    <>
      <div className="stockHome">
        <div className="paragrafosHome">
          <p className="titulostockHome">
            ALGUNS DOS VEÍCULOS EM NOSSO ESTOQUE
          </p>
          <p className="pstockHome1">
            Todos os nossos veículos são inspecionados e periciados, garantindo
            o máximo em qualidade e excelência.
          </p>
        </div>
        <div className="flexLinhaHome">
          {carros.map((carro) => (
            <Carro
              key={carro.id}
              marca={carro.marca}
              modelo={carro.modelo}
              ano={carro.ano}
              km={carro.km}
              image={carro.image}
              preco={carro.preco}
            />
          ))}
        </div>
        <div className="stockCompletoHome">
          <Link to="/Stock" className="confiraStockHome">
            CONFIRA NOSSO ESTOQUE COMPLETO
          </Link>
        </div>
        <section className="prime-imports">
          <h2>Mais sobre a CLICKCAR</h2>
          <p></p>
          <div className="services">
            <div className="service">
              <i className="fas fa-comments"></i>

              <h3>ATENDIMENTO</h3>
              <p>
              Confie nos melhores profissionais do ramo automotivo para ajudar na aquisição do seu novo carro.
              </p>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="service">
              <i className="fas fa-shield-alt"></i>

              <h3>SEGURANÇA</h3>
              <p>
              Todos os veículos são submetidos a perícia com laudo cautelar e inspecionados pelos mais qualificados mecânicos.
              </p>
            </div>
            <div className="arrow"></div>
            <div className="service">
              <i className="fas fa-thumbs-up"></i>

              <h3>QUALIDADE</h3>
              <p>
              Nosso estoque conta com veículos de alto padrão, com procedência comprovada e em excelente estado de conservação.
              </p>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="service">
              <i className="fas fa-smile"></i>
              <div className="highlight"></div>

              <h3>COMPROMISSO</h3>
              <p>
                A ClickCar realizará o seu melhor negócio na compra e venda
                do seu veiculo
              </p>
            </div>
          </div>
        </section>
        
      </div>

          
      <div>{<Footer />}</div>
    </>
  );
  1;
};

export default Stock;
