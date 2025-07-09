import React from "react";
import { Container } from "@mui/material";

// Import images properly from src/assets
import partnerships from "../../assets/partnerships.png";
import standards from "../../assets/standards.png";
import experience from "../../assets/experience.png";
import travelHub from "../../assets/travel-hub.png";

const Analytics = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Expertise</label>
          <h1>
            Your Journey, <span className="gradient-text">Our Responsibility.</span>
          </h1>
          <h4>Navigating Your Experience with Confidence and Ease</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={partnerships} alt="Expert Partnerships" />
                <h2>Expert Partnerships</h2>
              </div>
              <div className="card-text">
                <p>
                  Trusted Licensed Professionals to ensure Your Experience is in the Best of Hands.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={standards} alt="Exceeding Standards" />
                <h2>Exceeding Standards</h2>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={experience} alt="Effortless Experience" />
                <h2>Effortless Experience</h2>
              </div>
              <div className="card-text">
                <p>
                  Dedicated to Implementing a Smart, Easy, Simple & Seamless Experience as much as Your Journey.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={travelHub} alt="Exclusive Travel Hub" />
                <h2>Exclusive Travel Hub</h2>
              </div>
              <div className="card-text">
                <p>
                  Determined to Provide Exclusive Services All in One Place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Analytics;
