import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="divNavBar">
                <div className="navBar">
                    <h1>C L I C K C A R</h1>
                    <div className="cabecalho">
                        <Link className="pNav" to="/" >HOME</Link>
                        <Link className="pNav" to="/stock" >ESTOQUE</Link>
                        <Link className="pNav" to="/sobre" >SOBRE</Link>
                        <Link className="pNav" to="/contato" >CONTATO</Link>
                    </div>
                    <div className="login-cadastro">
                        <button className="btnHeader">LOGIN</button>
                        <button className="btnHeader">CADASTRO</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
