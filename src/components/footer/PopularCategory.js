import React from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";

const PopularCategory = () => {
  return (
    <>
      <div className="popular-category md:ml-12 mb-8 md:mb-0">
        <h3 className="text-[20px] font-bold text-[#092744] ">
          Popular Category
        </h3>
        <ExtraSmallLine className="mb-3" />
        <div className="list text-[14px]">
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Digital Trading</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Forex</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Stock Market</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">International</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Market</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Currency Exchange</p>
          </div>
          <div className="flex items-center my-2">
            <IoIosArrowForward className="text-[#DAA106] mr-2 font-semibold" />
            <p className="text-gray-600">Trading</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
