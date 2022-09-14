import React, { useState } from "react";
import logo from "../../image/logo-white-removebg-preview.png";
import { FaFingerprint } from "@react-icons/all-files/fa/FaFingerprint";
import { AiTwotonePhone } from "@react-icons/all-files/ai/AiTwotonePhone";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { useNavigate } from "react-router-dom";
import TermsConditionsModal from "../../components/termsConditions/TermsConditionsModal";
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import { API_URL } from "../common/constants";
import PhoneInput from 'react-phone-number-input'


const ForgotPassword = ({value2, setValue2}) => {
  const navigate = useNavigate()
//   const [phone, setPhone] = useState("");
//   const [code, setCode] = useState("");

/*   const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCodeBlur = (event) => {
    setCode(event.target.value);
  }; */



  const handleForgetPassword = (event) => {
    event.preventDefault();
    const resend = {
      phone: value2
    }
    console.log(resend);

    fetch(`${API_URL}auth/forgot_pass`, {
        method: "POST",
        headers: {
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(resend),
      })
        .then((res) => res.json())
        .then((data) => {
  
          if (data.status) {
            toast.success(`${data.message}`);
            navigate('/verifyOtp');
          }
          else{
            toast.error(`${data.message}`)
          }
        });


  }

  return (
    <>
      <div class="max-w-[500px] mx-auto my-16 p-10 bg-[#F3F3F5]" for="">
        <h3 class="text-lg font-bold text-center mt-8 mb-3">Forgot Password Recovery</h3>
        <p class="py-4 text-center">
          Please enter your phone number to get OTP code.
        </p>
        <form onSubmit={handleForgetPassword}>

        <div className="flex flex-col justify-content items-center relative">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] "></div>
            <PhoneInput
              value = {value2}
              onChange={setValue2}
              placeholder="Phone Number"
              className="pl-[20px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
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

export default ForgotPassword;
