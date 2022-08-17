import React from "react";
import ExtraSmallLine from "../line/ExtraSmallLine";
import Line from "../line/Line";
import { GiCheckMark } from "@react-icons/all-files/gi/GiCheckMark";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import '../../style/Pricing.css';
import { NavLink } from "react-router-dom";


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
        <div className="card  grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="single-card2 p-10">
            <h3 className="font-extrabold text-[#444444] text-[20px]">Basic</h3>
            <div className="flex justify-center">
              <ExtraSmallLine className="mb-3" />

            </div>
            <h3 className="mb-5">
                <span className="text-[25px] text-[#092744] font-bold mr-[2px] -translate-y-3 inline-block">
                  $
                </span>
                <span className="uppercase text-[42px] font-bold text-[#DAA106]">
                  Free
                </span>
                <span>
                  <small> /7 days</small>
                </span>
              </h3>
              <div className="features font-semibold text-gray-700 mb-10">
                <div className="flex justify-between items-center mb-3">
                  <p>Dashboard Singnal</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Email Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>SMS Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Telegram Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Phone Consulting</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Support</p> <p className="text-gray-500">None</p>
                </div>
              </div>
              <NavLink className="sub-btn text-white bg-[#092744] py-[10px] px-[20px]" to="/">Subscribe Now</NavLink>
          </div>
          <div className="single-card2 p-10">
            <h3 className="font-extrabold text-[#444444] text-[20px]">Economy</h3>
            <div className="flex justify-center">
              <ExtraSmallLine className="mb-3" />

            </div>
            <h3 className="mb-5">
                <span className="text-[25px] text-[#092744] font-bold mr-[2px] -translate-y-3 inline-block">
                  $
                </span>
                <span className="uppercase text-[42px] font-bold text-[#DAA106]">
                  149.00
                </span>
                <span>
                  <small> /60 days</small>
                </span>
              </h3>
              <div className="features font-semibold text-gray-700 mb-10">
                <div className="flex justify-between items-center mb-3">
                  <p>Dashboard Singnal</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Email Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>SMS Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Telegram Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Phone Consulting</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Support</p> <p className="text-gray-500">Basic</p>
                </div>
              </div>
              <NavLink className="sub-btn text-white bg-[#092744] py-[10px] px-[20px]" to="/">Subscribe Now</NavLink>
          </div>
          <div className="single-card2 p-10">
            <h3 className="font-extrabold text-[#444444] text-[20px]">Gold</h3>
            <div className="flex justify-center">
              <ExtraSmallLine className="mb-3" />

            </div>
            <h3 className="mb-5">
                <span className="text-[25px] text-[#092744] font-bold mr-[2px] -translate-y-3 inline-block">
                  $
                </span>
                <span className="uppercase text-[42px] font-bold text-[#DAA106]">
                 249.00
                </span>
                <span>
                  <small> /120 days</small>
                </span>
              </h3>
              <div className="features font-semibold text-gray-700 mb-10">
                <div className="flex justify-between items-center mb-3">
                  <p>Dashboard Singnal</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Email Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>SMS Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Telegram Alert</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Phone Consulting</p> <AiOutlineClose className="text-gray-500 font-bold"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Support</p> <p className="text-gray-500">Standard</p>
                </div>
              </div>
              <NavLink className="sub-btn text-white bg-[#092744] py-[10px] px-[20px]" to="/">Subscribe Now</NavLink>
          </div>
          <div className="single-card2 p-10">
            <h3 className="font-extrabold text-[#444444] text-[20px]">Diamond</h3>
            <div className="flex justify-center">
              <ExtraSmallLine className="mb-3" />

            </div>
            <h3 className="mb-5">
                <span className="text-[25px] text-[#092744] font-bold mr-[2px] -translate-y-3 inline-block">
                  $
                </span>
                <span className="uppercase text-[42px] font-bold text-[#DAA106]">
                  349.00
                </span>
                <span>
                  <small> /356 days</small>
                </span>
              </h3>
              <div className="features font-semibold text-gray-700 mb-10">
                <div className="flex justify-between items-center mb-3">
                  <p>Dashboard Singnal</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Email Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>SMS Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Telegram Alert</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Phone Consulting</p> <GiCheckMark className="text-green-500"/>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <p>Support</p> <p className="text-gray-500">24/7</p>
                </div>
              </div>
              <NavLink className="sub-btn text-white bg-[#092744] py-[10px] px-[20px]" to="/">Subscribe Now</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
