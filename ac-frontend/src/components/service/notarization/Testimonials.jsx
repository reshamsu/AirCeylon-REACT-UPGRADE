import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="landing-testimonials">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Experience with <span className="gradient-text">Air Ceylon</span>{" "}
            <FaCommentDots />
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <label>Notarization</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                The level of personalized service Air Ceylon provides is
                unparalleled. Their attention to detail, swift communication,
                and thoughtful recommendations made my corporate retreat both
                productive and enjoyable. Highly recommended for premium travel
                needs. <FaQuoteRight />
              </h4>
              <p className="card-text">
                Graduate - Canadian College (Sri Lanka)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
