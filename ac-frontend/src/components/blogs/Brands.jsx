import React from "react";
import { Container } from "@mui/material";

import myHiveLogo from "../../assets/myhive.jpg";
import googleLogo from "../../assets/google.png";
import dhlLogo from "../../assets/dhl.jpg";
import tashaLogo from "../../assets/tasha.jpg";
import wspaceLogo from "../../assets/Wspace.png";
import ieltsLogo from "../../assets/ielts.jpg";
import redSealLogo from "../../assets/redsealnotary.webp";
import gcslLogo from "../../assets/GCSL.jpg";

const brandLogos = [
  { image: myHiveLogo, name: "myHive" },
  { image: googleLogo, name: "Google" },
  { image: dhlLogo, name: "DHL" },
  { image: wspaceLogo, name: "WSPACE" },
  { image: tashaLogo, name: "Tasha" },
  { image: ieltsLogo, name: "IELTS" },
  { image: redSealLogo, name: "Red Seal Notary" },
   { image: gcslLogo, name: "GCSL" },
];

const Brands = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-4" id="brands">
      <Container maxWidth="md">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Brands We <span className="text-[#c89238]">Work With</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex align-center justify-center"
              title={brand.name}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-fit h-30 object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
