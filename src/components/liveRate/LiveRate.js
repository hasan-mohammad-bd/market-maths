import React from "react";
import "../../style/LiveRate.css";
import Line from "../line/Line";

const LiveRate = () => {
  return (
    <>
      <div className="cover-pic2">
        <div className="black-transparent flex">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text">
              <h2 className="text-[38px] font-semibold text-white">
                Forex <span className="text-[#DAA106]">Live Rate</span>
              </h2>
              <Line />
              <p className="fond-semibold text-[18px] text-white my-5">
                You can relay on our amazing features list and also our customer
                <br /> services will be great experience for you without doubt
                and in <br /> no-time
              </p>
            </div>
            <div className="live-currency-rate">
                <p className="text-white">Live currency rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveRate;
