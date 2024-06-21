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
            <li><a href="#">Cuidados com suas peças</a></li>
            <li><a href="#">Sobre a Ecran Studios</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>CONTATOS</h4>
          <p><a href="https://www.instagram.com/ecranstudios" target="_blank" rel="noopener noreferrer">@ecranstudios</a></p>
          <p><a href="mailto:contato@ecranstudios.com">contato@ecranstudios.com</a></p>
        </div>
        <div className="footer-section">
          <h4>RECEBA NO EMAIL AS NOVIDADES</h4>
          <form>
            <input type="text" name="name" placeholder="Nome" />
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Quero assinar!</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Ecran Studios Criações Artísticas e Comércio Ltda.</p>
        <p>Cnpj: 22.701.058/0001-98</p>
        <p>Rio de Janeiro, RJ</p>
      </div>
    </footer>
  );
};

export default Footer;
