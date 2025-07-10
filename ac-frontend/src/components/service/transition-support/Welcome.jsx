import React from "react";

const Welcome = () => {
  return (
    <div className="relative bg-[linen] text-black py-24 px-4 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl mb-4">WELCOME</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
          Every Mile of <span className="text-[#a87c47]">Your Journey</span>
        </h1>
        <p className="text-base sm:text-lg font-sm text-gray-600 px-4">
          We enjoy going the extra mile to ensure YOUR New Chapter is smooth and
          confident. Our Regional Transition Support Advisor is determined to
          provide you the assistance you require from the moment you touch down
          onto a New World - from accommodation, jobs, communities and lifestyle
        </p>
      </div>
    </div>
  );
};

export default Welcome;
