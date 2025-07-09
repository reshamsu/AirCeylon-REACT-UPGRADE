import { Container } from "@mui/material";
import React from "react";
import hero from "../../../assets/notarization-section.jpg";

const NotariesHero = () => {
  return (
    <div className="hero-section">
      <div className="homepage-overlay">
        <img
          src={hero}
          className="homepage darkened"
        />
      </div>
      <Container className="notaries-hero">
        <div className="container-fluid">
          <h1>Notarization</h1>
          <p>Info Notarization, Authentication, Verification</p>
        </div>
      </Container>
    </div>
  );
};

export default NotariesHero;
