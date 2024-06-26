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
      marca: "Lamborghini Aventador",
      modelo: "6.3 V12 Turbo Gasolina",
      preco: "R$7.129.266",
      ano: 2023,
      km: "3.500Km",
      image: "images/Lamborghini/Lambo8.jpg",
    },
    {
      id: 3,
      marca: "Bugatti Chiron",
      modelo: "8.0 W16",
      preco: "R$6.0000.00",
      ano: 2024,
      km: "3.500Km",
      image: "images/Bugatti/Bugatti1.jpg",
    },
    {
      id: 4,
      marca: "Porsche 911 Turbo S",
      modelo: "3.8 24v h6 gasolina turbo s cabriolet pdk",
      preco: "R$1.723.452.",
      ano: 2022,
      km: "3.000Km",
      image: "images/Porsche/Porsche1.jpg",
    },
    {
      id: 5,
      marca: "Rolls-Royce",
      modelo: "6.8 v12 turbo gasolina automático",
      preco: "R$2.399,000",
      ano: 2023,
      km: "1.087Km",
      image: "images/RollsRoyce/RollsRoyce1.jpg",
    },
    {
      id: 6,
      marca: "Bentley Continental GT",
      modelo: "Continental GT 4.0 V8 4WD automático",
      preco: "R$ 3.149.000,00",
      ano: 2024,
      km: "3.500Km",
      image: "images/Bentley/Bentley1.jpg",
    },
    {
      id: 6,
      marca: "Mercedes GLA 200",
      modelo: "GLA 1.3 200 AMG Line DCT automático",
      preco: "R$124.990",
      ano: 2024,
      km: "47.000Km",
      image: "images/Mercedes/mercedes1.jpg",
    },
    {
      id: 6,
      marca: "Range Rover Velar",
      modelo: "Range Rover Velar 3.0 V6 S/C R-Dynamic HSE 4WD automático",
      preco: "R$349.990",
      ano: 2018,
      km: "3.000Km",
      image: "images/RangeRover/rangerover.jpg",
    },
    {
      id: 6,
      marca: "Audi Q5",
      modelo: "Q5 Sportback 2.0 S Line S Tronic Quattro automático",
      preco: "R$370.000",
      ano: 2021,
      km: "22.000Km",
      image: "images/Audi/audi.jpg",
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
