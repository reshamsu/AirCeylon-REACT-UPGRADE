import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "../Contact/Slider";

const contacts = [
  {
    icon: <FaInfoCircle />,
    title: "General Inquiries",
    email: "info@airceylonint.com",
  },
  {
    icon: <FaGraduationCap />,
    title: "EPT Academy",
    email: "eptacademy@airceylonint.com",
  },
  {
    icon: <FaUserTie />,
    title: "Business Client",
    email: "alliances@airceylonint.com",
  },
  {
    icon: <BiSupport />,
    title: "Transition Support",
    email: "info@airceylonint.com",
    phone: "+1 437 254 3077",
  },
];

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              Get <span className="gradient-text">Connected.</span>
            </h1>
            <p>
              We're here to assist you with any inquires about our solutions
            </p>
          </div>

          <div className="contact-cards">
            {contacts.map((item, i) => (
              <div className="card-group" key={i}>
                <div className="card-title">
                  {item.icon}
                  <h4>{item.title}</h4>
                </div>
                <ul>
                  <li>
                    <Link to={`tel:${item.phone || "+94760301141"}`}>
                      <IoCall /> {item.phone || "+94 760 301 141"}
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${item.email}`}>
                      <MdEmail /> {item.email}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="container-sm">
            <h3>Visit us by appointment:</h3>
            <Slider />
            <a
              href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot />
              WSpace Building - 252A, Galle Road, Colombo 4 (Bambalapitiya),
              Western Province, Sri Lanka.
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactInfo;
