import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import HeroSection from "../components/About/HeroSection";
import Welcome from "../components/about/Welcome";
import Goal from "../components/about/Goal";
import Journey from "../components/about/Journey";
import Values from "../components/about/Values";
import Initiatives from "../components/about/Initiatives";
import Message from "../components/about/Message";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Delay slightly to ensure element is mounted
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      {/* <HeroSection /> */}
      <Welcome />
      <Goal />
      <Journey />
      <Values />
      <Initiatives />
      <Message />
    </>
  );
};

export default About;
