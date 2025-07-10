import React from "react";
import Hero from "../components/service/visa-service/Hero";
import Welcome from "../components/service/visa-service/Welcome";
import Contact from "../components/service/visa-service/Contact";
import Analytics from "../components/service/visa-service/Analytics";
import Europe from "../components/service/visa-service/countries/Europe";
import SouthAsia from "../components/service/visa-service/countries/SouthAsia";
import MiddleEast from "../components/service/visa-service/countries/MiddleEast";
import EastAsia from "../components/service/visa-service/countries/EastAsia";
import SouthEastAsia from "../components/service/visa-service/countries/SouthEastAsia";
// import Testimonials from "../components/Services/Visa-Service/Testimonials";

const VisaService = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Contact />
      <Analytics />
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
