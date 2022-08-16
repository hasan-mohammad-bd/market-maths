import React from "react";
import logo from "../../image/logo.png";
import '../../style/Header.css';
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";

const Header = () => {
  return (
    <>

        <div className="flex bg-[#F3F3F5] h-[100px]">
          <div className="blue-shed bg-[#091744] w-[400px] pl-10 flex items-center">
          <div className="logo-holder max-w-[300px] "><img src={logo} alt="" /></div>
          </div>
          <div className="bg-[#091744] skew-x-[-30deg] w-16 -translate-x-10 intersect z-10"></div>
          <div className="white-shed bg-[#F3F3F5] h-100 w-100 flex-1 flex items-center">
              <div className="icon-details flex items-center w-[700px] justify-between mx-auto">
                <div className="flex justify-center items-center">
                <MdPlace className="text-[30px] text-[#FEB20D]"/>
                <div className="flex flex-col ml-2 font-semibold">
                  <p>Jalabad, Shanker Road</p>
                  <p className="text-[#A099AC]">Malasia 1260</p>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <MdCall className="text-[30px] text-[#FEB20D]"/>
                <div className="flex flex-col ml-2 font-semibold">
                  <p>+123-456-78900</p>
                  <p className="text-[#A099AC]">27/7 Help line</p>
                </div>
                </div>
                <div className="flex justify-center items-center">
                <AiOutlineMail className="text-[30px] text-[#FEB20D]"/>
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
