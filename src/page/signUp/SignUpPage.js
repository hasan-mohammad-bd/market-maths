import React from 'react';
import logo from "../../image/logo-white-removebg-preview.png";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { NavLink } from "react-router-dom";
import TermsConditionsModal from '../../components/termsConditions/TermsConditionsModal';

const SignUpPage = () => {
    return (
        <>
        <div class="max-w-[500px] mx-auto my-16 p-10 bg-[#F3F3F5]" for="">
          <h3 class="text-lg font-bold text-center mt-8 mb-3">
            Sign Up Account
          </h3>
          <p class="py-4 text-center">
            Signin now to know about the proceedings of your registration in our
            business. We will keep you informed through your Dashboard.
          </p>
          <form action="">
            <div className="flex flex-col justify-content items-center relative font-normal">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
                <span className="block">
                  <FaUserAlt />
                </span>
                <span className="mx-4 ">|</span>
              </div>
              <input
                placeholder="First Name"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative font-normal">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
                <span className="block">
                  <FaUserAlt />
                </span>
                <span className="mx-4 ">|</span>
              </div>
              <input
                placeholder="Last Name"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative font-normal">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
                <span className="block">
                  <AiOutlineMail />
                </span>
                <span className="mx-4 ">|</span>
              </div>
              <input
                placeholder="Email Address"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
                type="email"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] "></div>
              <input
                placeholder="Phone Number"
                className="pl-[20px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] "></div>
              <select
                placeholder="Phone Number"
                className="pl-[20px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
                type="text"
                required
              >
                <option value="volvo" disabled selected>
                  Select Your Plan
                </option>
                <option value="basic">Basic</option>
                <option value="economy">Economy</option>
                <option value="gold">Gold</option>
                <option value="diamond">Diamond</option>
              </select>
            </div>
            <div className="flex flex-col justify-content items-center relative">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
                <span className="block">
                  <AiFillLock />
                </span>
                <span className="mx-4 ">|</span>
              </div>
              <input
                placeholder="Password"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
                type="password"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
                <span className="block">
                  <AiFillLock />
                </span>
                <span className="mx-4 ">|</span>
              </div>
              <input
                placeholder="Confirm Password"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
                type="password"
                required
              />
            </div>
            <div className="flex items-center">

            <input className='w-5 h-4 mr-2' type="checkbox" id="terms" name="terms" value="terms"/>
  <span className="text-[14px]" for="terms">I agree to <label for="my-modal-6" class=""><span className="text-blue-500 cursor-pointer">terms and conditions and privacy and policy </span></label></span>
            </div>
            
            <div className="logo-submit mt-10 flex justify-between items-center my-2">
              <div className="login-btn">
                <input
                  className="w-[150px] h-[50px] bg-[#DAA106] text-white font-semibold"
                  type="submit"
                  value="REGISTER"
                />
              </div>
              <div className="logo w-[200px]">
                <img className="w-100" src={logo} alt="" />
              </div>
            </div>

            <NavLink to='/login' className="text-center mt-5 text-[14px] font-semibold flex items-center justify-center">
            <button
              className=" text-blue-500 border border-blue-500 rounded-full mr-2"
              type="submit"
            >
              <IoIosArrowForward />
            </button>
            <span>Have an Account</span>
          </NavLink>
          </form>
        </div>
        <TermsConditionsModal/>
        </>
    );
};

export default SignUpPage;