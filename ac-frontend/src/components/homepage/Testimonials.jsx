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
          <h1 className="flex">
            Experience with {" "} <span className="ml-6 text-[#a87c47]">Air Ceylon</span>
            <FaCommentDots className="ml-6"/>
          </h1>
        </div>

        <div className="container-lg">
          <div className="card">
            <label>Business Client</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                At Hive Colombo, we navigate through any travel related
                activities seamlessly and confidently via Air Ceylon. Their
                expertise, partnerships and commitment is unique but more
                importantly a reliable & valuable travel solution.
                <FaQuoteRight />
              </h4>
              <p className="card-text">Hive Colombo HQ</p>
            </div>
          </div>

          <div className="card">
            <label>EPT Academy</label>
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                I wanted a band score of 6.5 for the IELTS, and my English was
                very weak. Within a very short time, Tasha helped me improve my
                English skills more than I expected. Highly recommended!
                <FaQuoteRight />
              </h4>
              <p className="card-text">IELTS Student</p>
            </div>
          </div>

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
              <p className="card-text">Graduate - Canadian College (Sri Lanka)</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
