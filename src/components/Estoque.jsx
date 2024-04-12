import "./Estoque.css";
import Carro from "./Carro";

const Estoque = () => {

    const carros = [
        { id: 1, marca: "Ferrari", modelo: "LaFerrari", ano: 2022 },
        { id: 2, marca: "Lamborghini", modelo: "Aventador", ano: 2023 },
        { id: 3, marca: "Bugatti", modelo: "Chiron", ano: 2024 },
        { id: 4, marca: "Porsche", modelo: "911 Turbo S", ano: 2022 },
        { id: 5, marca: "Rolls-Royce", modelo: "Phantom", ano: 2023 },
        { id: 6, marca: "Bentley", modelo: "Continental GT", ano: 2024 }
    ];

    return (

        <div className="flexLinha">

            {carros.map((carro) => (

                <Carro key={carro.id} marca={carro.marca} modelo={carro.modelo} ano={carro.ano} />

            ))}

        </div>

    )

}

export default Estoque;
