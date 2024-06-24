import { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("token")) {
            alert("Você não está logado!")
            navigate("/login")
        }
  
      }, []);

    return (
        <div className="divProfile">
            <div className="profile">
                <h2>Informações</h2>
                <input
                    type="text"
                    className="inputProfile"
                    placeholder="Nome Completo:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="inputProfile"
                    placeholder="E-mail:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="inputProfile"
                    placeholder="CPF:"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    type="text"
                    className="inputProfile"
                    placeholder="Telefone:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    className="inputProfile"
                    placeholder="Senha:"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <h2>Endereço</h2>
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="CEP:"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                />
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="Cidade:"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="Estado:"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="Bairro:"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                />
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="Rua:"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <input
                    type="number"
                    className="inputAddress"
                    placeholder="Número:"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <input
                    type="text"
                    className="inputAddress"
                    placeholder="Complemento:"
                    value={complement}
                    onChange={(e) => setComplement(e.target.value)}
                />
                <div className="buttons">
                    <button className="btnEditProfile">Editar Informações</button>
                    <button className="btnEditAddress">Salvar Endereço</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
