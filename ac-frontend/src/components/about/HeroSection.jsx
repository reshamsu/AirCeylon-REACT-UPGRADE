import React from "react";
import { Container } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src="./assets/aboutus.jpg" className="homepage darkened" />
      </div>

      <Container className="landing-hero">
        <div className="container-fluid">
          <h1>
            About Us
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default AboutHero;
