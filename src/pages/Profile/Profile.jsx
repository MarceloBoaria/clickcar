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
        isAdmin: false
    });
    
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {

        if (!localStorage.getItem("token")) {
            alert("Você não está logado!")
            navigate("/login")
        } else {
            const token = localStorage.getItem("token")
            axios.get(`http://localhost:8080/users/${userId}`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error("Erro ao carregar os dados do usuário:", error);
            });
        }
    }, []);

    const handleUpdateUserData = async () => {

        const token = localStorage.getItem("token")
        console.log(userData)
        console.log(userId)
        await axios.put(`http://localhost:8080/users/${userId}`, userData, {
            headers: {"Authorization": `Bearer ${token}`}
            })
            .then(response => {
                alert("Dados atualizados com sucesso!");
                navigate("/")
            })
            .catch(error => {
                console.error("Erro ao atualizar os dados do usuário:", error);
                alert("Erro ao atualizar os dados!");
            });
    };

    const handleDeleteUser = () => {

        const token = localStorage.getItem("token")
        axios.delete(`http://localhost:8080/users/${userId}`, {
            headers: {"Authorization": `Bearer ${token}`}
            })
            .then(response => {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                alert("Usuário deletado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                console.error("Erro ao deletar o usuário:", error);
                alert("Erro ao deletar o usuário!");
            });
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
                    </tr>
                </tbody>
            </table>
            <div className="buttons">
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