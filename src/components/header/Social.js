import React, { useContext } from "react";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

import { Link } from "react-router-dom";
import { DataContext } from "../../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);



const Social = () => {



const { home3 } = useContext(DataContext);


  return (
    <div className="social bg-[#28303B] text-white h-[30px] text-[14px] items-center hidden md:flex">
      <div className="container mx-auto h-100 flex justify-between items-center">
        <div className="welcome flex justify-between">
          <div className="">Welcome to Market Maths!</div>
        </div>
        <div className="social-signup flex justify-between items-center">
          <p>
            Are You New Here? Please
            <Link to="/signup"><span className='underline text-[#DAA106] ml-1'>SignUp</span></Link>
            {/* <span className="underline text-[#DAA106] ml-1">SignUp</span> */}
          </p>
          <div className="social-icon text-[18px] ml-10 flex justify-between">
            {
              home3?.social?.map((s)=> 
              <a href={s.link}  target="_blank" key={s.name} className="ml-4"><FontAwesomeIcon icon={['fab', `${s.code}`]} /></a>)
            }

          </div>
        </div>
      </div>

    </div>
  );
};

export default Social;
