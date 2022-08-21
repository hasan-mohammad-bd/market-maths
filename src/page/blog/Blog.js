import React from "react";
import { NavLink } from "react-router-dom";
import cover from "../../image/blogs-page-cover.jpg";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import ExtraSmallLine from "../../components/line/ExtraSmallLine";

const Blog = () => {
  return (
    <>
      <div
        style={{
          background: `url(${cover})`,
          backgroundSize: "cover",
          backgroundPosition: "100%",
        }}
        className="cover h-[200px]"
      >
        <div className="black-transparent flex items-center">
          <div className="container mx-auto">
            <div className="text md:ml-16">
              <h3 className="mb-3 text-[38px] font-semibold text-white">
                Our Blogs
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
          to="/blog"
        >
          Our Blogs
        </NavLink>
      </div>
      <div className="container mx-auto flex items-center">
        <div className="categories w-[300px]">
            <h3 className="my-3 font-semibold text-[20px] text-[#092744]">Blog Categories</h3>
            <ExtraSmallLine/>
            <ul>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Digital Trading</p> <p className="text-gray-500">(3)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Forex</p> <p className="text-gray-500">(4)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Stock Market</p> <p className="text-gray-500">(5)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">International</p> <p className="text-gray-500">(3)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Market</p> <p className="text-gray-500">(10)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Currency Exchange</p> <p className="text-gray-500">(3)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Digital Trading</p> <p className="text-gray-500">(5)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Trading</p> <p className="text-gray-500">(3)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Freelance</p> <p className="text-gray-500">(6)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">Analysis</p> <p className="text-gray-500">(1)</p></li>
                <li className="flex items-center justify-between py-3 border-b-[1px]"><p className="text-gray-600">World Trade</p> <p className="text-gray-500">(9)</p></li>
            </ul>
            <div className="border-b-[1px] mt-8 border-gray-300"></div>

        </div>
        <div className="blogs"></div>

      </div>
    </>
  );
};

export default Blog;
