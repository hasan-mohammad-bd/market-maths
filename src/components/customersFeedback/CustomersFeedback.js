import React from "react";
import Line from "../line/Line";
import "../../style/CustomerFeedback.css";
import { FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import { FaQuoteRight } from "@react-icons/all-files/fa/FaQuoteRight";
import avatar1 from '../../image/avatar1.jpg';
import Feedback1 from "./Feedback1";
import Feedback2 from "./Feedback2";
import Feedback3 from "./Feedback3";

const CustomersFeedback = () => {
  return (
    <>
      <div className="cover-pic4">
        <div className="grow-with-us mx-auto text-center py-16 text-white">
          <div className="text">
            <h2 className="text-[38px] font-semibold">
              Checkout What{" "}
              <span className="text-[#DAA106]">Our Customers</span> Are Saying
            </h2>
            <div className="flex justify-center">
              <Line className="mb-3" />
            </div>
            <p className="mb-20 font-semibold text-[18px]">
              You can relay on our amazing features list and also our customer
              services will be <br /> great experience for you without doubt and
              in no-time
            </p>
          </div>
          <div className="feedback grid grid-cols-1 md:grid-cols-3 gap-10 text-start container mx-auto">
            <Feedback1/>
            <Feedback2/>
            <Feedback3/>

          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersFeedback;
