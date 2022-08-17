import React from 'react';
import Contract from './Contract';
import LogoSection from './LogoSection';
import PopularBlog from './PopularBlog';
import PopularCategory from './PopularCategory';


const Footer = () => {
    return (
        <>
            <div className="footer py-16 flex items-center">
                <div className="container mx-auto  grid grid-cols-1 md:grid-cols-4 md:gap-[70px]">
                    <LogoSection/>
                    <PopularCategory/>
                    <PopularBlog/>
                    <Contract/>
                </div>

            </div>
        </>
    );
};

export default Footer;