import "./Cadastro.css";

const Cadastro = () => {

    return (
        <div className="divCadastro">
            <div className="cadastro">
                <h2>Crie sua conta</h2>
                <input type="text" className="inputCadastro" placeholder="Nome Completo:"/>
                <input type="text" className="inputCadastro" placeholder="E-mail:"/>
                <input type="text" className="inputCadastro" placeholder="CPF:"/>
                <input type="text" className="inputCadastro" placeholder="CEP:"/>
                <input type="text" className="inputCadastro" placeholder="Telefone:"/>
                <input type="text" className="inputCadastro" placeholder="Senha:"/>
                <button className="btnCadastro">Cadastrar</button>
                <label>Já possui uma conta? Login</label>
            </div>
        </div>
    )

}

export default Cadastro;
