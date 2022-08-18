import React from "react";
import woman2 from "../../image/woman-white-shirt2.png";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import '../../style/AboutUsPage.css';

const SingleMember3 = () => {
  return (
    <>
      <div className="single-team-member">
        <div
          style={{
            background: `url(${woman2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" h-[400px]"
        >
          <div className="hover-effect-member flex justify-center items-center">
            <div className="social-icon-member mb-4 mt-8 text-[#DAA106] flex items-center justify-between text-[25px]">
              <a className="logo-round bg-white p-2 mx-2" href="">
                <GrFacebookOption />
              </a>
              <a className="logo-round bg-white p-2 mx-2" href="">
                <AiOutlineTwitter />
              </a>
              <a className="logo-round bg-white p-2 mx-2" href="">
                <FaLinkedinIn />
              </a>
              <a className="logo-round bg-white p-2 mx-2" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text text-center">
          <h3 className="text-[20px] font-bold text-[#DAA106] my-2">Sabrina</h3>
          <p className="text-gray-400">Sr. Consultant</p>
        </div>
      </div>
    </>
  );
};

export default SingleMember3;
