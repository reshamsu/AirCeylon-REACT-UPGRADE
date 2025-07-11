import React from "react";
import { Container } from "@mui/material";
import tutor from "../../../assets/tutor.png";

const EPTMonologue = () => {
  return (
    <div className="bg-black/90 text-black py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Tutor Section */}
          <div className="flex flex-col items-center lg:items-center lg:flex-row gap-6">
            <img
              src={tutor}
              alt="Certified IELTS Tutor"
              className="w-44 h-44 object-cover rounded-full border-4 border-amber-500 shadow-lg"
            />
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-3">
                <span className="text-[#c89238]">Tasha Vanhoff</span>
              </h1>
              <p className="text-white">
                - Certified IELTS Tutor{" "}
                <span className="text-[#c89238]">(Brand Partner)</span>
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-1/2 text-white">
            <div className="bg-black-800 rounded-xl text-center py-6 shadow-md">
              <h1 className="text-5xl font-bold text-[#c89238]">7+</h1>
              <p className="font-medium mt-4">Years Experience</p>
            </div>
            <div className="bg-black-800 rounded-xl text-center py-6 shadow-md">
              <h1 className="text-5xl font-bold text-[#c89238]">100+</h1>
              <p className="font-medium mt-4">Students Trained</p>
            </div>
            <div className="bg-black-800 rounded-xl text-center py-6 shadow-md">
              <h1 className="text-5xl font-bold text-[#c89238]">80%</h1>
              <p className="font-medium mt-4">Pass Rate (1st Time)</p>
            </div>
          </div>
        </div>

        {/* Monologue Text */}
        <div className="mt-12 max-w-4xl mx-auto px-6 text-center text-white space-y-6">
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
