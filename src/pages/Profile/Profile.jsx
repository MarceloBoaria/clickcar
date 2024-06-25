import { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        cpf: '',
        phone: '',
        password: '',
        cep: '',
        city: '',
        state: '',
        neighborhood: '',
        street: '',
        number: '',
        complement: ''
    });

    const Profile = async () => {
        const newUser = {
            name: name,
            email: email,
            cpf: cpf,
            phone: phone,
            password: password,
            cep: cep,
            cidade: cidade,
            estado: estado,
            bairro: baixo,
            rua: rua,
            numero: numero,
            complemento: complemento,

        };

        await axios.put("http://localhost:8080/users", newUser);
        console.log(newUser);

        let usersList = users;
        usersList.push(newUser);

        setUsers(usersList);
        setName("");
        setEmail("");
        setCpf("");
        setPhone("");
        setPassword("");
        setcep("");
        setcidade("");
        setestado("");
        setbairro("");
        setrua("");
        setnumero("");
        setcomplemento("");

    };
    
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se o usuário está logado
        if (!localStorage.getItem("token")) {
            alert("Você não está logado!")
            navigate("/login")
        } else {
            // Carrega os dados do usuário (simulação)
            const storedUserData = JSON.parse(localStorage.getItem("userData"));
            if (storedUserData) {
                setUserData(storedUserData);
            }
        }
    }, []);

    const handleUpdateUserData = () => {
        // Atualiza os dados do usuário (simulação)
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Dados atualizados com sucesso!");
    };

    const handleDeleteUser = () => {
        // Deleta o usuário (simulação)
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        alert("Usuário deletado com sucesso!");
        navigate("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleConfirmDelete = () => {
        setShowModal(true);
    };

    const handleCancelDelete = () => {
        setShowModal(false);
    };

    const handleConfirmFinalDelete = () => {
        handleDeleteUser();
        setShowModal(false);
    };

    return (
        <div className="divProfile">
            <table className="profileTable">
                <tbody>
                    <tr>
                        <td><h2>Informações Pessoais</h2></td>
                        <td><h2>Endereço</h2></td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                className="inputProfile"
                                placeholder="Nome Completo:"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputProfile"
                                placeholder="E-mail:"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputProfile"
                                placeholder="CPF:"
                                name="cpf"
                                value={userData.cpf}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputProfile"
                                placeholder="Telefone:"
                                name="phone"
                                value={userData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                className="inputProfile"
                                placeholder="Senha:"
                                name="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="CEP:"
                                name="cep"
                                value={userData.cep}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="Cidade:"
                                name="city"
                                value={userData.city}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="Estado:"
                                name="state"
                                value={userData.state}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="Bairro:"
                                name="neighborhood"
                                value={userData.neighborhood}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="Rua:"
                                name="street"
                                value={userData.street}
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                className="inputAddress"
                                placeholder="Número:"
                                name="number"
                                value={userData.number}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                className="inputAddress"
                                placeholder="Complemento:"
                                name="complement"
                                value={userData.complement}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="buttons">
                <button className="btnEditProfile" onClick={handleUpdateUserData}>Editar Informações</button>
                <button className="btnEditAddress" onClick={handleUpdateUserData}>Salvar </button>
                <button className="btnDelete" onClick={handleConfirmDelete}>Excluir Conta</button>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Tem certeza que deseja excluir sua conta?</p>
                        <div className="modal-buttons">
                            <button onClick={handleCancelDelete}>Cancelar</button>
                            <button onClick={handleConfirmFinalDelete}>Confirmar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
