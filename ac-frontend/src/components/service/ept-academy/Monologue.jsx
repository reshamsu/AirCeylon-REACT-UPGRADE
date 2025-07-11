import React from "react";
import { Container } from "@mui/material";
import tutor from "../../../assets/tutor.png";

const EPTMonologue = () => {
  return (
    <div className="bg-black/90 text-black py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Tutor Section */}
          <div className="flex flex-col items-center lg:items-center lg:flex-row gap-6">
            <img
              src={tutor}
              alt="Certified IELTS Tutor"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold">
                <span className="text-[#a87c47]">Tasha Vanhoff</span>
              </h1>
              <p className="text-white">
                - Certified IELTS Tutor{" "}
                <span className="text-[#a87c47]">(Brand Partner)</span>
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-1/2 mt-10 lg:mt-0 text-white">
            <div className="bg-gray-800 rounded-xl text-center p-6 shadow-md">
              <h1 className="text-3xl font-bold text-[#a87c47]">7+</h1>
              <p className="font-medium mt-2">Years Experience</p>
            </div>
            <div className="bg-gray-800 rounded-xl text-center p-6 shadow-md">
              <h1 className="text-3xl font-bold text-[#a87c47]">100+</h1>
              <p className="font-medium mt-2">Students Trained</p>
            </div>
            <div className="bg-gray-800 rounded-xl text-center p-6 shadow-md">
              <h1 className="text-3xl font-bold text-[#a87c47]">80%</h1>
              <p className="font-medium mt-2">Pass Rate (1st Time)</p>
            </div>
          </div>
        </div>

        {/* Monologue Text */}
        <div className="mt-12 max-w-4xl mx-auto text-center text-white space-y-4">
          <p>
            “I am an Educator – I teach IELTS and Spoken English among other subjects, with over 6+ years of experience as an online tutor. I enjoy teaching, and being able to witness a student progress in their education is a gift indeed.”
          </p>
          <p>
            “Through my many years of teaching, I have appreciated every opportunity I've gotten and each connection I've formed along the way. I look forward to more teaching opportunities in the future.”
          </p>
        </div>
      </Container>
    </div>
  );
};

export default EPTMonologue;
