import React from "react";
import working from "../../image/phone-pc.jpg";
import '../../style/LatestBlog.css';
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { NavLink } from "react-router-dom";

const Blog2 = () => {
  return (
    <>
      <div className="single-blog">
        <div
          style={{ background: `url(${working})`, backgroundSize: "cover" }}
          className="img-holder-blog min-w-[350px] min-h-[250px]"
        ></div>
        <div className="date p-4 flex items-center text-gray-500 text-[16px]">
          <BiCalendar className="  mr-2" /> <p>21 March , 2022</p>
          <p className="ml-3 text-[#DAA106]">/FoDEX</p>
        </div>
        <div className="text px-4 text-left">
          <h3 className="text-[18px] font-semibold text-[#092744] mb-5">
            Why Trading is essentials - Why it
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus ad
            porro facilis, necessitatibus totam explicabo error ea, qui ipsum
            unde aliquam minima nesciunt optio. Expedita error magni dolore
            autem et corrupti exercitationem dolores harum, pariatur nemo
            laboriosam minima reprehenderit quos.
          </p>
        </div>
        <NavLink
          className="bg-[#092744] ml-4 mt-8 text-white px-[15px] py-[5px] flex flex-grow-0 max-w-[160px] items-center read-btn"
          to="/"
        >

          Read more
          <span className="ml-4">
            <AiOutlineArrowRight />
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default Blog2;
