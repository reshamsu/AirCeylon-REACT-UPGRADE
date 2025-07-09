import React from "react";
import { Container } from "@mui/material";
import welcome from "../../assets/Watermark.png";

const Welcome = () => {
  return (
    <div className="landing-welcome">
      <div className="homepage-overlay">
        <img
          src={welcome}
          className="watermark"
          alt="Watermark"
        />
      </div>

      <Container className="container">
        <div className="container-fluid">
          <label>Hello</label>
          <h1>
            Welcome to <span className="gradient-text">Air Ceylon</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>Your journey begins now. </p>
          <p>
            Explore a world of seamless travel, exceptional service, and
            boundless possibilities. Let every scroll guide you to the
            destination of your dreams.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
