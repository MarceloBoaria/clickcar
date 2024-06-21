import Register from "./../pages/RegisterUser/Register";
import Profile from "./../pages/Profile/Profile";
import Stock from "./../pages/Stock/Stock";
import App from "../App";
import Home from "./../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Login from "../pages/Login/Login";
import RegisterCarCar from './../pages/RegisterCar/RegisterCar';

import { createBrowserRouter, useLocation } from "react-router-dom";

const PublicRoutes = () => {
    
    const location = useLocation();
    const token = localStorage.getItem("token");

    return token ? (
        <App />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

const RegisterCarRoute = () => {
    
    const location = useLocation();
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");

    return token && isAdmin ? (
        <RegisterCarCar />
    ) : (
        <Navigate to="/" replace state={{ from: location }} />
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoutes />,
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
    },
    { path: "/", element: <Home /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/stock", element: <Stock /> },
    { path: "/sobre", element: <Sobre /> },
    { path: "/registerCar", element: <RegisterCarRoute /> },
]);

export default router;
