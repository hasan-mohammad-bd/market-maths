import React from "react";
import "../../style/LiveRate.css";
import Line from "../line/Line";

const LiveRate = () => {
  return (
    <>
      <div className="cover-pic2 ">
        <div className="black-transparent py-0 md:py-24 px-3 md:px-0 flex">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text my-10 md:my-0">
              <h2 className="text-[38px] font-semibold text-white">
                Forex <span className="text-[#DAA106]">Live Rate</span>
              </h2>
              <Line />
              <p className="fond-semibold text-[18px] text-white my-5 max-w-[500px]">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt
                and in no-time
              </p>
            </div>
            <div className="live-currency-rate h-[380px] my-10 md:my-0 md:w-[480px] w-100">
            <iframe className="" height="100%" width="100%" src="https://www.forextime.com/widgets/live-rates" title="description"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveRate;
