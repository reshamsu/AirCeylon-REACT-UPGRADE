import React from "react";
import welcome from "../../assets/Watermark.png";

const Welcome = () => {
  return (
    <div className="relative bg-[linen] text-black py-24 px-4 overflow-hidden">
      {/* Watermark background image */}
      <img
        src={welcome}
        alt="Watermark"
        className="absolute opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] max-w-[500px] pointer-events-none select-none"
      />

      {/* Main content */}
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl mb-2">HELLO</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-[#a87c47]">Air Ceylon</span>
        </h1>
        <p className="md:text-2xl text-xl font-semibold text-gray-900 mb-6">
          Your journey begins now!
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-600 px-4">
          Explore a world of seamless travel, exceptional service, and boundless
          possibilities. Let every scroll guide you to the destination of your dreams.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
