import React from 'react';

import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import "../../style/BlogPage.css";
import blog6 from "../../image/blog-pic-6.jpg";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";
import { FaComment } from "@react-icons/all-files/fa/FaComment";
import { NavLink } from 'react-router-dom';
import moment from "moment";

const SingleBlog = ({singleBlog}) => {
  console.log(singleBlog);
  const {createdAt,description,image,title,user_id, views, _id}= singleBlog;
    return (
        <>
                      <div className="single-blog-page lg:my-8">
            <div
              style={{
                background: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-100 h-[300px] md:h-[400px]"
            ></div>
            <h3 className="text-gray-700 my-6 font-semibold text-[28px]">
              {title}
            </h3>
            <div className="date text-gray-500 text-[14px]">
              <p>
                Posted on <span>{moment(createdAt).format("MMMM Do YYYY")}</span>
                <span className="ml-3 text-[#DAA106]">/FOREX</span>
              </p>
            </div>
            <p className="my-4">
              {description.slice(0,700)}...
            </p>
            <NavLink
              className="bg-white border border-[orange] text-[orange] px-[15px] py-[5px] justify-around flex max-w-[150px] items-center read-btn"
              to="/blog-details"
            >
              Read More
              <span className="">
                <AiOutlineArrowRight />
              </span>
            </NavLink>
            <div className="border-b-[1px] mt-4 border-gray-300"></div>
            <div className="more-text flex justify-between items-center">
              <div className="author text-gray-500 flex items-center">
              <p className="my-2  text-[14px]">Posted by Nima Ahmed</p> <span className="mx-4">|</span> <FaComment className="text-gray-300"/><span className="mx-2 text-[14px] text-black font-semibold">3</span>
              </div>
              <div className="social">

            <div className=" my-4 text-white flex items-center text-[16px]">
            <h3 className="my-3 font-semibold text-[14px] text-gray-600 mr-3">Share With
            </h3>
              <a className="logo-round logo-ro bg-gray-600 p-2 mx-2" href="">
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

export default SingleBlog;