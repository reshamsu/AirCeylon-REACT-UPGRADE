import React from "react";
import { Container } from "@mui/material";

const EPTWelcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Welcome to Air Ceylon's <span className="gradient-text">EPT Academy</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>The key to unlock your path via IELTS starts here. </p>

          <p>
            Achieve your IELTS goals with personalized, 1-to-1 virtual classes
            for Academic and General candidates. Our courses are tailored to
            your target score, offering individual attention, regular mock
            tests, and full access to ebooks, videos, and practice materials.
            Select the course that fits your needs and begin your path to
            success today.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EPTWelcome;
