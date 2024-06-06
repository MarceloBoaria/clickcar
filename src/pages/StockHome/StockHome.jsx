import { Link } from "react-router-dom";
import "./StockHome.css";
import Carro from "../../components/Cars/Carro";

const Stock = () => {
    const carros = [
        { id: 1, marca: "Ferrari", modelo: "LaFerrari", ano: 2022 },
        { id: 2, marca: "Lamborghini", modelo: "Aventador", ano: 2023 },
        { id: 3, marca: "Bugatti", modelo: "Chiron", ano: 2024 },
        { id: 4, marca: "Porsche", modelo: "911 Turbo S", ano: 2022 },
        { id: 5, marca: "Rolls-Royce", modelo: "Phantom", ano: 2023 },
        { id: 6, marca: "Bentley", modelo: "Continental GT", ano: 2024 }
    ];

    return (
        <div className="stockHome">
            <div className="paragrafosHome">
                <p className="titulostockHome">ALGUNS DOS VEÍCULOS EM NOSSO ESTOQUE</p>
                <p className="pstockHome">Todos os nossos veículos são inspecionados e periciados, garantindo o máximo em qualidade e excelência.</p>
            </div>
            <div className="flexLinhaHome">
                {carros.map((carro) => (
                    <Carro key={carro.id} marca={carro.marca} modelo={carro.modelo} ano={carro.ano} />
                ))}
            </div>
            <div className="stockCompletoHome">
            <Link to="/Stock" className="confiraStockHome">CONFIRA NOSSO ESTOQUE COMPLETO</Link>
            </div>
        </div>
    )

}

export default Stock;
