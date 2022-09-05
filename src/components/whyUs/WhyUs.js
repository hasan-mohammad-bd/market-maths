import React from 'react';
import pc from '../../image/bg-laptop.png'
import Line from '../line/Line';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";

const WhyUs = () => {
    return (
        <>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-3 md:px-0">
                <div className="img-holder max-w-[600px] my-10"><img src={pc} alt="" /></div>
                <div className="text text-[38px]">
                    <h2>Why We <span className='text-[#DAA106]'>Extra Ordinary</span></h2>
                    <Line/>
                    <p className="my-6 text-[16px] text-black max-w-[600px]">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no time and with great quality for design. You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality for design relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time and with great quality for design. relay on our amazing features list and also our customer services features list and also our customer services</p>
                    <Link className="btn-big text-white" to="/"><span className="button-text ml-8 font-semibold text-[16px]">Register Now</span><span> <FaArrowCircleRight className="fas"/></span></Link>
                </div>
            </div>
        </>
    );
};

export default WhyUs;