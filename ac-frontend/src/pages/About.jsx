import React from "react";
// import HeroSection from "../components/About/HeroSection";
import Welcome from "../components/about/Welcome";
import Goal from "../components/about/Goal";
import Journey from "../components/about/Journey";
import Values from "../components/about/Values";
import Initiatives from "../components/about/Initiatives";
import Message from "../components/about/Message";

const About = () => {
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
