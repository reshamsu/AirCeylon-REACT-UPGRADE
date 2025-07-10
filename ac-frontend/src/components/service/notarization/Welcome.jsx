import React from "react";

const Welcome = () => {
  return (
    <div className="relative bg-[linen] text-black py-24 px-4 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center z-10">
        <p className="text-[#a87c47] font-bold text-xl mb-4">Welcome</p>
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
          <span className="text-[#a87c47]">Notarization</span>
        </h1>
        <p className="text-base sm:text-lg font-sm text-gray-600 px-4">
          We understand the importance of verifying your documents before you
          embark onto a new opportunity in a new city.
        </p>
        <p className="text-base sm:text-lg font-sm text-gray-600 px-4">
          Be stress-free and confident with our well informed, speedy and
          reliable Notarization Service.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
