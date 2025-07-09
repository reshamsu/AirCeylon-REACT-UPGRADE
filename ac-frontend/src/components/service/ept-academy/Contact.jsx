import { Container } from "@mui/material";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="ept-contact">
        <Container className="container">
          <div className="card">
            <div className="card-body">
              <h1>
                Contact <span className="gradient-text">
                  EPT Academy
                </span>
              </h1>
              <p>
                We're open all 7 days a week to assist you with any inquiries about our academy and courses.
              </p>
              <div className="card-group">
                <div className="col">
                  <a href="tel:+94760301141" className="btn btn-primary">
                    <IoCall /> Call
                  </a>

                  <a
                    href="mailto:eptacademy@airceylonint.com"
                    className="btn btn-primary"
                  >
                    <MdEmail /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
