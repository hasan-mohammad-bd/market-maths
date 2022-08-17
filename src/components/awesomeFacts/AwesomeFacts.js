import React from 'react';
import { Link } from 'react-router-dom';
import rocket from '../../image/rocket.png';
import '../../style/AwesomeFacts.css';
import { FaArrowCircleRight } from "@react-icons/all-files/fa/FaArrowCircleRight";
import signal from '../../image/icon/signal.png';
import comment from '../../image/icon/comments.png';
import borwser from '../../image/icon/browser.png';
import avatar from '../../image/icon/avatar.png';

const AwesomeFacts = () => {
    return (
        <>
            <div className="cover-pic3 flex items-center md:py-12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="rocket md:ml-16">
                        <div className="image-holder">
                            <img src={rocket} alt="" />
                        </div>
                        <Link className="btn text-white mt-5" to="/"><span className="button-text ml-8 font-semibold text-[16px]">Register Now</span><span> <FaArrowCircleRight className="fas"/></span></Link>
                    </div>
                    <div className="text text-center md:text-right text-white mt-16">
                        <h3 className='uppercase font-bold text-[25px]'>The market maths</h3>
                        <h3 className='uppercase text-[#FEB20D] font-bold text-[48px]'>Awesome Facts</h3>
                        <h3 className='font-semibold text-[18px]'>You can relay on our amazing features list and also our <br /> customer services will be great experience for you <br /> without doubt and in no-time</h3>
                        <div className="achievement grid grid-cols-2 md:grid-cols-4 mt-8">
                            <div className="signal ml-16">
                                <div className="flex w-[120px] justify-between items-center">
                                <h3 className='uppercase text-[#FEB20D] font-bold text-[45px]'>16</h3>
                                    <img className='w-[55px] h-[55px]' src={signal} alt="" />
                                </div>
                                <h3 className='uppercase font-semibold text-left text-[18px]'>Total Signal</h3>
                            </div>
                            <div className="signal ml-16">
                                <div className="flex w-[120px] justify-between items-center">
                                <h3 className='uppercase text-[#FEB20D] font-bold text-[45px]'>11</h3>
                                    <img className='w-[55px] h-[55px]' src={comment} alt="" />
                                </div>
                                <h3 className='uppercase font-semibold text-left text-[18px]'>Blog Category</h3>
                            </div>
                            <div className="signal ml-16">
                                <div className="flex w-[120px] justify-between items-center">
                                <h3 className='uppercase text-[#FEB20D] font-bold text-[45px]'>16</h3>
                                    <img className='w-[55px] h-[55px]' src={borwser} alt="" />
                                </div>
                                <h3 className='uppercase font-semibold text-left text-[18px]'>Total blog</h3>
                            </div>
                            <div className="signal ml-16">
                                <div className="flex w-[120px] justify-between items-center">
                                <h3 className='uppercase text-[#FEB20D] font-bold text-[45px]'>116</h3>
                                    <img className='w-[55px] h-[55px]' src={avatar} alt="" />
                                </div>
                                <h3 className='uppercase font-semibold text-left text-[18px]'>happy user</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwesomeFacts;