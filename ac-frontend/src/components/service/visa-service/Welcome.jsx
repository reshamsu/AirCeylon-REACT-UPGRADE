import React from "react";

const Welcome = () => {
  return (
    <div className="relative bg-[linen] text-black py-24 px-4 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl">DISCOVER</p>
        <div className="p-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6">
            Ready To
            <span className="text-[#a87c47] ml-3">Travel The World?</span>
          </h1>
          <p className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
            The key to unlock your next journey starts here.
          </p>
        </div>

        <p className="text-base sm:text-lg font-medium text-gray-600 px-4">
          Our VISA Service Experts are dedicated to make your dreams come true.
          Apply with Air Ceylon International and experience the ease in
          exploring the world!
        </p>
      </div>
    </div>
  );
};

export default Welcome;
