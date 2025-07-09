import { Container } from "@mui/material";
import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

// Main component
export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("form");

  const tabButtons = [
    { key: "form", label: "Contact Form" },
    { key: "bookappointment", label: "Book Appointment" },
  ];

  const iframeSources = {
    bookappointment:
      "https://api.leadconnectorhq.com/widget/booking/MuBKootQtAyenTNNfQVQ",
  };

  return (
    <div className="contact-form">
      <Container className="container">
        <div className="tab-buttons">
          {tabButtons.map((tab) => (
            <button
              key={tab.key}
              className={`btn ${
                activeTab === tab.key ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="card">
          {activeTab === "form" ? (
            <div className="card-form">
              <div className="card-text">
                <h2>
                  Send us a <span className="gradient-text">Message.</span>
                </h2>
                <p>
                  We're here to assist you with any inquiries about our
                  solutions
                </p>
              </div>

              <form>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="gradient-text">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="gradient-text">
                      Preferred Support System
                    </label>
                    <select className="form-control">
                      <option>Call for Inquiries</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="gradient-text">Additional Info</label>
                  <textarea
                    className="form-control"
                    placeholder="Message here..."
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Send Message <FiSend />
                </button>
              </form>
            </div>
          ) : (
            <div
              className="calendar-booking"
              style={{ width: "100%", height: "840px" }}
            >
              <iframe
                src={iframeSources[activeTab]}
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  height: "100%",
                }}
                scrolling="no"
                id={`${activeTab}_iframe`}
                title="Booking Calendar"
              ></iframe>

              {/* <iframe
                src={iframeSources[activeTab]} // 🔧 FIXED to use dynamic src
                style={{
                  width: "100%",
                  border: "none",
                  overflow: "hidden",
                  height: "100%",
                }} // 🔧 FIXED to use JSX object, not string
                scrolling="no"
                id={`${activeTab}_iframe`}
                title="Booking Calendar"
              ></iframe> */}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
