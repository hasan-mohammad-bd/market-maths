import React, { useState } from "react";
import logo from "../../image/logo-white-removebg-preview.png";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { AiFillLock } from "@react-icons/all-files/ai/AiFillLock";
import { GrLocation } from "@react-icons/all-files/gr/GrLocation";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { NavLink, useNavigate } from "react-router-dom";
import TermsConditionsModal from "../../components/termsConditions/TermsConditionsModal";
import { toast } from 'react-toastify';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { API_URL } from "../../components/common/constants";


const SignUpPage = ({value, setValue}) => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
/*   const [phone, setPhone] = useState(""); */
  const [plan, setPlan] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState("");
  const [address, setAddress] = useState("");
  // const [value, setValue] = useState('')

  const handleTerms = () =>{
    setTerms(!terms)
  }



  const handleFirstNameBlur = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameBlur = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
/*   const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  }; */

  const handlePlanBlur = (event) => {
    setPlan(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleUserNameBlur = (event) => {
    setUserName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  
/*   const {data: plan, isLoading, error} = useQuery('registerPlan', ()=> fetch(`https://math-market.herokuapp.com/api/user/plan`,{
    method: 'GET',
    headers:{

    }
}).then(res => res.json()))
console.log(plan);

 if (isLoading) return 'Loading...'

 if (error) return toast.error(error.message) */



  const handleCreateUser = (event) => {
    event.preventDefault();

    if(password === confirmPassword){
      const user = {

        name:`${firstName} ${lastName}`,
        email:email,
        phone:value,
        plan:plan,
        password:password,
        user_name:userName,
        address:address
      }
      console.log(user);
  
  
  
      fetch(`${API_URL}auth/register`, {
        method: "POST",
        headers: {
          // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
  
          if (data.status) {
            toast.success(`${data.message}`);
            navigate('/verify')
          }

          
          else{
            toast.error(`${data.message}`)
          }
        });

    }
    else{
      toast.error("Password didn't match")
    }


  };

  return (
    <>
      <div class="max-w-[500px] mx-auto my-16 p-10 bg-[#F3F3F5]" for="">
        <h3 class="text-lg font-bold text-center mt-8 mb-3">Sign Up Account</h3>
        <p class="py-4 text-center">
          Signin now to know about the proceedings of your registration in our
          business. We will keep you informed through your Dashboard.
        </p>
        <form onSubmit={handleCreateUser}>
          <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <FaUserAlt />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
              onBlur={handleFirstNameBlur}
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
              onBlur={handleLastNameBlur}
              placeholder="Last Name"
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
              onBlur={handleUserNameBlur}
              placeholder="UserName"
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
              onBlur={handleEmailBlur}
              placeholder="Email Address"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="email"
              required
            />
          </div>
          <div className="flex flex-col justify-content items-center relative font-normal">
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] ">
              <span className="block">
                <GrLocation />
              </span>
              <span className="mx-4 ">|</span>
            </div>
            <input
              onBlur={handleAddressBlur}
              placeholder="Address"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border "
              type="text"
              required
            />
          </div>
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
            <div className="icon flex items-center justify-center text-[20px] absolute left-[20px] top-[8px] "></div>
            <select
              onBlur={handlePlanBlur}
              placeholder="Phone Number"
              className="pl-[20px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
              type="text"
              required
            >
              <option value="volvo" disabled selected>
                Select Your Plan
              </option>
              <option value="630ef5c850c006c21a66c950">Basic</option>
              <option value="630f0c3b50c006c21a66ca80">Economy</option>
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
              onBlur={handlePasswordBlur}
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
              onBlur={handleConfirmPasswordBlur}
              placeholder="Confirm Password"
              className="pl-[80px] block h-[50px] w-full mx-auto p-2 mb-2 outline-none border"
              type="password"
              required
            />
          </div>
          <div className="flex items-center">
            <input
            onClick={handleTerms}
              className="w-5 h-4 mr-2"
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
            />
            <span className="text-[14px]" for="terms">
              I agree to{" "}
              <label for="my-modal-6" class="">
                <span className="text-blue-500 cursor-pointer">
                  terms and conditions and privacy and policy{" "}
                </span>
              </label>
            </span>
          </div>

          <div className="logo-submit mt-10 flex justify-between items-center my-2">
            <div className="login-btn">
              <input
                disabled={terms === false}
                className={`w-[150px] h-[50px] ${terms? "bg-[#DAA106]": "bg-gray-500"}  text-white font-semibold`}
                type="submit"
                value="REGISTER"
              />
            </div>
            <div className="logo w-[200px]">
              <img className="w-100" src={logo} alt="" />
            </div>
          </div>

          <NavLink
            to="/login"
            className="text-center mt-5 text-[14px] font-semibold flex items-center justify-center"
          >
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
      <TermsConditionsModal />
    </>
  );
};

export default SignUpPage;
