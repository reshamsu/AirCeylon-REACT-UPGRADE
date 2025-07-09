import React from "react";
import { Container } from "@mui/material";

const TransitionWelcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Welcome</label>
          <h1>
            Every Mile of <span className="gradient-text">Your Journey</span>
          </h1>
          <p>
            We enjoy going the extra mile to ensure YOUR New Chapter is smooth
            and confident. Our Regional Transition Support Advisor is determined
            to provide you the assistance you require from the moment you touch
            down onto a New World - from accommodation, jobs, communities and
            lifestyle
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TransitionWelcome;
