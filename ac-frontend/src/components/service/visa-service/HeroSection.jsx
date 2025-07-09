import { Container } from "@mui/material";
import React from "react";
import SubNavbar from "../../SubNavbar";
import hero from "../../../assets/visa-section.avif";

const VISAHero = () => {
  return (
    <>
      <SubNavbar />

      <div className="visa-hero">
        <div className="homepage-overlay">
          <img src={hero} className="homepage darkened" />
        </div>
        <Container className="visa-hero">
          <div className="container-fluid">
            <h1>VISA Service</h1>
          </div>
        </Container>
      </div>
    </>
  );
};

export default VISAHero;
