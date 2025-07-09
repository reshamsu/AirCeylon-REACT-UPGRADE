import React from "react";
import { Container } from "@mui/material";

const EPTPricing = () => {
  return (
    <div className="ept-pricing">
      <Container className="container">
        <div className="container-fluid">
          <label>IELTS Courses</label>
          <h1>
            Pricing <span className="gradient-text">Plans</span>
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Basic Plan</h3>
              <div className="card-text">
                <h1>$100</h1>
                <ul>
                  <li>
                    <FaCheck /> Freelancers
                  </li>
                  <li>
                    <FaCheck /> Startups
                  </li>
                </ul>
              </div>
              <button className="btn btn-light">Get Started</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Standard Plan</h3>
              <div className="card-text">
                <h1>$500</h1>
                <ul>
                  <li>
                    <FaCheck /> Freelancers
                  </li>
                  <li>
                    <FaCheck /> Startups
                  </li>
                  <li>
                    <FaCheck /> Small Scale Businesses
                  </li>
                </ul>
              </div>
              <button className="btn btn-light">Get Started</button>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Premium Plan</h3>
              <div className="card-text">
                <h1>$1000</h1>
                <ul>
                  <li>
                    <FaCheck /> Startups
                  </li>
                  <li>
                    <FaCheck /> Small Scale Businesses
                  </li>
                  <li>
                    <FaCheck /> Medium Scale Businesses
                  </li>
                </ul>
              </div>
              <button className="btn btn-light">Get Started</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EPTPricing;
2;
