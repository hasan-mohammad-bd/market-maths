import React from "react";
import { Link, NavLink } from "react-router-dom";
import cover from "../../image/blogs-page-cover.jpg";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import ExtraSmallLine from "../../components/line/ExtraSmallLine";
import blogPic1 from "../../image/blog-pic4.jpg";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import "../../style/BlogPage.css";
import SingleBlogDetails from "./SingleBlogDetails";

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
                Blog Details
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
          to="/blog-details"
        >
          Blog Details
        </NavLink>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="categories-recent-post lg:w-[320px]">
          <div className="categories">
            <h3 className="my-3 font-semibold text-[20px] text-[#092744]">
              Blog Categories
            </h3>
            <ExtraSmallLine />
            <ul>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Digital Trading</p></NavLink>
                <p className="text-gray-500">(3)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Forex</p></NavLink>
                <p className="text-gray-500">(3)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Stock Market</p></NavLink>
                <p className="text-gray-500">(8)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">International</p></NavLink>
                <p className="text-gray-500">(5)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Market</p></NavLink>
                <p className="text-gray-500">(4)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Currency Exchange</p></NavLink>
                <p className="text-gray-500">(2)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Trading</p></NavLink>
                <p className="text-gray-500">(3)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Freelance</p></NavLink>
                <p className="text-gray-500">(3)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Digital Trading</p></NavLink>
                <p className="text-gray-500">(4)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Local Market</p></NavLink>
                <p className="text-gray-500">(5)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">Analysis</p></NavLink>
                <p className="text-gray-500">(6)</p>
              </li>
              <li className="flex items-center justify-between py-3 border-b-[1px]">
                <NavLink to='/blog-details'><p className="text-gray-600">World Trade</p></NavLink>
                <p className="text-gray-500">(2)</p>
              </li>

            </ul>
          </div>
          <div className="border-b-[1px] mt-8 border-gray-300"></div>
          <div className="recent-posts text-start">
            <h3 className="my-3 font-semibold text-[20px] text-[#092744]">
              Recent Posts
            </h3>
            <ExtraSmallLine />
            <div className="mb-5"></div>

            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
            <div className="single-recent-post pb-5 flex">
              <div className="img w-[60px] ">
                <img className="rounded-[50%] border" src={blogPic1} alt="" />
              </div>
              <div className="text ml-3 text-gray-600 w-[250px]">
                <h3 className="text-[16px] font-semibold">
                  Trading Psychology & Money Management
                </h3>
                <p className="date">August 21, 2022</p>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="border-b-[1px] mt-8 border-gray-300"></div>
            <h3 className="my-3 font-semibold text-[20px] text-[#092744]">
              Follow Us
            </h3>
            <div className=" my-4 text-white flex items-center text-[25px]">
              <a className="logo-round logo-ro bg-gray-500 p-2 mx-2" href="">
                <GrFacebookOption />
              </a>
              <a className="logo-round bg-gray-500 p-2 mx-2" href="">
                <AiOutlineTwitter />
              </a>
              <a className="logo-round bg-gray-500 p-2 mx-2" href="">
                <FaLinkedinIn />
              </a>
              <a className="logo-round bg-gray-500 p-2 mx-2" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="border-b-[1px] mt-8 border-gray-300"></div>
          <div className="subscribe">
            <h3 className="my-3 font-semibold text-[20px] text-[#092744]">
              Subscribe Now
            </h3>
            <form className="flex items-center" action="">
              <input
                placeholder="Your Email"
                className="text-gray-500 text-[14px] blog-subscribe-input border outline-0 p-3 px-3 rounded-3xl w-[300px]"
                type="email"
                name=""
                id=""
              />
              <button
                className="ml-[-30px] text-blue-500 border border-blue-500 rounded-full"
                type="submit"
              >
                <IoIosArrowForward />
              </button>
            </form>
          </div>
        </div>
        <div className="blogs flex-1 lg:ml-16">
          <SingleBlogDetails />
        </div>
      </div>
    </>
  );
};

export default Blog;
