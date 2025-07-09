import React from "react";
import { Container } from "@mui/material";

// Proper media imports
import operationIcon from "../../assets/operation.png";
import handshakeIcon from "../../assets/handshake.png";
import educationIcon from "../../assets/education.png";
import officeIcon from "../../assets/office-building.png";

const Initiatives = () => {
  return (
    <div className="landing-stats3">
      <Container className="container">
        
        <div className="container-fluid">
          <label>CSR</label>
          <h1>
            Sustainability <span className="gradient-text">Initiatives</span>
          </h1>
        </div>

        <div className="container-lg">
          
          {/* Digital-First Operations */}
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={operationIcon} alt="Digital Operations Icon" />
                <h3>Digital-First Operations</h3>
              </div>
              <div className="card-text">
                <p>
                  We prioritize digital documentation, e-signatures, and online processes 
                  to reduce paper waste and carbon-heavy administrative work.
                </p>
              </div>
            </div>
          </div>

          {/* Eco-Conscious Partners */}
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={handshakeIcon} alt="Eco Partners Icon" />
                <h3>Eco-Conscious Partners</h3>
              </div>
              <div className="card-text">
                <p>
                  We collaborate with expert partners committed to sustainable tourism 
                  and green practices.
                </p>
              </div>
            </div>
          </div>

          {/* Community Transition & Support */}
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={educationIcon} alt="Community Support Icon" />
                <h3>Community Transition & Support</h3>
              </div>
              <div className="card-text">
                <p>
                  We support migrant communities with long-term transition services 
                  that promote local engagement, sustainable living, and inclusive development.
                </p>
              </div>
            </div>
          </div>

          {/* Green Office Culture */}
          <div className="card">
            <div className="card-body">
              <div className="card-group">
                <img src={officeIcon} alt="Green Office Icon" />
                <h3>Green Office Culture</h3>
              </div>
              <div className="card-text">
                <p>
                  We implement energy-efficient practices at our offices, including 
                  recycling programs, minimal single-use plastics, and remote work flexibility 
                  to reduce commuting.
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Initiatives;
