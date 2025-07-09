import React from "react";
import { Container } from "@mui/material";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Correct image import (Assuming assets inside src/assets folder)
import founderImage from "../../assets/person.jpeg";

const Message = () => {
  return (
    <div className="about-message">
      <Container className="container">
        <div className="card">
          
          <div className="card-text">
            <p>
              <FaQuoteLeft style={{ marginRight: ".8rem" }} />
              When I came up with Air Ceylon, it wasn’t just about travel — it
              was about transformation.
            </p>
            <p>
              I saw and experienced the challenges people face when navigating
              new journeys: visas, immigration, education, transitions, and the
              uncertainties that follow. Too often, these experiences were
              stressful, discouraging, and impersonal. The mission for Air Ceylon
              was born to change that.
            </p>
            <p>
              Our vision is to become Sri Lanka’s main travel and transition hub
              — a place where your journey begins with clarity, support, and
              confidence. Whether you're taking flight for opportunity,
              education, or a new life abroad, we’re here to walk with you every
              step of the way. From expert visa services and immigration
              consultancy to IELTS training, travels & tours, air ticketing, and
              post-arrival (transition) support like accommodation, jobs, and
              lifestyle integration — we believe in going the extra mile, even
              after you land.
            </p>
            <p>
              At Air Ceylon, we are building more than a service. We’re building
              a bridge — between countries, between people, and between dreams
              and reality.
              <FaQuoteRight style={{ marginLeft: ".6rem" }} />
            </p>
          </div>

          <div className="card-owner">
            <img
              src={founderImage}
              alt="Founder & CEO"
              style={{
                width: "7%",
                minWidth: "50px",
                marginRight: "1.4rem",
                borderRadius: "50%",
              }}
            />
            <div className="card-text">
              <h3>Founder & CEO, Air Ceylon International</h3>
              <label>- Air Ceylon International</label>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Message;
