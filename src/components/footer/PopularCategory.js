import React, { useContext } from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { DataContext } from "../../App";



const PopularCategory = () => {
  const { home3 } = useContext(DataContext);

  return (
    <>
      <div className="popular-category md:ml-12 mb-8 md:mb-0">
        <h3 className="text-[20px] font-bold text-[#092744] ">
          Popular Category
        </h3>
        <ExtraSmallLine className="mb-3" />
        <div className="list text-[14px]">
          {
            home3?.popular_category?.map(c => 
              <div className="flex items-center my-2">
              <IoIosArrowForward key={c.name} className="text-[#DAA106] mr-2 font-semibold" />
              <p className="text-gray-600">{c.name}</p>
            </div>
              
              )
          }

{/*           <div className="flex items-center my-2">
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PopularCategory;
