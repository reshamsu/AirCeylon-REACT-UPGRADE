import React from "react";
import HeroSection from "../components/blogs/HeroSection";
import News from "../components/blogs/News";
import Sustainability from "../components/blogs/Sustainability";
import Brands from "../components/blogs/Brands";

const Blog = () => {
  return (
    <>
      <HeroSection />
      <News />
      <Sustainability />
      <Brands />
    </>
  );
};

export default Blog;
