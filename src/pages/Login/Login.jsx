import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();

    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {

      const input = {
          cpf: cpf,
          password: password,
      };

      var { data } = await axios.post("http://localhost:8080/login", input);
      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("isAdmin", data.isAdmin);
      localStorage.setItem("userId", data.id);

    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (cpf !== "" && password !== "") {
          await login();
          navigate("/");
      } else {
          alert(
              "Por favor, preencha todos os campos para logar um novo usuário!"
          );
      }
      } catch {
        alert(
          "Por favor, preencha todos os campos para logar um novo usuário!"
      );
      }
      
    };

    useEffect(() => {

      const cpfInput = document.getElementById("cpf-input");

      cpfInput.addEventListener("input", () => {

        let value = cpfInput.value.replace(/\D/g, "");
        setCpf(value);

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
            <form onSubmit={handleSubmit}>
                <input
                    id="cpf-input"
                    className="Inp_login"
                    type="text"
                    placeholder="CPF"
                    required
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    title="Digite um CPF no formato: xxx.xxx.xxx-xx"
                />
                <input
                    className="Inp_login"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />
                <button type="submit" className="login-button">
                    Entrar
                </button>
                <p className="signup-text">
                    Não tem uma conta? <Link to="/register">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
