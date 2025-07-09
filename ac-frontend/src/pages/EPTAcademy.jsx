import React from "react";
import HeroSection from "../components/service/ept-academy/HeroSection";
import Welcome from "../components/service/ept-academy/Welcome";
import Monologue from "../components/service/ept-academy/Monologue";
import Packages from "../components/service/ept-academy/Packages";
// import Statistics from "../components/service/ept-academy/Statistics";
import Testimonials from "../components/service/ept-academy/Testimonials";
import Contact from "../components/service/ept-academy/Contact";

const EPTAcademy = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <Monologue />
      <Packages />
      {/* <Statistics /> */}
      <Testimonials />
      <Contact />
    </>
  );
};

export default EPTAcademy;
