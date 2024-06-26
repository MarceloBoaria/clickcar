import { useEffect, useState } from "react";
import "./RegisterCar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterCarCar = () => {

    const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [yearManufacture, setYearManufacture] = useState('');
    const [mileage, setMileage] = useState('');
    const [absBrake, setAbsBrake] = useState('');
    const [eletricGlass, setElectricGlass] = useState('');
    const [color, setColor] = useState('');
    const [sunroof, setSunroof] = useState('');
    const [doors, setDoors] = useState('');
    const [eletricLock, setEletricLock] = useState('');
    const [alarm, setAlarm] = useState('');
    const [airbag, setAirBag] = useState('');
    const [direction, setDirection] = useState('');
    const [transmission, setTransmission] = useState('');
    const [airConditioning, setAirConditioning] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("isAdmin")) {
            alert("Você não está logado como Administrador!")
            navigate("/")
        }
  
        }, []);

        const registerCar = async () => {

        const newCar = {
            model: model,
            brand: brand,
            yearManufacture: yearManufacture,
            mileage: mileage,
            absBrake: absBrake,
            eletricGlass: eletricGlass,
            color: color,
            sunroof: sunroof,
            doors: doors,
            eletricLock: eletricLock,
            alarm: alarm,
            airbag: airbag,
            direction: direction,
            transmission: transmission,
            airConditioning: airConditioning,
            category: category,
            price: price
        };

        const token = localStorage.getItem("token")
        await axios.post("http://localhost:8080/cars", newCar, { headers: {"Authorization": `Bearer ${token}`}});
        console.log(newCar);
        
        let carsList = cars
        carsList.push(newCar);
        
        console.log(newCar);
        
        setCars(carsList);
        setModel("");
        setBrand("");
        setYearManufacture("");
        setMileage("");
        setAbsBrake("");
        setElectricGlass("");
        setColor("");
        setSunroof("");
        setDoors("");
        setEletricLock("");
        setAlarm("");
        setAirBag("");
        setDirection("");
        setTransmission("");
        setAirConditioning("");
        setCategory("");
        setPrice("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            model !== "" &&
            brand !== "" &&
            yearManufacture !== "" &&
            mileage !== "" &&
            absBrake !== "" &&
            eletricGlass !== "" &&
            color !== "" &&
            sunroof !== "" &&
            doors !== "" &&
            eletricLock !== "" &&
            alarm !== "" &&
            airbag !== "" &&
            direction !== "" &&
            transmission !== "" &&
            airConditioning !== "" &&
            category !== "" &&
            price !== ""
        ) {
            registerCar();
            alert("Carro cadastrado com sucesso!")
            navigate("/")
        } else {
            alert(
                "Por favor, preencha todos os campos para cadastrar um novo carro!"
            );
        }
    };

    return (
        <div className="divRegisterCar">
            <form className="registerCar" onSubmit={handleSubmit}>
                <h2>Cadastrar Carro</h2>
                <br />
                <br />
                <div>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                        <option value="">Marca</option>
                        <option value="Ferrari">Ferrari</option>
                        <option value="Lamborghini">Lamborghini</option>
                        <option value="Bugatti">Bugatti</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Rolls-Royce">Rolls-Royce</option>
                        <option value="Bentley">Bentley</option>
                    </select>
                    <select value={model} onChange={(e) => setModel(e.target.value)}>
                        <option value="">Modelo</option>
                        <option value="LaFerrari">LaFerrari</option>
                        <option value="Chiron">Chiron</option>
                        <option value="911 Turbo S">911 Turbo S</option>
                        <option value="6.3 V12 Turbo">6.3 V12 Turbo</option>
                        <option value="Phantom">Phantom</option>
                        <option value="Continental GT">Continental GT</option>
                    </select>
                    <select value={absBrake} onChange={(e) => setAbsBrake(e.target.value)}>
                        <option value="">Freio ABS</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <select value={eletricGlass} onChange={(e) => setElectricGlass(e.target.value)}>
                        <option value="">Vidros Elétricos</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                        <option value="">Cor</option>
                        <option value="PRETO">Preto</option>
                        <option value="CINZA">Cinza</option>
                        <option value="BRANCO">Branco</option>
                        <option value="AZUL">Azul</option>
                        <option value="VERMELHO">Vermelho</option>
                        <option value="MARROM">Marrom</option>
                    </select>
                </div>
                <div>
                    <select value={sunroof} onChange={(e) => setSunroof(e.target.value)}>
                            <option value="">Teto Solar</option>
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                    </select>
                    <select value={doors} onChange={(e) => setDoors(e.target.value)}>
                        <option value="">Portas</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                    </select>
                    <select value={eletricLock} onChange={(e) => setEletricLock(e.target.value)}>
                        <option value="">Travas Elétricas</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <select value={alarm} onChange={(e) => setAlarm(e.target.value)}>
                        <option value="">Alarme</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <select value={airbag} onChange={(e) => setAirBag(e.target.value)}>
                        <option value="">Airbag</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                </div>
                <div>
                    <select value={direction} onChange={(e) => setDirection(e.target.value)}>
                        <option value="">Direção</option>
                        <option value="HIDRAULIC">Hidráulica</option>
                        <option value="ELETRIC">Elétrica</option>
                    </select>
                    <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                        <option value="">Transmissão</option>
                        <option value="AUTOMATIC">Automática</option>
                        <option value="MANUAL">Manual</option>
                    </select>
                    <select value={airConditioning} onChange={(e) => setAirConditioning(e.target.value)}>
                        <option value="">Ar Condicionado</option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                    </select>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Categoria</option>
                        <option value="NEW">Novo</option>
                        <option value="SEMINEW">Seminovo</option>
                    </select>
                    <input
                        type="number"
                        className="inputRegisterCar"
                        placeholder="Preço:"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        className="inputRegisterCar"
                        placeholder="Quilometragem:"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                    />
                    <input
                        type="number"
                        className="inputRegisterCar"
                        placeholder="Ano de Fabricação:"
                        value={yearManufacture}
                        onChange={(e) => setYearManufacture(e.target.value)}
                    />
                </div>
                <div className="image-button">
                    <button className="btnRegisterCar">Editar Carro</button>
                    <button type="submit" className="btnRegisterCar">Cadastrar</button>
                    <button className="btnRegisterCar">Deletar Carro</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterCarCar;
