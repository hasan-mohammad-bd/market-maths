import React, { useState } from "react";
import logo from "../../image/logo.png";
import "../../style/Header.css";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { RiMenu3Fill } from "@react-icons/all-files/ri/RiMenu3Fill";
import { AiOutlineCloseSquare } from "@react-icons/all-files/ai/AiOutlineCloseSquare";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";

const Header = () => {
  const [menu, setMenu] = useState(false);



  const menuSweeper = () => {
      setMenu(!menu)

  }
  return (
    <>
      <div className="flex bg-[#F3F3F5] h-[100px]">
        <div className="blue-shed bg-[#091744] w-[300px] lg:w-[400px]  pl-10 flex items-center">
          <div className="logo-holder w-[150px] lg:w-[300px] ">
            <img className="w-100" src={logo} alt="" />
          </div>
        </div>
        <div className="bg-[#091744] skew-x-[-30deg] w-16 -translate-x-10 intersect z-10"></div>
        <div className="white-shed bg-[#F3F3F5] h-100 w-100 flex-1 flex items-center">
        <div className="ml-auto text-[25px]">
              {menu ? <AiOutlineCloseSquare onClick={menuSweeper} className="ml-auto lg:hidden mr-4"/> :
          <RiMenu3Fill onClick={menuSweeper} className="menu-bar lg:hidden mr-4"/>}

          </div>
          <nav className={`lg-flex grid grid-cols-1 lg:hidden z-20 bg-[#092744] p-5 right-10 absolute lg:static ${menu ? 'top-20': 'top-[-250px]'}`}>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/">Home</NavLink>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/about">About Us</NavLink>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/live">FX Live Charts</NavLink>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/calender">Forex Calender</NavLink>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/blog">Blog</NavLink>
          <NavLink className={({isActive}) => (isActive? "hactiveRoute" : "hinactiveRoute")} to="/contact">Contact Us</NavLink>
          <NavLink className="login flex items-center " to="/login"><span className='mr-2'><FiLogIn/></span> log In</NavLink>
          </nav>
          <div className="icon-details items-center w-[700px] justify-between mx-auto hidden lg:flex">

            <div className="flex justify-center items-center">
              <MdPlace className="text-[30px] text-[#FEB20D]" />
              <div className="flex flex-col ml-2 font-semibold">
                <p>Jalabad, Shanker Road</p>
                <p className="text-[#A099AC]">Malasia 1260</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <MdCall className="text-[30px] text-[#FEB20D]" />
              <div className="flex flex-col ml-2 font-semibold">
                <p>+123-456-78900</p>
                <p className="text-[#A099AC]">27/7 Help line</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <AiOutlineMail className="text-[30px] text-[#FEB20D]" />
              <div className="flex flex-col ml-2 font-semibold">
                <p>marketmaths@gmail.com</p>
                <p className="text-[#A099AC]">For Any Query</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
