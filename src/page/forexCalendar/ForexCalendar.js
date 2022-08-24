import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import aboutCover from "../../image/forex-calendar.jpg";
import Line from "../../components/line/Line";
import calendar from "../../image/Forex-calendar.png";

const ForexCalendar = () => {
  return (
    <>
      <div
        style={{
          background: `url(${aboutCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="cover h-[200px]"
      >
        <div className="black-transparent flex items-center">
          <div className="container mx-auto">
            <div className="text md:ml-16">
              <h3 className="mb-3 text-[38px] font-semibold text-white">
                Forex Calendar
              </h3>
              <p className="text-white">
                Our goal here is to provide low prices on accurate signal <br />
                and excellent service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-about py-4 flex items-center container mx-auto border-b-[1px]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "sactiveRoute" : "sinactiveRoute"
          }
          to="/"
        >
          Home
        </NavLink>
        <IoIosArrowForward className="text-[#DAA106] font-semibold" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "sactiveRoute" : "sinactiveRoute"
          }
          to="/calendar"
        >
          Forex Calendar
        </NavLink>
      </div>
      <div className="mx-auto text-center py-8 container mx-auto">
        <div className="text text-gray-700">
          <h2 className="text-[38px] font-semibold">
            <span className="text-[#DAA106]">Forex </span>Calendar
          </h2>
          <div className="flex justify-center">
            <Line />
          </div>
          <p className="font-semibold text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi
            <br /> rerum at quam, beatae reprehenderit perferendis sapiente vel
            corrupti atque.
          </p>
        </div>
      </div>
      <div className="chart my-12">
        {/* demo */}
        <img className="w-100 mx-auto" src={calendar} alt="" />
      </div>
    </>
  );
};

export default ForexCalendar;
