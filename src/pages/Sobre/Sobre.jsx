import React from "react";
import "./Sobre.css";
import Footer from '../../components/Footer/Footer';

const Sobre = () => {
  return (
    <>
    <div className="about-container">
      <h1 className="titulo">A mais de 40 anos no mercado </h1>
      <div className="Texto">
        <p>
          Fundação em Paris Em 1983, Jacques Beaumont fundou a AutoCars em
          Paris, França, com a visão de criar veículos elegantes e tecnológicos.
          A empresa rapidamente se destacou pela qualidade e design inovador de
          seus automóveis.
        </p>
        <p>
          Expansão para o Brasil Em 2004, a AutoCars abriu sua primeira sede no
          Brasil, em São Paulo, escolhida por sua infraestrutura e mercado
          promissor. A receptividade foi imediata, com a marca conquistando
          rapidamente uma base de clientes leais.
        </p>
        <p>
          Transformação para ClickCar Em 2010, sob a liderança de Alexandre
          Beaumont, filho de Jacques, a empresa foi renomeada para ClickCar. A
          mudança refletiu a nova era digital e atraiu um público mais jovem.
        </p>
        <p>
          Crescimento e Inovação Desde então, a ClickCar expandiu sua presença
          no Brasil e investiu em veículos híbridos e elétricos, mantendo seu
          compromisso com a qualidade e a sustentabilidade.
        </p>
        <p>
          Legado A ClickCar continua a inovar e crescer, mantendo-se fiel à sua
          missão de proporcionar uma experiência de condução inigualável, desde
          suas raízes em Paris até seu sucesso no Brasil.
        </p>
      </div>    
    </div>
    <div>{<Footer />}</div>
    </>
  );
};

export default Sobre;
