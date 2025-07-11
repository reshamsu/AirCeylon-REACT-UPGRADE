import React from "react";
import Hero from "../components/service/notarization/Hero";
import Terminology from "../components/service/notarization/Terminology";
import ForWhom from "../components/service/notarization/ForWhom";
import Documentation from "../components/service/notarization/Documentation";
import Breakdown from "../components/service/notarization/Breakdown";
import Testimonials from "../components/service/notarization/Testimonials";
import FAQ from "../components/service/notarization/FAQ";

const Notarization = () => {
  return (
    <>
      <Hero />
      <Terminology />
      <ForWhom />
      <Documentation />
      <Breakdown />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Notarization;
