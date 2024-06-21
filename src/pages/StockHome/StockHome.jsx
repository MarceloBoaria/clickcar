import { Link } from "react-router-dom";
import "./StockHome.css";
import Carro from "../../components/Cars/Carro";

const Stock = () => {
    const carros = [
        { id: 1, marca: "LaFerrari ", modelo: "6.3 V12 Turbo Gasolina mais motor eletrico de 160CV", preco: "R$2.950.000", ano: "2022", km: "3.500Km", localizacao: "Minas Gerais - MG", image: "images/Ferrari/Ferrari5.jpg" },
        { id: 2, marca: "Lamborghini", modelo: "6.3 V12 Turbo Gasolina", preco: "R$2.950.000", ano: 2023, km: "3.500Km", localizacao: "Minas Gerais - MG", image: "images/Lamborghini/Lambo1.jpg" },
        { id: 3, marca: "Bugatti", modelo: "Chiron", preco: "R$2.950.000", ano: 2024, km: "3.500Km",  localizacao: "Minas Gerais - MG", image: "images/Ferrari/Ferrari5.jpg" },
        { id: 4, marca: "Porsche", modelo: "911 Turbo S", preco: "R$2.950.000", ano: 2022, km: "3.500Km",  localizacao: "Brasília - DF",image: "images/Ferrari/Ferrari5.jpg"},
        { id: 5, marca: "Rolls-Royce", modelo: "Phantom", preco: "R$2.950.000", ano: 2023, km: "3.200Km",  localizacao: "Santa Catarina - SC", image: "images/Ferrari/Ferrari5.jpg"},
        { id: 6, marca: "Bentley", modelo: "Continental GT", preco: "R$2.950.000", ano: 2024, km: "3.500Km",  localizacao: "Minas Gerais - MG", image: "images/Ferrari/Ferrari5.jpg"}
    ];

    return (
        <div className="stockHome">
            <div className="paragrafosHome">
                <p className="titulostockHome">ALGUNS DOS VEÍCULOS EM NOSSO ESTOQUE</p>
                <p className="pstockHome">Todos os nossos veículos são inspecionados e periciados, garantindo o máximo em qualidade e excelência.</p>
            </div>
            <div className="flexLinhaHome">
                {carros.map((carro) => (
                    <Carro key={carro.id} marca={carro.marca} modelo={carro.modelo} ano={carro.ano} km={carro.km} image={carro.image} preco={carro.preco} localizacao={carro.localizacao}/>
                ))}
            </div>
            <div className="stockCompletoHome">
            <Link to="/Stock" className="confiraStockHome">CONFIRA NOSSO ESTOQUE COMPLETO</Link>
            </div>
        </div>
    )

}

export default Stock;
