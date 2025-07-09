import React from "react";
import Hero from "../components/homepage/Hero";
import Welcome from "../components/homepage/Welcome";
import Slider from "../components/homepage/Slider";
import Express from "../components/homepage/Express";
import Analytics from "../components/homepage/Analytics";
import Testimonials from "../components/homepage/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Slider />
      <Express />
      <Analytics />
      <Testimonials />
    </>
  );
};

export default Home;
