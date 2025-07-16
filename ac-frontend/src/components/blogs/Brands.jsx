import React from "react";
import { Container } from "@mui/material";

import myHiveLogo from "../../assets/myhive.jpg";
import googleLogo from "../../assets/google.png";
import dhlLogo from "../../assets/dhl.jpg";
import wspaceLogo from "../../assets/Wspace.png";
import tashaLogo from "../../assets/tasha.jpg";
import ieltsLogo from "../../assets/ielts.jpg";
import redSealLogo from "../../assets/redsealnotary.webp";

const brandLogos = [
  { image: myHiveLogo, name: "myHive" },
  { image: googleLogo, name: "Google" },
  { image: dhlLogo, name: "DHL" },
  { image: wspaceLogo, name: "WSPACE" },
  { image: tashaLogo, name: "Tasha" },
  { image: ieltsLogo, name: "IELTS" },
  { image: redSealLogo, name: "Red Seal Notary" },
];

const Brands = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-4" id="brands">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            Brands We <span className="text-[#c89238]">Work With</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {brandLogos.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex justify-center"
              title={brand.name}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-36 h-30 object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
