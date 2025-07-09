import React from "react";
import { Container } from "@mui/material";

// Import images properly for stable paths (assuming assets inside src/assets)
import leafIcon from "../../../assets/leaf.png";
import studentNotary from "../../../assets/student-notary.webp";
import notarySeal from "../../../assets/notary-seal.jpeg";
import canadaNotaries from "../../../assets/canada-notaries.jpg";

const VisaWelcome = () => {
  return (
    <div className="landing-stats">
      <div className="container">
        <div className="container-fluid">
          <h1>
            Who is <span className="gradient-text">it for?</span>
          </h1>
          <h4>The key to notarize your documents starts here.</h4>
        </div>

        <Container className="container-lg">
          
          <div className="card-info">
            <div className="card-label">
              <img src={leafIcon} alt="Leaf Icon" />
            </div>
            <div className="card-body">
              <img
                src={studentNotary}
                alt="Students with Canadian Affiliated Certificates"
                style={{ width: "90%" }}
              />
              <h3>Students with Canadian Affiliated Certificates and Documents</h3>
            </div>
          </div>

          <div className="card-info">
            <div className="card-label">
              <img src={leafIcon} alt="Leaf Icon" />
            </div>
            <div className="card-body">
              <img
                src={notarySeal}
                alt="Canadian Affiliated Academic Institutions"
                style={{ width: "90%", objectFit: "cover" }}
              />
              <h3>Canadian Affiliated Academic Institutions in Sri Lanka</h3>
            </div>
          </div>

          <div className="card-info">
            <div className="card-label">
              <img src={leafIcon} alt="Leaf Icon" />
            </div>
            <div className="card-body">
              <img
                src={canadaNotaries}
                alt="Canadian Academic Bodies"
                style={{ width: "90%" }}
              />
              <h3>Canadian Academic Bodies in Sri Lanka</h3>
            </div>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default VisaWelcome;
