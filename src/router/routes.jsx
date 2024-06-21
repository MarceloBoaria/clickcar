import Register from './../pages/RegisterUser/Register';
import Profile from './../pages/Profile/Profile';
import Stock from './../pages/Stock/Stock';
import App from '../App';
import Home from './../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre';
import RegisterCarCar from './../pages/RegisterCar/RegisterCar';
import Login from './../pages/Login/Login';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/register", element: <Register />},
            {path: "/registerCar", element: <RegisterCarCar />},
            {path: "/login", element: <Login />},
            {path: "/profile", element: <Profile />},
            {path: "/stock", element: <Stock />},
            {path: "/sobre", element: <Sobre />},
        ]
    },
])

export default router;