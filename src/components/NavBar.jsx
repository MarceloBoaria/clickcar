import "./NavBar.css";

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div className="tabBar">
                    <h1>C L I C K C A R</h1>
                    <div className="cabecalho">
                        <p className="pNav">HOME</p>
                        <p className="pNav">ESTOQUE</p>
                        <p className="pNav">PERFIL</p>
                        <p className="pNav">SOBRE</p>
                        <p className="pNav">CONTATO</p>
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
