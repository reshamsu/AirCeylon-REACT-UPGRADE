import React from "react";
import Hero from "../components/service/notarization/Hero";
import Definitions from "../components/service/notarization/Definitions";
import ForWhom from "../components/service/notarization/ForWhom";
import Documentation from "../components/service/notarization/Documentation";
import Steps from "../components/service/notarization/Steps";
import Testimonials from "../components/service/notarization/Testimonials";
import FAQ from "../components/service/notarization/FAQ";

const Notarization = () => {
  return (
    <>
      <Hero />
      <Definitions />
      <ForWhom />
      <Documentation />
      <Steps />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Notarization;
