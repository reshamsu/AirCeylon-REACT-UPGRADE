import React from "react";
import { Container } from "@mui/material";
import about from "../../assets/aboutus.png";

const Welcome = () => {
  return (
    <div className="about-welcome">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            About <span className="gradient-text">Us</span>
          </h1>
          <p style={{ fontWeight: "660" }}>
            Air Ceylon International isn’t just about travel — we are about your
            entire journey.
          </p>
          <p>
            As Sri Lanka’s emerging hub for complete travel and transition
            services, we go far beyond flights. From VISA Service, Immigration
            Consultancy, and IELTS training through our EPT Academy, to travel &
            tours planning, Notarization, and Air Ticketing — we are your
            friendly neighborhood travel partner every step of the way.
          </p>
          <p>
            But our commitment doesn’t stop at the Arrivals. We go the extra
            mile to help you settle in with accommodation support, job
            connections, community building, and lifestyle management, ensuring
            confidence in navigating your new chapter.
          </p>
          <p>
            Powered by expert partnerships and streamlined processes, Air Ceylon
            International is reimagining what it means to move, live, and thrive
            across borders — where every journey begins with care, clarity, and
            confidence.
          </p>
        </div>
        <img src={about} alt="About" style={{ width: "44%", marginLeft: "4rem" }} />
      </Container>
    </div>
  );
};

export default Welcome;
