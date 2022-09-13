import React, { useState } from 'react';
import phone from '../../image/phone-woman.jpg';
import { IoMdPaperPlane } from "@react-icons/all-files/io/IoMdPaperPlane";
import '../../style/NewLetter.css';
import { NavLink } from 'react-router-dom';
import { API_URL, API_URL_WEBSITE } from '../common/constants';
import { toast } from 'react-toastify';



const NewLetter = () => {
    const [email, setEmail] = useState("");

/*     const handleEmailBlur = (event) => {
        setEmail(event.target.value);
      }; */

      const handleNewsLetter = (e) => {
        e.preventDefault();
    

          const userEmail = {

            email: email,

          }

      
      
      
          fetch(`${API_URL_WEBSITE}subscriber`, {
            method: "POST",
            headers: {
              // authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(userEmail),
          })
            .then((res) => res.json())
            .then((data) => {
      
              if (data.status) {
                toast.success(`${data.message}`);
                e.target.reset()

              }
    
              
              else{
                toast.error(`${data.message}`)
              }
            });


    

    
    
      };
    return (
        <>
            <div style={{ background: `url(${phone})`, backgroundSize: "cover", backgroundPosition: "center" }} className="py-16 flex flex-col md:flex-row items-center justify-around">
                <div className="input-value mb-28 md:mb-0">
                    <div className="text flex items-center text-white mb-12">
                        <IoMdPaperPlane className='text-[50px]'/>
                        <div className="text">
                            <h3 className='text-[23px] ml-3 font-semibold text-start'>Sign up for Newsletter</h3>
                            <p className='ml-3 text-[14px]'>We will never share your mail with third party</p>
                        </div>
                    </div>

                    <form className='flex items-center' onSubmit={handleNewsLetter}>
                        <input required onBlur={(e)=>setEmail(e.target.value)} className='pl-2 text-[12px] w-[280px] h-[34px] news-letter-input' placeholder='Enter your email address' type="email" name="" id="" />
                        <input className='bg-[#DAA106] news-letter-submit text-[12px] text-white w-[100px] h-[34px]' type="submit" value="Sign Up" />
                    </form>

                </div>
                <div className="number text-center text-white">
                    <p className='uppercase font-semibold'>Reach out now!</p>
                    <h3 className='font-bold my-5 text-[38px]'>+123-456-789</h3>
                    <NavLink className="sub-btn font-semibold text-[#092744] bg-white py-[10px] px-[20px]" to="/">Subscribe Now</NavLink>
                </div>
            </div>
        </>
    );
};

export default NewLetter;