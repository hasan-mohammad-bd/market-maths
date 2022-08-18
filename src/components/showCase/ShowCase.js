import React from "react";
import "../../style/ShowCaae.css";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import { Link } from "react-router-dom";

const ShowCase = () => {
  return (
    <>
      <div className="cover-pic bg-black">
        <div className="black-transparent mx-auto flex justify-center items-center">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center my-auto ">
            <div className="text  text-white">
              <h1 className="lg:text-[52px] text-[38px] font-extrabold">
                Want to grow <br />
                your Investments <br />
                with us?
              </h1>
              <p className="my-6 text-[18px]">With 10+ years of experience in the industry, we proved that the <br /> 
              combination of strategic thinking and expertise create a fascinating <br /> experience</p>
              <Link className="btn" to="/"><span className="button-text ml-8 font-semibold text-[16px]">Know More</span><span> <FaArrowCircleRight className="fas"/></span></Link>
            </div>

            <div className="form">
              <p>this is form area</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCase;
