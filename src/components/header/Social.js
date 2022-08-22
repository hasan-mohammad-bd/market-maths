import React from "react";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FiLogIn } from "@react-icons/all-files/fi/FiLogIn";
import SignUpModal from "../signUpModal/SignUpModal";


const Social = () => {
  return (
    <div className="social bg-[#28303B] text-white h-[30px] text-[14px] items-center hidden md:flex">
      <div className="container mx-auto h-100 flex justify-between items-center">
        <div className="welcome flex justify-between">
          <div className="">Welcome to Market Maths!</div>
        </div>
        <div className="social-signup flex justify-between items-center">
          <p>
            Are You New Here? Please
            <label className="" for="my-modal-5" class=""><span className='underline text-[#DAA106] ml-1'>SignUp</span></label>
            {/* <span className="underline text-[#DAA106] ml-1">SignUp</span> */}
          </p>
          <div className="social-icon text-[18px] ml-10 flex justify-between">
              <GrFacebookOption/>
              <AiOutlineTwitter className="ml-4"/>
              <FaLinkedinIn className="ml-4"/>
              <FaInstagram className="ml-4"/>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Social;
