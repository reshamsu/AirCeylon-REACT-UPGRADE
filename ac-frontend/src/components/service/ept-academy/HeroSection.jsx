import { Container } from "@mui/material";
import React from "react";
import hero from "../../../assets/ielts2.jpg";

const EPTHero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="homepage-overlay">
          <img src={hero} className="homepage darkened" />
        </div>

        <Container className="ept-hero">
          <div className="container-fluid">
            <h1>EPT Academy</h1>
            <p>
              English Proficiency Training <span>(EPT)</span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EPTHero;
