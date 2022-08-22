import React from "react";
import logo from '../../image/logo-white-removebg-preview.png';
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

const LoginModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative rounded-none p-10 bg-[#F3F3F5]" for="">
          <label for="my-modal-4" class="absolute right-2 top-2 mt-1">
            <span className="flex justify-center items-center inline-block w-[30px] h-[30px] bg-[#092744] text-white">
              ✕
            </span>
          </label>
          <h3 class="text-lg font-bold text-center mt-8 mb-3">
            Login To Account
          </h3>
          <p class="py-4 text-center">
            Signin now to know about the proceedings of your registration in our
            business. We will keep you informed through your Dashboard.
          </p>
          <form action="">
            <div className="flex flex-col justify-content items-center relative font-normal">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block mt-[5px]"><AiOutlineMail/></span><span className="mx-4 ">|</span>
              </div>
              <input
              placeholder="Email Address"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-content items-center relative">
              <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block mt-[5px]"><AiFillLock/></span><span className="mx-4 ">|</span>
              </div>
              <input
              placeholder="Password"
                className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
                type="password"
                required
              />
            </div>
            <p className="text-end">Forgot Password?</p>
            <div className="logo-submit flex justify-between items-center my-2">
              <div className="login-btn">
                <input
                  className="w-[150px] h-[50px] bg-[#DAA106] text-white font-semibold"
                  type="submit"
                  value="LOGIN"
                />
              </div>
              <div className="logo w-[200px]">
                <img className="w-100" src={logo} alt="" />
              </div>
            </div>
            <p className="text-center mt-5 text-[14px] font-semibold flex items-center justify-center">              <button
                className=" text-blue-500 border border-blue-500 rounded-full mr-2"
                type="submit"
              >
                <IoIosArrowForward />
              </button> <span>Don't Have an Account</span></p>
          </form>
        </label>
      </label>
    </>
  );
};

export default LoginModal;
