import React from "react";
import { Container } from "@mui/material";
import IRCCNews from "../IRCCNews";

const News = () => {
  return (
    <div className="relative bg-[linen] text-gray-800 py-24 px-4 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl mb-4">NEWS</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
          Announcements
        </h1>

        <IRCCNews className="md:text-xl text-xl font-semibold  mb-6" />

        {/* <ul>
            <li className="text-base sm:text-lg font-sm text-gray-600 px-4">IRCC Canada</li>
            <li className="text-base sm:text-lg font-sm text-gray-600 px-4">Travel Advisory</li>
            <li className="text-base sm:text-lg font-sm text-gray-600 px-4">Immigration Updates</li>
          </ul> */}
      </div>
    </div>
  );
};

export default News;
