import { useState } from "react";
import "./RegisterCar.css";

const RegisterCarCar = () => {

    const [cars, setCars] = useState([]);
    const [details, setDetails] = useState([]);
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

    const registerCar = () => {
        const newCar = {
            brand: brand,
            model: model,
            yearManufacture: yearManufacture,
            mileage: mileage
        };

        const newDetails = {
            absBrake: absBrake,
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

        let carsList = cars
        carsList.push(newCar);

        let detailsList = details
        detailsList.push(newDetails);

        setDetails(detailsList);
        setCars(carsList);
        setBrand("");
        setModel("");
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
            brand !== "" &&
            model !== "" &&
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
            <form onSubmit={handleSubmit}>
                <div className="registerCar">
                    <h2>Informações</h2>
                    <input
                        type="text"
                        className="inputRegisterCar"
                        placeholder="Marca:"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputRegisterCar"
                        placeholder="Modelo:"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputRegisterCar"
                        placeholder="Ano de Fabricação:"
                        value={yearManufacture}
                        onChange={(e) => setYearManufacture(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputRegisterCar"
                        placeholder="Quilometragem:"
                        value={mileage}
                        onChange={(e) => setMileage(e.target.value)}
                    />
                </div>
                <div className="detailsCar">
                    <h2>Detalhes</h2>
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Freio ABS:"
                        value={absBrake}
                        onChange={(e) => setAbsBrake(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Vidro Elétrico:"
                        value={electricGlass}
                        onChange={(e) => setElectricGlass(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Cor:"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Teto Solar:"
                        value={sunroof}
                        onChange={(e) => setSunroof(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Portas:"
                        value={doors}
                        onChange={(e) => setDoors(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Trava Elétrica:"
                        value={eletricLock}
                        onChange={(e) => setEletricLock(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Alarme:"
                        value={alarm}
                        onChange={(e) => setAlarm(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="AirBag:"
                        value={airBag}
                        onChange={(e) => setAirBag(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Direção:"
                        value={direction}
                        onChange={(e) => setDirection(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Transmissão:"
                        value={transmission}
                        onChange={(e) => setTransmission(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputDetailsCar"
                        placeholder="Ar Condicionado:"
                        value={airConditioning}
                        onChange={(e) => setAirConditioning(e.target.value)}
                    />
                </div>
                <button type="submit" className="btnRegisterCar">Cadastrar</button>
            </form>
        </div>
    );
};

export default RegisterCarCar;
