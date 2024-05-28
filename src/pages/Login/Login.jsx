import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <div className="divLogin">
            <div className="login">
                <h2>Faça login na sua conta</h2>
                <input type="text" className="inputLogin" placeholder="E-mail:"/>
                <input type="text" className="inputLogin" placeholder="Senha:"/>
                <button className="btnLogin">Logar</button>
                <label>Não possui uma conta? <Link to="/register">Cadastre-se</Link> </label>
            </div>
        </div>
    )

}

export default Login;
