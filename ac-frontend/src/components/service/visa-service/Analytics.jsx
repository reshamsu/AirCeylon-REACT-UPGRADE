import React from "react";
import { Container } from "@mui/material";
import { LuPercent } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { FaGlobeEurope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Analytics = () => {
  return (
    <div className="text-white px-4 py-20 bg-black/90">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[#c89238] font-bold text-xl">OUR EXPERTISE</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-4 pb-6">
          Our Visa Expertise
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 m-6">
          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-evenly">
            <LuPercent className="text-6xl text-[#a87c47]" />
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-[#a87c47]">100%</h1>
              <h2 className="text-xl font-semibold mt-5">Approval Rate</h2>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-evenly">
            <ImStatsBars className="text-6xl text-[#a87c47]" />
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-[#a87c47]">200+</h1>
              <h2 className="text-xl font-semibold mt-5">Applications</h2>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-evenly">
            <FaGlobeEurope className="text-6xl text-[#a87c47]" />
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-[#a87c47]">30+</h1>
              <h2 className="text-xl font-semibold mt-5">Countries</h2>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-evenly">
            <FaMapLocationDot className="text-6xl text-[#a87c47]" />
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-[#a87c47]">5+</h1>
              <h2 className="text-xl font-semibold mt-5">Regions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
