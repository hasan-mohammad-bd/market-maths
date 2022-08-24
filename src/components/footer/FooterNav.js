import React from "react";
import { Link } from "react-router-dom";

const FooterNav = () => {
  return (
    <>
      <div className="border-t-[1px]">
        <div className="footer-nav container mx-auto py-5 flex justify-between flex-col md:flex-row items-center">
          <div className="copy-right-text text-gray-600 text-[14px]">
            <p>&copy; Market Maths. All Right Reserved</p>
          </div>
          <div className="text-center md:text-start mt-4 md:mt-0 uppercase text-[16px] font-semibold text-[#092744]">
            <Link className="ml-10" to='/home'>Home</Link>
            <Link className="ml-10" to='/about'>About</Link>
            <Link className="ml-10" to='/'>Terms & condition</Link>
            <Link className="ml-10" to='/'>Privacy Policy</Link>
            <Link className="ml-10" to='/contact'>contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNav;
