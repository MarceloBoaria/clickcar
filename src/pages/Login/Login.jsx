// Login.js
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import './Login.css';

const Login = () => {
  useEffect(() => {
    const cpfInput = document.getElementById("cpf-input");
    
    cpfInput.addEventListener("input", () => {
      let value = cpfInput.value.replace(/\D/g, "");

      if (value.length > 11) {
        value = value.slice(0, 11);
      }

      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      cpfInput.value = value;
    });
  }, []);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p>Bem-vindo de volta!</p>
      <form>
        <input 
          id="cpf-input" 
          className="Inp_login" 
          type="text" 
          placeholder="CPF" 
          required 
          pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
          title="Digite um CPF no formato: xxx.xxx.xxx-xx" 
        />
        <input className="Inp_login" type="password" placeholder="Senha" required />
        <button type="submit" className="login-button">Entrar</button>
        <p className="signup-text">Não tem uma conta? <Link to="/register">Inscreva-se</Link></p>
      </form>
    </div>
  );
};

export default Login;
