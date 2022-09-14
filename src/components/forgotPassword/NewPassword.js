import React, { useState } from "react";
import logo from "../../image/logo-white-removebg-preview.png";
import { FaFingerprint } from "@react-icons/all-files/fa/FaFingerprint";
import { AiTwotonePhone } from "@react-icons/all-files/ai/AiTwotonePhone";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useNavigate } from "react-router-dom";
import TermsConditionsModal from "../termsConditions/TermsConditionsModal";
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import { API_URL } from "../common/constants";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";


const NewPassword = ({value2}) => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCodeBlur = (event) => {
    setCode(event.target.value);
  };

  const handleVerifyUser = (event) => {
    event.preventDefault();
    const verify = {

      phone: value2 || phone,
      code: code,
      password: password
      
    }
    console.log(verify);


      fetch(`${API_URL}auth/forgot_pass/change`, {
        method: "POST",
        headers: {

          "content-type": "application/json",
        },
        body: JSON.stringify(verify),
      })
        .then((res) => res.json())
        .then((data) => {
  
          if (data.status) {
            toast.success(`${data.message}`);
            navigate('/login')
          }
          else{
            toast.error(`${data.message}`)
          }
        });

  };



  return (
    <>
      <div class="max-w-[500px] mx-auto my-16 p-10 bg-[#F3F3F5]" for="">
        <h3 class="text-lg font-bold text-center mt-8 mb-3">Update Password</h3>
        <p class="py-4 text-center">
          We have sent a verification code to your registered phone number
        </p>
        <form onSubmit={handleVerifyUser}>

          <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <AiTwotonePhone />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
              onBlur={handlePhoneBlur}
              defaultValue={value2 && value2}
              placeholder="Phone Number"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="text"
              required
            />
          </div>
          <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <AiFillLock />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
              onBlur={(e)=>setPassword(e.target.value)}
              defaultValue={value2 && value2}
              placeholder="Enter New Password"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="password"
              required
            />
          </div>
          <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <FaFingerprint />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
              onBlur={handleCodeBlur}
              placeholder="Please Enter Verify Code"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="text"
              required
            />
          </div>


          <div className="logo-submit mt-10 flex justify-between items-center my-2">
            <div className="login-btn">
              <input

                className={`w-[150px] h-[50px] bg-[#DAA106] text-white font-semibold`}
                type="submit"
                value="Send Code"
              />
            </div>
            <div className="logo w-[200px]">
              <img className="w-100" src={logo} alt="" />
            </div>
          </div>

        </form>
      </div>
      <TermsConditionsModal />
    </>
  );
};

export default NewPassword;
