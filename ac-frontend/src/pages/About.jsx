import React from "react";
// import HeroSection from "../components/About/HeroSection";
import Welcome from "../components/About/Welcome";
import Goal from "../components/About/Goal";
import Journey from "../components/About/Journey";
import Values from "../components/About/Values";
import Initiatives from "../components/About/Initiatives";
import Message from "../components/About/Message";

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
