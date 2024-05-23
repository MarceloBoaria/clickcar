import Register from './../pages/RegisterUser/Register';
import Login from './../pages/Login/Login';
import Profile from './../pages/Profile/Profile';
import Stock from './../pages/Stock/Stock';
import App from '../App';
import Home from './../pages/Home/Home';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/", element: <Home />},
            {path: "/register", element: <Register />},
            {path: "/login", element: <Login />},
            {path: "/profile", element: <Profile />},
            {path: "/stock", element: <Stock />},
        ]
    },
])

export default router;