import React from 'react';
import { NavLink } from "react-router-dom";
import '../../style/Header.css'
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto font-semibold py-3 mr-24 hidden md:block">
                <nav className='flex justify-end items-center'>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/about">About Us</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/live">FX Live Charts</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/calender">Forex Calender</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/blog">Blog</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/contact">Contact Us</NavLink>
                <NavLink className="login ml-[70px] flex items-center " to="/login"><span className='mr-2'><FiLogIn/></span> log In</NavLink>
                </nav>
            </div>
        </>
    );
};

export default Navbar;