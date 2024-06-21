import { Link } from "react-router-dom";
import "./Stock.css";
import Carro from "../../components/Cars/Carro";
import Footer from '../../components/Footer/Footer';

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
      image: "images/Lamborghini/Lambo8.jpg",
    },
    {
      id: 3,
      marca: "Bugatti",
      modelo: "Chiron",
      preco: "R$2.950.000",
      ano: 2024,
      km: "3.500Km",
      image: "images/Bugatti/Bugatti2.jpg",
    },
    {
      id: 4,
      marca: "Porsche",
      modelo: "911 Turbo S",
      preco: "R$2.950.000",
      ano: 2022,
      km: "3.500Km",
      image: "images/Porsche/Porsche1.jpg",
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
      marca: "Bentley",
      modelo: "Continental GT",
      preco: "R$2.950.000",
      ano: 2024,
      km: "3.500Km",
      image: "images/Bentley/Bentley1.jpg",
    },
  ];

  return (
    <div className="stock">
      <div className="paragrafos">
        <p className="titulostock"></p>
        <p className="pstock">
          Todos os nossos veículos são inspecionados e periciados, garantindo o
          máximo em qualidade e excelência.
        </p>
      </div>
      <div className="flexLinha">
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
      { <Footer /> }
    </div>
  );
};

export default Stock;
