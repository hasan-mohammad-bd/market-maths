import React from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import Line from "../line/Line";

const Pricing = () => {
  return (
    <>
      <div className="pricing mx-auto text-center py-16">
        <div className="text">
          <h2 className="text-[38px] font-semibold">
            Simple <span className="text-[#DAA106]">Pricing Plan</span>
          </h2>
          <div className="flex justify-center">
            <Line className="mb-3" />
          </div>
          <p className="mb-10 font-semibold text-[18px]">
            We offer 100% satisfaction and Money back Guarantee
          </p>
        </div>
        <div className="card">
          <div className="single-card2">
            <h3 className="font-extrabold text-[#444444] text-[20px]">Basic</h3>
            <div className="flex justify-center">
              <ExtraSmallLine className="mb-3" />
              <h3>
                <span className="text-[25px] text-[#092744] font-bold mr-[2px] -translate-y-8">
                  $
                </span>
                <span className="uppercase text-[42px] font-bold text-[#DAA106]">
                  Free
                </span>
                <span>
                  <small> /7 days</small>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
