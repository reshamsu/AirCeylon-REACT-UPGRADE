import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoChevronDownOutline, IoBagCheckOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith("/services");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink
            to="/"
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => handleNavClick("/")}
          >
            <img
              src={logo}
              alt="Air Ceylon"
              style={{ width: "2.8rem", marginRight: ".8rem" }}
            />
            Air Ceylon
          </NavLink>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => handleNavClick("/")}
              >
                Home
              </NavLink>
            </li>

            <li
              className={`service-dropdown ${
                isServicesRoute ? "nav-link-active" : ""
              }`}
            >
              <span className="nav-link dropdown-toggle">
                Services <IoChevronDownOutline />
              </span>
              <ul className="service-dropdown-menu">
                <li>
                  <NavLink
                    to="/services/visa-service"
                    className="dropdown-item"
                    onClick={() => handleNavClick("/services/visa-service")}
                  >
                    Visa Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/ept-academy"
                    className="dropdown-item"
                    onClick={() => handleNavClick("/services/ept-academy")}
                  >
                    EPT Academy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/transition-support"
                    className="dropdown-item"
                    onClick={() => handleNavClick("/services/transition-support")}
                  >
                    Transition Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/notarization"
                    className="dropdown-item"
                    onClick={() => handleNavClick("/services/notarization")}
                  >
                    Notarization
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => handleNavClick("/contact-us")}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => handleNavClick("/about-us")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
                onClick={() => handleNavClick("/blog")}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout/no-items"
                className={({ isActive }) =>
                  isActive ? "nav-link-icon nav-icon-active" : "nav-link-icon"
                }
                onClick={() => handleNavClick("/checkout/no-items")}
              >
                <IoBagCheckOutline />
              </NavLink>
            </li>
          </ul>

          <button className="menu" onClick={() => setMenuOpen(true)}>
            <HiMenuAlt3 />
          </button>
        </nav>
      </header>

      {/* Mobile Side Navigation */}
      {menuOpen && (
        <nav className="sidenav">
          <ul className="sidenav-menu-list">
            <div className="title">
              <button className="close-sidebar" onClick={() => setMenuOpen(false)}>
                <FaChevronRight />
              </button>
              <h3>Menu</h3>
            </div>

            <li>
              <NavLink
                to="/"
                onClick={() => {
                  setMenuOpen(false);
                  handleNavClick("/");
                }}
              >
                Home
              </NavLink>
            </li>

            <li className={`dropdown ${isServicesRoute ? "nav-link-active" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <IoChevronDownOutline />
              </a>
              {mobileServicesOpen && (
                <ul className="sidenav-submenu">
                  <li>
                    <NavLink
                      to="/services/visa-service"
                      onClick={() => {
                        setMenuOpen(false);
                        handleNavClick("/services/visa-service");
                      }}
                    >
                      Visa Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/ept-academy"
                      onClick={() => {
                        setMenuOpen(false);
                        handleNavClick("/services/ept-academy");
                      }}
                    >
                      EPT Academy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/transition-support"
                      onClick={() => {
                        setMenuOpen(false);
                        handleNavClick("/services/transition-support");
                      }}
                    >
                      Transition Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/notarization"
                      onClick={() => {
                        setMenuOpen(false);
                        handleNavClick("/services/notarization");
                      }}
                    >
                      Notarization
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/contact-us"
                onClick={() => {
                  setMenuOpen(false);
                  handleNavClick("/contact-us");
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                onClick={() => {
                  setMenuOpen(false);
                  handleNavClick("/about-us");
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => {
                  setMenuOpen(false);
                  handleNavClick("/blog");
                }}
              >
                Blogs
              </NavLink>
            </li>
          </ul>

          <span>
            <NavLink
              to="/checkout/no-items"
              onClick={() => {
                setMenuOpen(false);
                handleNavClick("/checkout/no-items");
              }}
            >
              Checkout
            </NavLink>
            <IoBagCheckOutline />
          </span>
        </nav>
      )}
    </>
  );
};

export default Navbar;