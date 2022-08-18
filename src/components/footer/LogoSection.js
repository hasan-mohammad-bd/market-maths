import React from "react";
import logo from "../../image/logo-white-removebg-preview.png";

const LogoSection = () => {
  return (
    <>
      <div className="logo mb-8 md:mb-0">
        <img className="w-100 max-w-[300px]" src={logo} alt="" />
        <p className="mt-4 text-gray-600 font-semibold text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          asperiores voluptas tempore, non dolores ipsam iusto dolorum hic,
          beatae, quod ad fugiat fugit. Ipsa quibusdam, dolorum inventore
          consectetur odit porro?
        </p>
      </div>
    </>
  );
};

export default LogoSection;
