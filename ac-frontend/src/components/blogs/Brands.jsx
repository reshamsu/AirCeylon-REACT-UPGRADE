import React from "react";
import { Container } from "@mui/material";

import myHiveLogo from "../../assets/myhive.png";
import googleLogo from "../../assets/google.png";
import dhlLogo from "../../assets/dhl.jpg";
import wspaceLogo from "../../assets/Wspace.png";
import ieltsLogo from "../../assets/ielts.jpg";
import redSealLogo from "../../assets/redsealnotary.webp";

const brandLogos = [
  { image: myHiveLogo, name: "myHive" },
  { image: googleLogo, name: "Google" },
  { image: dhlLogo, name: "DHL" },
  { image: wspaceLogo, name: "WSPACE" },
  { image: ieltsLogo, name: "IELTS" },
  { image: redSealLogo, name: "Red Seal Notary" },
];

const Brands = () => {
  return (
    <div className="landing-brands">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            Brands We <span className="gradient-text-blue">Work With</span>
          </h1>
        </div>
        <div className="container-lg">
          {brandLogos.map((brand, index) => (
            <div className="card" key={index}>
              <img src={brand.image} alt={brand.name} title={brand.name} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Brands;
