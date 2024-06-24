import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {

    var TOKEN = localStorage.getItem("token");
    var IS_ADMIN = localStorage.getItem("isAdmin");

    const navigate = useNavigate();

    function routerOpen() {
        localStorage.setItem("token", "");
        alert("Usuário desconectado!")
        navigate("/");
    }

    return (
        <nav>
            <div className="navBar">
                <Link to="/" className="h1"><h1>C L I C K C A R</h1></Link>
                <div className="cabecalho">
                    <Link className="pNav" to="/" >HOME</Link>
                    <Link className="pNav" to="/stock" >ESTOQUE</Link>
                    <Link className="pNav" to="/sobre" >SOBRE</Link>
                </div>
                {TOKEN ? (
                    IS_ADMIN == true ? (
                        <div className="isAdmin">
                            <Link to="/registerCar"><button className="btnHeader">CADASTRAR CARRO</button></Link>
                            <button onClick={routerOpen} className="btnHeader">SAIR</button>
                        </div>
                    ) : (
                        <div className="login-cadastro">
                            <Link to="/profile"><button className="btnHeader">PERFIL</button></Link>
                            <button onClick={routerOpen} className="btnHeader">SAIR</button>
                        </div>
                    )
                ) : (
                    <div className="login-cadastro">
                        <Link to="/login"><button className="btnHeader">LOGIN</button></Link>
                        <Link to="/register"><button className="btnHeader">CADASTRO</button></Link>
                    </div>
                )}
                
            </div>
        </nav>
    );
};

export default NavBar;
