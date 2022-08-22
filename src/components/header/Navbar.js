import React from 'react';
import { NavLink } from "react-router-dom";
import '../../style/Header.css'
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import LoginModal from '../loginModal/LoginModal';
import SignUpModal from '../signUpModal/SignUpModal';

const Navbar = () => {
    return (
        <>
            <div className="container mx-auto font-semibold py-3 mr-24 hidden md:block">
            <LoginModal/>
            <SignUpModal/>
                <nav className='flex justify-end items-center'>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/">Home</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/about">About Us</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/live">FX Live Charts</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/calendar">Forex Calender</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/blog">Blog</NavLink>
                <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/contact">Contact Us</NavLink>
                <label htmlFor="my-modal-4" class=""><span  className="login-btn-header ml-[70px] flex items-center"><span className='mr-2'><FiLogIn/></span>log In</span></label>
                </nav>

            </div>
        </>
    );
};

export default Navbar;