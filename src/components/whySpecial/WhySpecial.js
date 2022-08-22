import React from "react";
import '../../style/WhySpecial.css';
import Line from "../line/Line";
import antiner from "../../image/icon/antiner.png";
import paper from "../../image/icon/paper.png";
import maxmin from "../../image/icon/max-min.png";
import man from "../../image/icon/man.png";
import wallet from "../../image/icon/wallet.png";
import support from "../../image/icon/support.png";
import SmallLine from "../line/SmallLine";

const WhySpecial = () => {
  return (
    <>
      <div className="bg-[#F3F3F5]">
        <div className="container mx-auto text-center py-16">
          <h2 className="text-[38px] font-semibold">
            Why We Are <span className="text-[#DAA106]">Special</span>
          </h2>
          <div className="flex justify-center">
            <Line className="mb-3" />
          </div>
          <p className="mb-10 font-semibold text-[18px]">
            You can relay on our amazing features list and also our customer
            services <br /> will be great experience for you without doubt and
            in no-time
          </p>

          <div className="special-card grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={antiner} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                Single Provider
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                90% is our trading signal's success rate, so you can earn
                and grow with us. our signals will be sent to your
                Telegram, Email, your account in our website and very
                soon through sms and mobile app
              </p>
            </div>
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={paper} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                MQL copy trade
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                Join our MQL as follower, then Seat, relax and just withdraw the trading profit any time you want. our trades will automatically will e copied to your real account through MQL
              </p>
            </div>
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={maxmin} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                PAMM Account
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                Anyone can join our PAMM pool account, in chosen/ suggested brokers. Easily find out the list of our brokers and join through our link, in Broker page (main menu). its based on profit sharing. 
              </p>
            </div>
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={man} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                experienced trading and <br /> analysis team
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                Provide team is contains of most experienced experts in Forex Trading and analyzing. 
              </p>
            </div>
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={wallet} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                Affordable price and high quantity services
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                We love our clients and proud to our high level service, that anyone can afford and be successful in forex Trading
              </p>
            </div>
            <div className="single-card text-center bg-white p-8">
              <img className="max-w-[80px] mx-auto" src={support} alt="" />
              <h3 className="uppercase card-header font-semibold text-[25px] text-[#092744]">
                Friendly and premium customer support 
              </h3>
              <div className="flex justify-center">
                <SmallLine />
              </div>
              <p className="text-black card-text">
                Provide Premium fast client's support services. also monitoring all support processing to make sure, will remain perfect
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySpecial;
