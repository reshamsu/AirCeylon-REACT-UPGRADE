import React from "react";
import HeroSection from "../components/service/visa-service/HeroSection";
import Welcome from "../components/service/visa-service/Welcome";
import Contact from "../components/service/visa-service/Contact";
import Statistics from "../components/service/visa-service/Statistics";
import Europe from "../components/service/visa-service/countries/Europe";
import SouthAsia from "../components/service/visa-service/countries/SouthAsia";
import MiddleEast from "../components/service/visa-service/countries/MiddleEast";
import EastAsia from "../components/service/visa-service/countries/EastAsia";
import SouthEastAsia from "../components/service/visa-service/countries/SouthEastAsia";
// import Testimonials from "../components/Services/Visa-Service/Testimonials";

const VisaService = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Contact />
      <Statistics />
      <Europe />
      <EastAsia />      
      <MiddleEast />
      <SouthAsia />
      <SouthEastAsia />
      {/* <Testimonials /> */}
    </>
  );
};

export default VisaService;
