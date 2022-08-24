import React from "react";
import { Link, NavLink } from "react-router-dom";
import cover from "../../image/blogs-page-cover.jpg";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import ExtraSmallLine from "../../components/line/ExtraSmallLine";
import { MdPlace } from "@react-icons/all-files/md/MdPlace";
import { MdCall } from "@react-icons/all-files/md/MdCall";
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Contact = () => {
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
                Contact Us
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
          to="/contact"
        >
          Contact Us
        </NavLink>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="contact-from">
          <h3 className="my-2 font-semibold text-[23px] text-[#092744]">
            Get in <span className="text-[#DAA106]">Touch</span>
          </h3>
          <ExtraSmallLine />
          <p className="text-gray-600 ">We are open 24/7 for your Answers</p>
          <form className="my-4" action="">
            <input
              placeholder="Name"
              className="block w-[300px] lg:w-[550px] h-[40px] p-2 mb-3 outline-none border"
              type="text"
              name=""
              id=""
            />
            <div className="">
              <input
                placeholder="Email"
                className=" w-[300px] lg:w-[270px] h-[40px] p-2 mb-3 outline-none border"
                type="email"
                name=""
                id=""
              />
              <input
                placeholder="Phone"
                className=" w-[300px] ml-[10px] lg:w-[270px] h-[40px] p-2 mb-3 outline-none border"
                type="text"
                name=""
                id=""
              />
            </div>
            <input
              placeholder="Subject"
              className="block w-[300px] lg:w-[550px] h-[40px] p-2 mb-3 outline-none border"
              type="text"
              name=""
              id=""
            />
            <textarea
              placeholder="Your Enquiry"
              className="block w-[300px] lg:w-[550px] h-[100px] p-2 outline-none border"
              name=""
              id=""
              cols=""
              rows=""
            ></textarea>
            <input
              className="text-white my-5 bg-[#092744] py-[7px] px-[40px] rounded-3xl"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="contact-info">
          <h3 className="my-2 font-semibold text-[23px] text-[#092744]">
            Contact <span className="text-[#DAA106]">Info</span>
          </h3>
          <ExtraSmallLine />
          <p className="py-5 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Placeat
            veniam quam beatae. Fugit deleniti ipsum facilis consectetur aperiam
            vel hic.
          </p>
          <div className="mb-4 flex items-center">
            <MdPlace className="text-[20px] text-[#DAA106] " />
            <p className="text-gray-600 ml-3">
              
              9255 Wintergreen Street, New York <br /> Dracut, MA 01826, USA
            </p>
          </div>

          <div className="mb-4 flex items-center">
            <AiOutlineMail className="text-[20px] text-[#DAA106] " />
            <p className="text-gray-600 ml-3">info@marketmaths.com</p>
          </div>

          <div className="mb-4 flex items-center">
            <MdCall className="text-[20px] text-[#DAA106] " />
            <p className="text-gray-600 ml-3">(+123) 123 456 7890</p>
          </div>
          <div className="contact-via-social mt-16">
          <h3 className="my-3 text-[16px] text-gray-600 mr-3">Contact Via Social Media
            </h3>
          <div className=" my-4 text-white flex items-center text-[16px]">

              <a className="logo-round logo-ro bg-gray-600 p-2 mr-2" href="">
                <GrFacebookOption />
              </a>
              <a className="logo-round bg-gray-600 p-2 mx-2" href="">
                <AiOutlineTwitter />
              </a>
              <a className="logo-round bg-gray-600 p-2 mx-2" href="">
                <FaLinkedinIn />
              </a>
              <a className="logo-round bg-gray-600 p-2 mx-2" href="">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
