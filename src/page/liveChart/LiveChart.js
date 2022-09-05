import React from 'react';
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import aboutCover from "../../image/forex-chart3.jpg";
import Line from '../../components/line/Line';
import FX_chart from '../../image/FX_chart_main.png'
import ForexLiveChart from './ForexLiveChart';
import TechnicalAnalisisChart from './TechnicalAnalisisChart';
import MiniChartUSDEU from './MiniChartUSDEU';

const LiveChart = () => {
    return (
        <>  
                  <div
        style={{
          background: `url(${aboutCover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="cover h-[200px]"
      >
        <div className="black-transparent flex items-center">
          <div className="container mx-auto">
            <div className="text md:ml-16">
              <h3 className="mb-3 text-[38px] font-semibold text-white">
                FX Live Charts
              </h3>
              <p className="text-white">
                Our goal here is to provide low prices on accurate signal <br />
                and excellent service.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-about py-4 flex items-center container mx-auto border-b-[1px]">
        <NavLink
          className={({ isActive }) =>
            isActive ? "sactiveRoute" : "sinactiveRoute"
          }
          to="/"
        >
          Home
        </NavLink>
        <IoIosArrowForward className="text-[#DAA106] font-semibold" />
        <NavLink
          className={({ isActive }) =>
            isActive ? "sactiveRoute" : "sinactiveRoute"
          }
          to="/live"
        >
          FX Live Charts
        </NavLink>
      </div>
      <div className="text-center py-8">
        <div className="text text-gray-700">
          <h2 className="text-[38px] font-semibold">
            <span className="text-[#DAA106]">FX</span> Live Charts 
          </h2>
          <div className="flex justify-center">
            <Line/>
          </div>
          <p className="font-semibold text-[18px] max-w-[600px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi  rerum at quam, beatae reprehenderit perferendis sapiente vel corrupti atque.
          </p>
        </div>
        </div>
           <div className="chart container mx-auto">
            {/* demo */}
            <div className="flex flex-col lg:flex-row">
              <div className='w-100 flex-1 shrink-0'><ForexLiveChart/></div>
              <div className='block'><MiniChartUSDEU/><TechnicalAnalisisChart/></div>
            </div>

            </div> 
        </>
    );
};

export default LiveChart;