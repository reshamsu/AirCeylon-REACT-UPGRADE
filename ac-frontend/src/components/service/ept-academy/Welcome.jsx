import React from "react";
import { Container } from "@mui/material";

const EPTWelcome = () => {
  return (
    <div className="relative bg-[linen] text-black py-24 px-4 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl mb-4">ACADEMY</p>
        <div className="p-2">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold pb-6 mx-16 sm:mx-8 md:mx-10">
            Welcome to Air Ceylon's{" "}
            <span className="text-[#a87c47]">EPT Academy</span>
          </h1>
          <p className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
            The key to unlock your path via IELTS starts here.
          </p>
        </div>

        <p className="text-base sm:text-lg font-medium text-gray-600 px-4">
          Achieve your IELTS goals with personalized, 1-to-1 virtual classes for
          Academic and General candidates. Our courses are tailored to your
          target score, offering individual attention, regular mock tests, and
          full access to ebooks, videos, and practice materials. Select the
          course that fits your needs and begin your path to success today.
        </p>
      </div>
    </div>
  );
};

export default EPTWelcome;
