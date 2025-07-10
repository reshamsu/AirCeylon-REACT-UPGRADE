import { Container } from "@mui/material";
import React from "react";
import hero from "../../../assets/ielts2.jpg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full text-white">
        <div className="absolute inset-0">
          <img
            src={hero}
            className="w-full h-full object-cover brightness-30"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] md:h-[90vh] px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            EPT Academy
          </h1>
          <p className="md:text-2xl text-xl font-semibold text-white my-4">
            English Proficiency Training <span>(EPT)</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
