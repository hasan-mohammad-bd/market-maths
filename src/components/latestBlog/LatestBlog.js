import React from "react";
import Line from "../line/Line";
import '../../style/LatestBlog.css';
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";

const LatestBlog = () => {
  return (
    <>
      <div className="grow-with-us mx-auto text-center py-16 container px-3 md:px-0">
        <div className="text">
          <h2 className="text-[38px] font-semibold">
            Latest From <span className="text-[#DAA106]">Blog</span>
          </h2>
          <div className="flex justify-center">
            <Line className="mb-3" />
          </div>
          <p className="mb-10 font-semibold text-[18px] max-w-[500px] mx-auto">
            You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time
          </p>
        </div>
        <div className="latest-blog grid grid-cols-1 md:grid-cols-3 gap-8">
            <Blog1/>
            <Blog2/>
            <Blog3/>

        </div>
      </div>
    </>
  );
};

export default LatestBlog;
