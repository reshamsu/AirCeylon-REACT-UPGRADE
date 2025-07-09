import React, { useState } from "react";
import { Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const regions = [
  {
    name: "Europe",
    countries: ["Belarus", "Georgia", "Azerbaijan", "Turkiye"],
  },
  {
    name: "East Asia",
    countries: ["China", "Japan", "South Korea"],
  },
  {
    name: "South Asia",
    countries: ["Bangladesh", "India", "Maldives", "Nepal", "Pakistan"],
  },
  {
    name: "South-East Asia",
    countries: [
      "Vietnam",
      "Indonesia",
      "Malaysia",
      "Philippines",
      "Singapore",
      "Thailand",
    ],
  },
  {
    name: "Middle East",
    countries: [
      "Bahrain",
      "Egypt",
      "Jordan",
      "Kuwait",
      "Lebanon",
      "Oman",
      "Qatar",
      "Saudi Arabia",
      "UAE",
      "Uzbekistan",
    ],
  },
  {
    name: "Africa",
    countries: ["Mauritius"],
  },
];

const SubNavbar = () => {
  const [openRegion, setOpenRegion] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleRegion = (regionName) => {
    setOpenRegion(openRegion === regionName ? null : regionName);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMenus = () => {
    setOpenRegion(null);
    setMobileOpen(false);
  };

  const handleRedirectToRegion = (regionName) => {
    closeMenus();
    const id = regionName.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/visa-service#${id}`);
  };

  return (
    <Container>
      <nav className="desktop-subnav">
        <ul className="subnav-list">
          {regions.map((region) => (
            <li
              key={region.name}
              className={`dropdown ${openRegion === region.name ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleRegion(region.name)}
              >
                {region.name} <IoChevronDownOutline />
              </span>
              {openRegion === region.name && (
                <ul className="dropdown-menu">
                  {region.countries.map((country) => (
                    <li key={country}>
                      <NavLink
                        className="nav-link"
                        onClick={() => handleRedirectToRegion(region.name)}
                      >
                        {country}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mobile-subnav">
        <ul className="subnav-list">
          <li className={`dropdown ${mobileOpen ? "open" : ""}`}>
            <span
              className="nav-link dropdown-toggle"
              onClick={toggleMobileMenu}
            >
              Countries <IoChevronDownOutline />
            </span>
            {mobileOpen && (
              <ul className="dropdown-menu mobile-grid">
                {regions.map((region) => (
                  <li key={region.name} className="region-block">
                    <strong className="region-title">{region.name}</strong>
                    <ul className="dropdown-submenu">
                      {region.countries.map((country) => (
                        <li key={country}>
                          <button
                            className="nav-link"
                            onClick={() => handleRedirectToRegion(region.name)}
                          >
                            {country}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SubNavbar;
