import { useState } from "react";
import "./Register.css";
import axios from "axios";

const Register = () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        const newUser = {
            name: name,
            email: email,
            cpf: cpf,
            phone: phone,
            password: password,
        };

        await axios.post("http://localhost:8080/users", newUser)

        let usersList = users
        usersList.push(newUser);

        setUsers(usersList);
        setName("");
        setEmail("");
        setCpf("");
        setPhone("");
        setPassword("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            name !== "" &&
            email !== "" &&
            cpf !== "" &&
            phone !== "" &&
            password !== ""
        ) {
            registerUser();
        } else {
            alert(
                "Por favor, preencha todos os campos para cadastrar um novo usuário!"
            );
        }
    };

    return (
        <div className="divRegister">
            <form className="register" onSubmit={handleSubmit}>
                <h2>Crie sua conta</h2>
                <input
                    type="text"
                    className="inputRegister"
                    placeholder="Nome Completo:"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="inputRegister"
                    placeholder="E-mail:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="inputRegister"
                    placeholder="CPF:"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    type="text"
                    className="inputRegister"
                    placeholder="Telefone:"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="password"
                    className="inputRegister"
                    placeholder="Senha:"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btnRegister">Cadastrar</button>
                <label>Já possui uma conta? Login</label>
            </form>
        </div>
    );
};

export default Register;
