import React from "react";
import hero from "../../assets/check.jpg";

const Hero = () => {
  return (
    <div className="relative w-full text-white bg-gray-200">
      <div className="absolute inset-0">
        <img src={hero} className="w-full h-full object-cover brightness-40" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-[50vh] md:h-[90vh] px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Beyond Traveling
        </h1>
      </div>
    </div>
  );
};

export default Hero;
