import React, { useState } from "react";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import logo from "../../image/logo-white-removebg-preview.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PhoneInput from 'react-phone-number-input'
import { API_URL } from "../../components/common/constants";

const LoginPage = ({user, setUser}) => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState('');
  

/*   const handleEmailBlur = (event) => {
    setPhone(event.target.value);
  }; */

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginUser = (event) => {
    event.preventDefault();


      const user = {
        phone:value,
        password:password,

      }

      fetch(`${API_URL}auth/login`, {
        method: "POST",
        headers: {
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
  
          if (data.status) {
            toast.success(`${data.message}`);
            localStorage.setItem(
              "market-maths-user-data",
              JSON.stringify({ ...data?.data?.user_name, token: data?.data?.access_token })
            );
            setUser(data.data)
            navigate('/home')
          }

          
          else{
            toast.error(`${data.message}`)
          }
        });



  };


  return (
    <>
      <div class="max-w-[500px] mx-auto my-16 p-10 bg-[#F3F3F5]" for="">
        <h3 class="text-lg font-bold text-center mt-8 mb-3">
          Login To Account
        </h3>
        <p class="py-4 text-center">
          Signin now to know about the proceedings of your registration in our
          business. We will keep you informed through your Dashboard.
        </p>
        <form onSubmit={handleLoginUser}>
{/*           <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <AiOutlineMail />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
            onBlur={handleEmailBlur}
              placeholder="Email Address"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="text"
              required
            />
          </div> */}
          <div className="flex flex-col justify-content items-center relative">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] "></div>
            <PhoneInput
              value = {value}
              onChange={setValue}
              placeholder="Phone Number"
              className="pl-[20px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
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
            onBlur={handlePasswordBlur}
              placeholder="Password"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
              type="password"
              required
            />
          </div>
          <NavLink to="/forgot-password"><p className="text-end pointer">Forgot Password?</p></NavLink>
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
          <NavLink to='/signup' className="text-center mt-5 text-[14px] font-semibold flex items-center justify-center">
            <button
              className=" text-blue-500 border border-blue-500 rounded-full mr-2"
              type="submit"
            >
              <IoIosArrowForward />
            </button>
            <span>Don't Have an Account</span>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
