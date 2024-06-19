import React from 'react';
import "./WhatsApp.css";
const WhatsApp = () => {
  const phoneNumber = '5548999316251'; // Substitua pelo número desejado

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      className='Whats'
    >Saiba Mais
    </a>
  );
};

export default WhatsApp;
