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
    const [electricGlass, setElectricGlass] = useState('');
    const [color, setColor] = useState('');
    const [sunroof, setSunroof] = useState('');
    const [doors, setDoors] = useState('');
    const [eletricLock, setEletricLock] = useState('');
    const [alarm, setAlarm] = useState('');
    const [airBag, setAirBag] = useState('');
    const [direction, setDirection] = useState('');
    const [transmission, setTransmission] = useState('');
    const [airConditioning, setAirConditioning] = useState('');

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
            mileage: mileage,absBrake: absBrake,
            electricGlass: electricGlass,
            color: color,
            sunroof: sunroof,
            doors: doors,
            eletricLock: eletricLock,
            alarm: alarm,
            airBag: airBag,
            direction: direction,
            transmission: transmission,
            airConditioning: airConditioning
        };

        await axios.post("http://localhost:8080/cars", newCar);
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            model !== "" &&
            brand !== "" &&
            yearManufacture !== "" &&
            mileage !== "" &&
            absBrake !== "" &&
            electricGlass !== "" &&
            color !== "" &&
            sunroof !== "" &&
            doors !== "" &&
            eletricLock !== "" &&
            alarm !== "" &&
            airBag !== "" &&
            direction !== "" &&
            transmission !== "" &&
            airConditioning !== ""
        ) {
            registerCar();
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
                    <select>
                        <option value="">Marca</option>
                        <option value="1">Ferrari</option>
                        <option value="2">Lamborghini</option>
                        <option value="3">Bugatti</option>
                        <option value="4">Porsche</option>
                        <option value="5">Rolls-Royce</option>
                        <option value="6">Bentley</option>
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    </select>
                    <select>
                        <option value="">Modelo</option>
                        <option value="1">LaFerrari</option>
                        <option value="2">Chiron</option>
                        <option value="3">911 Turbo S</option>
                        <option value="4">6.3 V12 Turbo</option>
                        <option value="5">Phantom</option>
                        <option value="6">Continental GT</option>
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    </select>
                    <select>
                        <option value="">Freio ABS</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={absBrake}
                        onChange={(e) => setAbsBrake(e.target.value)}
                    </select>
                    <select>
                        <option value="">Vidros Elétricos</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={electricGlass}
                        onChange={(e) => setElectricGlass(e.target.value)}
                    </select>
                    <select>
                        <option value="">Cor</option>
                        <option value="1">Preto</option>
                        <option value="2">Cinza</option>
                        <option value="3">Branco</option>
                        <option value="4">Azul</option>
                        <option value="5">Vermelho</option>
                        <option value="6">Marrom</option>
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    </select>
                </div>
                <div>
                    <select>
                            <option value="">Teto Solar</option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>
                            value={sunroof}
                            onChange={(e) => setSunroof(e.target.value)}
                    </select>
                    <select>
                        <option value="">Portas</option>
                        <option value="1">2</option>
                        <option value="2">4</option>
                        value={doors}
                        onChange={(e) => setDoors(e.target.value)}
                    </select>
                    <select>
                        <option value="">Travas Elétricas</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={eletricLock}
                        onChange={(e) => setEletricLock(e.target.value)}
                    </select>
                    <select>
                    <option value="">Alarme</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={alarm}
                        onChange={(e) => setAlarm(e.target.value)}
                    </select>
                    <select>
                        <option value="">Airbag</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={airBag}
                        onChange={(e) => setAirBag(e.target.value)}
                    </select>
                </div>
                <div>
                    <select>
                    <option value="">Direção</option>
                        <option value="1">Hidráulica</option>
                        <option value="2">Elétrica</option>
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                    </select>
                    <select>
                        <option value="">Transmissão</option>
                        <option value="1">Automática</option>
                        <option value="2">Manual</option>
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                    </select>
                    <select>
                        <option value="">Ar Condicionado</option>
                        <option value="1">Sim</option>
                        <option value="2">Não</option>
                        value={airConditioning}
                        onChange={(e) => setAirConditioning(e.target.value)}
                    </select>
                    <input
                        type="number"
                        className="inputRegisterCar"
                        placeholder="Quilometragem:"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                    />
                    <input
                        type="date"
                        className="inputRegisterCar"
                        placeholder="Ano de Fabricação:"
                        value={yearManufacture}
                        onChange={(e) => setYearManufacture(e.target.value)}
                    />
                </div>
                <div className="image-button">
                    <input type="file" name="" id="" />
                    <br />
                    <button type="submit" className="btnRegisterCar">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterCarCar;
