import { useEffect, useState } from 'react';
import './Carro.css';
import WhatsApp from '../WhatsApp/WhatsApp';

function Carro(props) {
  const [marca, setMarca] = useState(props.marca);

  useEffect(() => {}, [marca]);

  return (
    <div className="divCarro">
      <div className="sub_carro">
        <img className="foto" src={props.image} alt="Carro" />
      </div>

      <div className="NomeCarro">
        <p>{props.marca}</p>
      </div>
      <div className="DescriçãoCarro">
        <p>{props.modelo}</p>
      </div>
      <div className="Preço">
        <p>{props.preco}</p>
      </div>
      <div className="DataCarro">
        <p>{props.ano} </p>
      </div>
      <div className="KmCarro">
        <p>{props.km}</p>
      </div>

      <div type="text" placeholder="SAIBA MAIS" className="carro">
        <WhatsApp />
      </div>
      <hr className="Line"></hr>
      <span className="material-icons">
        favorite
      </span>
    </div>
  );
}

export default Carro;
