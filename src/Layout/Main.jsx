import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navber/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;