import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const VisaTestimonials = () => {
  return (
    <div className="landing-testimonials">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Our Experience on <span className="gradient-text">VISA Service</span>{" "}
            <FaCommentDots />
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                At Hive Colombo, we navigate through any travel related
                activities seamlessly and confidently via Air Ceylon. Their
                expertise, partnerships and commitment is unique but more
                importantly a reliable & valuable travel solution.
                <FaQuoteRight />
              </h4>
              <p className="card-text">Review VISA Service</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                "I wanted a band score of 6.5 for the IELTS, and my English was
                very weak. Within a very short time, Tasha helped me improve my
                English skills more than I expected. Highly recommended!"
                <FaQuoteRight />
              </h4>
              <p className="card-text">Review VISA Service</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                The level of personalized service Air Ceylon provides is
                unparalleled. Their attention to detail, swift communication,
                and thoughtful recommendations made my corporate retreat both
                productive and enjoyable. Highly recommended for premium travel
                needs. <FaQuoteRight />
              </h4>
              <p className="card-text">Review VISA Service</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisaTestimonials;
