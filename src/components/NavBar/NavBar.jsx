import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="divNavBar">
                <div className="navBar">
                    <Link to="/" className="h1"><h1>C L I C K C A R</h1></Link>
                    <div className="cabecalho">
                        <Link className="pNav" to="/" >HOME</Link>
                        <Link className="pNav" to="/stock" >ESTOQUE</Link>
                        <Link className="pNav" to="/sobre" >SOBRE</Link>
                    </div>
                    <div className="login-cadastro">
                        <Link to="/login"><button className="btnHeader">LOGIN</button></Link>
                        <Link to="/register"><button className="btnHeader">CADASTRO</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
