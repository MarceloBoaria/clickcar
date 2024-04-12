import { useEffect, useState } from "react";
import "./Carro.css";

function Carro(props) {
    
    const [marca, setMarca] = useState(props.marca);

    useEffect(() => {
    }, [marca]);

    return (
        <div className="divCarro">
            <div className="divParagrafo">
                <h2>Marca: {marca}</h2>
                <p className="pDivCarro">Modelo: {props.modelo}</p>
                <p className="pDivCarro">Ano: {props.ano}</p>
            </div>
            <div className="divImagem">
                <label>Imagem Carro</label>
            </div>
            <div className="divBtnValores">
                <button className="btnValores">Valor Original</button>
                <button className="btnValores">Promocional</button>
            </div>
        </div>
    );
}

export default Carro;
