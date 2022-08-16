import React from "react";
import "../../style/ShowCaae.css";

const ShowCase = () => {
  return (
    <>
      <div className="cover-pic bg-black">
        <div className="black-transparent mx-auto flex justify-center items-center">
          <div className="container mx-auto flex justify-between items-center my-auto ">
            <div className="text  text-white">
              <h1 className="text-[52px] font-extrabold">
                Want to grow <br />
                your Investments <br />
                with us?
              </h1>
              <p className="my-6 text-[18px]">With 10+ years of experience in the industry, we proved that the <br /> 
              combination of strategic thinking and expertise create a fascinating <br /> experience</p>
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
