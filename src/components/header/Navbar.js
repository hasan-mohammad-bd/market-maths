import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../../style/Header.css'
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import LoginModal from '../loginModal/LoginModal';
import SignUpModal from '../signUpModal/SignUpModal';
import { ACCESS_TOKEN } from '../common/constants';
import { useState } from 'react';

const Navbar = ({user,setUser}) => {
    const [access, setAccess] = useState({});
    useEffect(()=>{
        setAccess(ACCESS_TOKEN);
    },[])

    const handleLogout = () => {
        localStorage.removeItem("market-maths-user-data");
        setAccess('')
        setUser([])
        // navigate("/login");
      };
    
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
                {
                    access || user.email? 
                    <span onClick={handleLogout} class=""><span  className="login-btn-header ml-[70px] flex items-center"><span className='mr-2'><FiLogIn/></span>Log Out</span></span> 
                    :                 
                    <NavLink to='/login' class=""><span  className="login-btn-header ml-[70px] flex items-center"><span className='mr-2'><FiLogIn/></span>Log In</span></NavLink>
                }

                </nav>

            </div>
        </>
    );
};

export default Navbar;