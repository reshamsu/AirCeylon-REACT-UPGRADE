import React from "react";
import { Container } from "@mui/material";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero from "../../assets/check.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img src={hero} className="homepage darkened" />

        {/* <img
          src="./assets/Watermark.png"
          className="watermark"
          alt="Watermark"
        /> */}
      </div>

      <Container className="landing-hero">
        <div className="container-fluid">
          <h1 className="font-bold">
            Beyond <span className="gradient-text">Travelling</span>
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
