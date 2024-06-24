import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>INFORMAÇÕES GERAIS</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Política e Prazos de Envio</a></li>
            <li><a href="#">Política de Trocas e Devoluções</a></li>
            <li><a href="#">Cuidados com sua compra</a></li>
            <li><a href="#">Sobre a Clickcar</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONTATOS</h4>
          <p><a href="https://www.instagram.com/ecrantudios" target="_blank" rel="noopener noreferrer">@ClickcarAuto</a></p>
          <p><a href="mailto:contato@ecranstudios.com">contato@Clickcar.com</a></p>
        </div>
        <div className="footer-section">
          <h4>RECEBA NO EMAIL AS NOVIDADES</h4>
          <form>
            <input type="text" name="name" placeholder="Nome" />
            <input type="email" name="email" placeholder="Email" />
            <button className="Button" type="submit">Quero assinar!</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>ClickCar Autos e Comércio Ltda.</p>
        <p>Cnpj: 22.251.118/0001-98</p>
        <p>Santa Catarina, SC</p>
      </div>
    </footer>
  );
};

export default Footer;
