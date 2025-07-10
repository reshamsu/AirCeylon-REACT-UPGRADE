import React from "react";
import SubNavbar from "../../SubNavbar";
import hero from "../../../assets/visa-section.avif";

const Hero = () => {
  return (
    <>
      <SubNavbar />

      <div className="relative w-full text-white">
        <div className="absolute inset-0">
          <img
            src={hero}
            className="w-full h-full object-cover brightness-30"
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-[50vh] md:h-[88vh] px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            VISA Service
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
