import "./Login.css";

const Login = () => {

    return (
        <div className="divLogin">
            <div className="login">
                <h2>Faça login na sua conta</h2>
                <input type="text" className="inputLogin" placeholder="E-mail:"/>
                <input type="text" className="inputLogin" placeholder="Senha:"/>
                <button className="btnLogin">Logar</button>
                <label>Não possui uma conta? Cadastre-se</label>
            </div>
        </div>
    )

}

export default Login;
