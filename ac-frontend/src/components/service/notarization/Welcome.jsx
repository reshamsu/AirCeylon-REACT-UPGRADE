import React from "react";
import { Container } from "@mui/material";

const Welcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          <h1>
            <span className="gradient-text">Notarization</span>
          </h1>
          <p>
            We understand the importance of verifying your documents before you
            embark onto a new opportunity in a new city.
          </p>
          <p>
            Be stress-free and confident with our well informed, speedy and
            reliable Notarization Service.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
