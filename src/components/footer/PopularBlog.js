import React from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

const PopularBlog = () => {
  return (
    <>
      <div className="popular-category mb-8 md:mb-0">
        <h3 className="text-[20px] font-bold text-[#092744] ">
          Popular Blog
        </h3>
        <ExtraSmallLine className="mb-3" />
        <div className="list text-[14px]">
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Trading Psychology and Money ..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Doing daily chores can h..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Sample Post with Featured..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Macroeconomics and the..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">The greatest trading tool ev..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Official Forex Broker of the..</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">But I must explain to mis..</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularBlog;
