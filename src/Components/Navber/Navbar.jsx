import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 font-inter mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/services'>Services</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/contact'>Contact</NavLink>
                        </ul>
                    </div>
                    <div>
                        <img className='' src="/src/assets/logo.svg" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 text-[#444444] text-lg font-semibold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3 items-center">
                    <BiShoppingBag className='text-2xl'></BiShoppingBag>
                    <CiSearch className='text-2xl'></CiSearch>
                    <a className="border border-[#FF3811] text-[#FF3811] p-3 rounded-lg text-lg font-semibold">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;