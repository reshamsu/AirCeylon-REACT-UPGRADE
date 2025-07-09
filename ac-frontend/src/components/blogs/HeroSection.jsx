import { Container } from "@mui/material";
import React from "react";
import hero from "../../assets/blogs.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src={hero} className="homepage darkened" />
      </div>
      <Container className="landing-hero">
        <div className="container-fluid">
          <h1>Blogs</h1>
          <p>
            Why More Sri Lankan's Trust <span>Air Ceylon</span> for Hassle-Free
            Travel Planning
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
