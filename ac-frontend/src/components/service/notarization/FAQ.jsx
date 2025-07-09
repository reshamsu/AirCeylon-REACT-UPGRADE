import React, { useState } from "react";
import { Container } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const faqs = [
  {
    question: "What is Authentication?",
    answer:
      "Yes, we partner with trusted providers to offer optional travel insurance during checkout. It covers trip cancellations, medical emergencies, and lost baggage.",
  },
  {
    question: "What is Notarization?",
    answer:
      "AirCeylon offers both domestic and international flights across Asia, Europe, and the Middle East. You can explore our destinations page for a full list.",
  },
  {
    question: "What is Verification?",
    answer:
      "You can easily book flights through our website, mobile app, or by contacting our customer service. Simply choose your departure and arrival cities, dates, and select your preferred flight.",
  },
  {
    question: "What is Attestation?",
    answer:
      "We allow one carry-on (up to 7kg) and one checked bag (up to 23kg) for economy class. Additional or oversized baggage may incur extra fees. Business class passengers enjoy higher baggage allowances.",
  },
  {
    question: "What is an Apostille?",
    answer:
      "Yes, most tickets are eligible for changes or cancellations, though fees may apply. Visit our “Manage Booking” section or contact support for assistance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-section">
      <Container className="container">
        <div className="container-fluid">
          <label>FAQ</label>
          <h1>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <div className="container-lg">
            {faqs.map((faq, index) => (
              <div
                className="card"
                key={index}
                style={{ position: "relative" }}
              >
                <div className="card-body">
                  <h3 className="card-title">{faq.question}</h3>
                  {openIndex === index && (
                    <div className="card-text">
                      <p>{faq.answer}</p>
                      <IoMdClose
                        onClick={() => setOpenIndex(null)}
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          cursor: "pointer",
                          padding: "6px",
                          fontSize: "2.4rem",
                          margin: "10px 2%",
                        }}
                      />
                    </div>
                  )}
                </div>
                {openIndex !== index && (
                  <IoIosAdd onClick={() => setOpenIndex(index)} />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
