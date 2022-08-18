import React from "react";
import Line from "../../components/line/Line";
import SingleMember from "./SingleMember";
import SingleMember2 from "./SingleMember2";
import SingleMember3 from "./SingleMember3";
import SingleMember4 from "./SingleMember4";


const ManagementTeam = () => {
  return (
    <>
      <div className="management-team mx-auto text-center py-16 container mx-auto">
        <div className="text">
          <h2 className="text-[38px] font-semibold">
            Best <span className="text-[#DAA106]">Management Team</span>
          </h2>
          <div className="flex justify-center">
            <Line className="mb-3" />
          </div>
          <p className="mb-10 font-semibold text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Voluptatibus pariatur ipsum assumenda, tempora facere non quo
            explicabo officia optio ut!
          </p>
        </div>
        <div className="all-team-members grid grid-cols-1 md:grid-cols-4 gap-5">
            <SingleMember/>
            <SingleMember2/>
            <SingleMember3/>
            <SingleMember4/>
        </div>
      </div>
    </>
  );
};

export default ManagementTeam;
