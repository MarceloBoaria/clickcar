import "./Stock.css";
import Carro from "./Carro";

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
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <div className="stock">
                    <p className="titulostock">ALGUNS DOS VEÍCULOS EM NOSSO ESTOQUE</p>
                    <p className="pstock">Todos os nossos veículos são inspecionados e periciados, garantindo o máximo em qualidade e excelência.</p>
                    <button className="btnstock">CONFIRA NOSSO ESTOQUE COMPLETO</button>
                    <div className="flexLinha">
                        {carros.map((carro) => (
                            <Carro key={carro.id} marca={carro.marca} modelo={carro.modelo} ano={carro.ano} />
                        ))}
                    </div>
                    <div className="stockCompleto">
                        <h2>CONFIRA NOSSO ESTOQUE COMPLETO</h2>
                    </div>
                </div>
            </main>
        </>
    )

}

export default Stock;
