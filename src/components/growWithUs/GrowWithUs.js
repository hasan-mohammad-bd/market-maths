import React from "react";
import Line from "../line/Line";
import cheart from '../../image/cheart.png';

const GrowWithUs = () => {
  return (
    <>
      <div className="grow-with-us mx-auto text-center py-16">
        <div className="text">
          <h2 className="text-[38px] font-semibold">
            Grow <span className="text-[#DAA106]">With Us</span>
          </h2>
          <div className="flex justify-center">
            <Line className="mb-3" />
          </div>
          <p className="mb-10 font-semibold text-[18px]">
            Follow our trading signals and be winner of Forex trading. Its a perfect option for <br /> those who wants the earn massive income with monthly of 10%-20% profit from <br /> your trading account with very low risk.
          </p>
        </div>
        <div className="chart">
            <img className="mx-auto w-100" src={cheart} alt="" />
        </div>
      </div>
    </>
  );
};

export default GrowWithUs;
