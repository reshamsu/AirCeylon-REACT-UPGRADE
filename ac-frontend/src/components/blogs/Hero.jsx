import { Container } from "@mui/material";
import React from "react";
import hero from "../../assets/blogs.jpg";

const Hero = () => {
  return (
    <div className="relative w-full text-white">
      <div className="absolute inset-0">
        <img src={hero} className="w-full h-full object-cover brightness-30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-[50vh] md:h-[90vh] px-4 text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">Blogs</h1>
          <p className="md:text-lg text-md font-semibold text-white my-4">
            Why More Sri Lankan's Trust <span>Air Ceylon</span> for Hassle-Free
            Travel Planning
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
