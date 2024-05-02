import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Services from "../Components/Servics/Services";
import Blog from "../Components/Bolg/Blog";
import Contact from "../Components/Contact/Contact";
import Singup from "../Components/SingUp/Singup";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path: '/singup',
                element:<Singup></Singup>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
        ]
    },
]);

export default router