import React from "react";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight";
import avatar1 from "../../image/avatar2.jpg";

const Feedback2 = () => {
  return (
    <>
      <div className="single-feedback ">
        <div className="p-10 bg-[#092744] relative">
          <span className="quotation text-white absolute top-[-35px] left-[0px]">
            <FaQuoteLeft className="text-white text-[30px]" />
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
            culpa quam! Eum, soluta cupiditate, minima tempore incidunt odit
            iste nemo id neque nihil sit cumque et! Quam, modi mollitia!
            Aperiam?
          </p>
          <span className="quotation text-white absolute bottom-[-35px] right-[0px]">
            <FaQuoteRight className="text-white text-[30px]" />
          </span>
        </div>
        <div className="avatar-section flex justify-between items-center max-w-[200px] mt-3">
          <img src={avatar1} alt="" className="avatar-feedback" />
          <div className="text">
            <p className="text-[20px] font-semibold"> Rayan Bold</p>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback2;
