import React from "react";
import { Container } from "@mui/material";
import Timeline from "../Timeline";

const Journey = () => {
  return (
    <section className="bg-[linen] py-16 px-4" id="journey">
      <Container maxWidth="md" className="text-center">
        <p className="text-[#a87c47] font-bold text-base md:text-lg uppercase tracking-wider">
          Timeline
        </p>
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold my-4">
          Our <span className="text-[#a87c47]">Journey</span>
        </h1>
        <p className="text-gray-500">Our journey from concept to execution.</p>
      </Container>

      <Timeline />
    </section>
  );
};

export default Journey;
