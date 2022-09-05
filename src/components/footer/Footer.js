import React from "react";
import Contract from "./Contract";
import FooterNav from "./FooterNav";
import LogoSection from "./LogoSection";
import PopularBlog from "./PopularBlog";
import PopularCategory from "./PopularCategory";

const Footer = () => {
  return (
    <>
      <div className="footer-full px-3 md:px-0">
        <div className="footer pt-16 flex items-center">
          <div className="container mx-auto pb-16  grid grid-cols-1 md:grid-cols-4 md:gap-[70px]">
            <LogoSection />
            <PopularCategory />
            <PopularBlog />
            <Contract />
          </div>
        </div>
        <FooterNav />
      </div>
    </>
  );
};

export default Footer;
