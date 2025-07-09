import React from "react";
import { Container } from "@mui/material";
import tutor from "../../../assets/tutor.png";

const EPTMonologue = () => {
  return (
    <div className="ept-monologue">
      <Container className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="tutor">
              <img src={tutor} alt="Tutor" />
              <div className="col">
                <h1>
                  <span className="gradient-text">Tasha Vanhoff</span>
                </h1>
                <label>
                  - Certified IELTS Tutor <span className="gradient-text">(Brand Partner)</span>
                </label>
              </div>
            </div>

            <div className="container-lg">
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h1 className="gradient-text">7+</h1>
                  </div>
                  <strong>Years Experience</strong>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h1 className="gradient-text">150+</h1>
                  </div>
                  <strong>Students Enrolled</strong>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h1 className="gradient-text">80%</h1>
                  </div>
                  <strong>Pass Rate (1st Time)</strong>
                </div>
              </div>
            </div>
          </div>

          <p>
            “I am an Educator - I teach IELTS and Spoken English among other
            subjects with over 6+ years of experience as an online tutor. I
            enjoy teaching, and being able to witness a student progress in
            their education is a gift indeed.
          </p>
          <p>
            Through my many years of teaching, I have appreciated every
            opportunity I've gotten and each connection I've formed along the
            way. I look forward to more teaching opportunities in the future.”
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EPTMonologue;
