import React from "react";
import aboutCover from "../../image/forex-cheart.jpg";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import '../../style/AboutUsPage.css';
import Mission from "./Mission";
import Vision from "./Vision";
import ComesForm from "./ComesForm";
import ManagementTeam from "./ManagementTeam";

const AboutUs = () => {
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
                About Us
              </h3>
              <p className="text-white">
                Our goal here is to provide low prices on accurate signal <br />{" "}
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
          to="/about"
        >
          About Us
        </NavLink>
      </div>
      <div className="mx-auto text-center py-8 container mx-auto border-about">
        <div className="text text-gray-700">
          <h2 className="text-[38px] font-semibold">
            <span className="text-[#DAA106]">Who</span> We Are 
          </h2>
          <div className="flex justify-center">
          </div>
          <p className="font-semibold text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi <br /> rerum at quam, beatae reprehenderit perferendis sapiente vel corrupti atque.
          </p>
        </div>
        </div>
        <Mission/>
        <Vision/>
        <ComesForm/>
        <ManagementTeam/>
        
    </>
  );
};

export default AboutUs;
