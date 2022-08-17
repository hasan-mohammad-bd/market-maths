import React from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Contract = () => {
  return (
    <>
      <div className="contact mb-8 md:mb-0">
        <h3 className="text-[20px] font-bold text-[#092744] ">
            Contact Details
        </h3>
        <ExtraSmallLine className="mb-3" />
        <div className="list">
            <div className='mb-4 flex items-center'><MdPlace className="text-[25px] text-[#DAA106] "/> <p className="text-gray-600 font-semibold ml-3"> 9255 Wintergreen Street, New York <br /> Dracut, MA 01826, USA</p></div>

            <div className='mb-4 flex items-center'><AiOutlineMail className="text-[25px] text-[#DAA106] "/> <p className="text-gray-600 font-semibold ml-3">info@marketmaths.com</p></div>

            <div className='mb-4 flex items-center'><MdCall className="text-[25px] text-[#DAA106] "/> <p className="text-gray-600 font-semibold ml-3">(+123) 123 456 7890</p></div>

            <div className='mb-4 mt-8 text-[#DAA106] flex items-center justify-between text-[25px] w-[180px]'>
                <GrFacebookOption/>
                <AiOutlineTwitter/>
                <FaLinkedinIn/>
                <FaInstagram/>
            </div>



        </div>
      </div>
    </>
  );
};

export default Contract;
