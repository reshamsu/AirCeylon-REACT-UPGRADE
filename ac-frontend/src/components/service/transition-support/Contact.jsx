import { Container } from "@mui/material";
import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const TSContact = () => {
  return (
    <>
      <div className="ept-contact">
        <Container className="container">
          <div className="card">
            <div className="card-body">
              <h1>
                Contact for{" "}
                <span className="gradient-text">Transition Support</span>
              </h1>
              <p>
                We're open all 7 days a week to assist you with any inquiries
                about our services.
              </p>
              <div className="card-group">
                <div className="col">
                  <a href="tel:+14372543077" className="btn btn-primary">
                    <IoCall /> Call
                  </a>

                  <a
                    href="mailto:info@airceylonint.com"
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

export default TSContact;
