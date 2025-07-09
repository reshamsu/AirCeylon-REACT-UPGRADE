import React from "react";
import { Container } from "@mui/material";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const EPTTestimonials = () => {
  return (
    <div className="landing-testimonials2">
      <Container className="container">
        <div className="container-fluid">
          <label>Testimonials</label>
          <h1>
            What Our <span className="gradient-text">Students Say</span>{" "}
            <FaCommentDots />
          </h1>
        </div>
        <div className="container-lg">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                Miss Tasha was very helpful, gained a lot of tips and she
                recommended really good resources to practice IELTS, helped me
                gain a scope of the whole test in a short period of time, very
                satisfied with her work and would definitely recommend.
                <FaQuoteRight />
              </h4>
              <p className="card-text">IELTS Student</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />
                I had a good experience with the IELTS classes I attended. The
                instructor, Tasha was incredibly knowledgeable and provided
                tailored guidance that helped me understand the exam structure
                and improve my skills in all areas, including reading, writing,
                listening, and speaking. Her engaging individual teaching
                methods kept my classes interesting and motivating. With her
                support, I felt confident and well-prepared on test day. I
                passed! I highly recommend these classes to anyone looking to
                achieve a high score on the IELTS!
                <FaQuoteRight />
              </h4>
              <p className="card-text">IELTS Student</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                <FaQuoteLeft />I wanted a band score of 6.5 for the IELTS, and
                my English was very weak. Within a very short time, Tasha helped
                me improve my English skills more than I expected. Highly
                recommended! <FaQuoteRight />
              </h4>
              <p className="card-text">IELTS Student</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EPTTestimonials;
