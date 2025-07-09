import React from "react";
import { Container } from "@mui/material";

const VisaWelcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Are You Ready To <span className="gradient-text">Travel The World?</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>
            The key to unlock your next journey starts here.
          </p>
          <p>
            Our VISA Service Experts are dedicated to make your dreams come
            true. Apply with Air Ceylon International and experience the ease in exploring the
            world!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default VisaWelcome;
