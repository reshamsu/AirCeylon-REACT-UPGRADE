import React from "react";
import { Container } from "@mui/material";

// Proper media imports
import operationIcon from "../../assets/operation.png";
import handshakeIcon from "../../assets/handshake.png";
import educationIcon from "../../assets/education.png";
import officeIcon from "../../assets/office-building.png";

const Initiatives = () => {
  return (
    <div className="text-white px-4 py-20 bg-black/90">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[#c89238] font-bold text-xl">CSR</p>
        <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold my-4 px-4 pb-6">
          Sustainability <span className="text-[#c89238]">Initiatives</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-8">
          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-start justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[100px] mb-4"
                src={operationIcon}
                alt="Digital Operations Icon"
              />
              <h1 className="text-lg font-semibold mb-2 text-[#c89238]">
                Digital-First Operations
              </h1>
              <p className="text-sm text-gray-300">
                We prioritize digital documentation, e-signatures, and online
                processes to reduce paper waste and carbon-heavy administrative
                work.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[100px] mb-4"
                src={handshakeIcon}
                alt="Eco Partners Icon"
              />
              <h2 className="text-lg font-semibold mb-2 text-[#c89238]">
                Eco-Conscious Partners
              </h2>
              <p className="text-sm text-gray-300">
                We collaborate with expert partners committed to sustainable
                tourism and green practices.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[100px] mb-4"
                src={educationIcon}
                alt="Community Support Icon"
              />
              <h2 className="text-lg font-semibold mb-2 text-[#c89238]">
                Community Transition & Support
              </h2>
              <p className="text-sm text-gray-300">
                We support migrant communities with long-term transition
                services that promote local engagement, sustainable living, and
                inclusive development.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[100px] mb-4"
                src={officeIcon}
                alt="Green Office Icon"
              />
              <h2 className="text-lg font-semibold mb-2 text-[#c89238]">
                Green Office Culture
              </h2>
              <p className="text-sm text-gray-300">
                We implement energy-efficient practices at our offices,
                including recycling programs, minimal single-use plastics, and
                remote work flexibility to reduce commuting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
