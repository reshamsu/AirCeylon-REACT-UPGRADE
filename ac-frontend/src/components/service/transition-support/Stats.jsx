import React from "react";
import { Container } from "@mui/material";

// Correct Image Imports
import accom from "../../../assets/accom.png";
import jobs from "../../../assets/jobs.png";
import community from "../../../assets/community.png";
import lifestyle from "../../../assets/lifestyle.png";

const TransitionWelcome = () => {
  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            What We <span className="gradient-text">Offer</span>
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={accom} alt="Accommodation" />
                <h2>Accommodation</h2>
              </div>
              <div className="card-text">
                <p>
                  Trusted Licensed Professionals to ensure Your Experience is in
                  the Best of Hands.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={jobs} alt="Jobs" />
                <h2>Jobs</h2>
              </div>
              <div className="card-text">
                <p>
                  Commitment to High Quality Service & Support Beyond the
                  Boundaries by Flying the Extra Mile for You.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={community} alt="Community" />
                <h2>Community</h2>
              </div>
              <div className="card-text">
                <p>
                  Dedicated to Implementing a Smart, Easy, Simple & Seamless
                  Experience as much as Your Journey.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={lifestyle} alt="Lifestyle Management" />
                <h2>Lifestyle Management</h2>
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

export default TransitionWelcome;
