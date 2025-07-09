import React from "react";
import { Container } from "@mui/material";

const Statistics = () => {
  return (
    <div className="landing-stats2">
      <Container className="container">
        <div className="container-fluid">
          <label>Our Achievements</label>
          <h1>Empowering Minds, Shaping Futures</h1>
          <h4>Discover what makes EPT Academy a trusted name in education</h4>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/graduate.png" alt="digital" />
                <h3>5,000+ Graduates</h3>
              </div>
              <div className="card-text">
                <p>
                  Students trained and certified across multiple professional
                  programs.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/passrate.png" alt="digital" />
                <h3>98% Pass Rate</h3>
              </div>
              <div className="card-text">
                <p>Consistently high academic success across all courses.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/experts.png" alt="digital" />
                <h3>150+ Expert Instructors</h3>
              </div>
              <div className="card-text">
                <p>
                  Qualified professionals providing personalized learning
                  support.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src="/assets/recognition.png" alt="digital" />
                <h3>Globally Recognized</h3>
              </div>
              <div className="card-text">
                <p>
                  Programs acknowledged by institutions and employers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
