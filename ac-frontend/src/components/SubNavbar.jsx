import React, { useState } from "react";
import { Container } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
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
    <Container className="py-3">
      {/* Desktop View */}
      <nav className="hidden md:flex justify-center flex-wrap gap-6 text-sm font-medium">
        {regions.map((region) => (
          <div key={region.name} className="relative group">
            <button
              onClick={() => toggleRegion(region.name)}
              className="flex items-center gap-1 text-gray-800 hover:text-[#c89238] transition"
            >
              {region.name}
              <IoChevronDownOutline className="mt-[2px]" />
            </button>

            {/* Dropdown */}
            {openRegion === region.name && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-md z-50 p-2 space-y-1">
                {region.countries.map((country) => (
                  <li key={country}>
                    <NavLink
                      onClick={() => handleRedirectToRegion(region.name)}
                      className="block px-3 py-1 rounded hover:bg-[#f3f3f3] text-gray-700"
                    >
                      {country}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden block">
        <div className="border border-gray-50 rounded-xl overflow-hidden">
          <button
            onClick={toggleMobileMenu}
            className="w-full flex items-center justify-between px-4 py-3 bg-[#f8f8f8] text-gray-700 font-medium"
          >
            Countries <IoChevronDownOutline />
          </button>

          {mobileOpen && (
            <div className="bg-white border-t border-gray-200 p-6 space-y-4">
              {regions.map((region) => (
                <div key={region.name}>
                  <h4 className="text-md font-semibold text-[#c89238] mb-2">
                    {region.name}
                  </h4>
                  <ul className="pl-3 space-y-1">
                    {region.countries.map((country) => (
                      <li key={country}>
                        <button
                          onClick={() => handleRedirectToRegion(region.name)}
                          className="text-sm font-medium text-gray-700 hover:underline"
                        >
                          {country}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default SubNavbar;
