import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Services from "../Components/Servics/Services";
import Blog from "../Components/Bolg/Blog";
import Contact from "../Components/Contact/Contact";

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
        ]
    },
]);

export default router