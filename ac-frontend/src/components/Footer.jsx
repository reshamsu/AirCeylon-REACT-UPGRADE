import React from "react";
import { Container } from "@mui/material";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import logo from "../assets/Logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    if (location.pathname === path) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path + "#" + sectionId);
    }
  };

  return (
    <footer>
      <Container className="container">
        <div className="footer-content">
          <div className="row">
            <div className="brand">
              <div className="footer-brand" style={{ textAlign: "center" }}>
                <NavLink
                  to="/"
                  className="logo"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt="Air Ceylon Logo"
                    style={{ width: "2.8rem", marginRight: ".8rem" }}
                  />
                  Air Ceylon
                </NavLink>
                <p>Beyond the Horizon.</p>

                <ul>
                  <li>
                    <a href="https://wa.me/94760301141">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/19h7Uyr39x/?mibextid=wwXIfr "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/air.ceylon?igsh=MXFiaTdhZ3picmM2dg== "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/air-ceylon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@airceylonint.com">
                      <HiOutlineMail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row-3">
              <div className="col">
                <ul>
                  <h3>Services</h3>
                  <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "top")}>
                      VISA Service
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/ept-academy", "top")}>
                      EPT Academy
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/transition-support", "top")}>
                      Transition Support
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/notarization", "top")}>
                      Notarization
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul>
                  <h3>Visa Service</h3>
                  <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "europe")}>
                      Europe
                    </a>
                  </li>
                    <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "east-asia")}>
                      East Asia
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "middle-east")}>
                      Middle-East
                    </a>
                  </li>
                <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "south-asia")}>
                      South Asia
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/visa-service", "southeast-asia")}>
                      South-East Asia
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul>
                  <h3>EPT Academy</h3>
                  <li>
                    <a onClick={() => handleNavigation("/services/ept-academy", "packages")}>
                      Course ZERO (Free)
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/ept-academy", "packages")}>
                      Crash Course
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/ept-academy", "packages")}>
                      Essential Course
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleNavigation("/services/ept-academy", "packages")}>
                      Pro Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="location">
              <p>
                <label>Visit us by Appointment:</label> Air Ceylon International
                - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western Province,
                Sri Lanka.
                <a
                  href="https://www.google.com/maps?q=Air+Ceylon+International,+252A+Galle+Road,+Colombo+00400,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
            <div className="contact">
              <label>
                Phone Number: <a href="tel:+94760301141">+94 760 301 141</a>
              </label>
              <RxDividerVertical />
              <label>
                Email Address:{" "}
                <a href="mailto:info@airceylonint.com">info@airceylonint.com</a>
              </label>
            </div>
          </div>

          <div
            className="rights"
            style={{ textAlign: "center", marginTop: "1.4rem" }}
          >
            <p>
              Air Ceylon International Private Limited <FaRegCopyright /> 2025.
              All Rights Reserved. Powered by{" "}
              <a href="https://www.myhive.biz/">myhive</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
