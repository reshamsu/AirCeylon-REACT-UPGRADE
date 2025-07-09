import React from "react";
import { Container } from "@mui/material";

// Correct image imports assuming assets are inside src/assets
import VisionImg from "../../assets/vision.jpg";
import MissionImg from "../../assets/mission.jpg";
import VisionWatermark from "../../assets/VisionW.png";
import MissionWatermark from "../../assets/MissionW.png";

const Goal = () => {
  return (
    <div className="about-goal">
      <Container className="container">
        <div className="container-fluid">
          
          {/* Vision Section */}
          <div className="company">
            <div className="body-text1" style={{ paddingRight: "6rem" }}>
              <img
                src={VisionWatermark}
                alt="Vision Watermark"
                className="watermark"
              />
              <h1>
                Our <span className="gradient-text">Vision</span>
              </h1>
              <p>
                "To be the international Hub of Sri Lanka as the Leader of
                Travel & Tourism."
              </p>
            </div>
            <img
              src={VisionImg}
              alt="Vision"
              className="image"
              style={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)" }}
            />
          </div>

          {/* Mission Section */}
          <div className="company">
            <img
              src={MissionImg}
              alt="Mission"
              className="image"
              style={{
                height: "46vh",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)",
              }}
            />
            <div className="body-text2" style={{ paddingLeft: "6rem" }}>
              <img
                src={MissionWatermark}
                alt="Mission Watermark"
                className="watermark"
              />
              <h1>
                Our <span className="gradient-text">Mission</span>
              </h1>
              <p>
                "To Navigate New Opportunities smoothly with ease and confidence as
                you embark onto your next chapter."
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Goal;
