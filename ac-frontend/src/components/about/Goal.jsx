import React from "react";
import { Container } from "@mui/material";

import VisionImg from "../../assets/vision.jpg";
import MissionImg from "../../assets/mission.jpg";
import VisionWatermark from "../../assets/VisionW.png";
import MissionWatermark from "../../assets/MissionW.png";

const Goal = () => {
  return (
    <div className="bg-white text-gray-800 py-20 px-4" id="goal">
      <Container maxWidth="lg">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="relative w-full md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <img
              src={VisionWatermark}
              alt="Vision Watermark"
              className="absolute top-0 left-0 w-32 opacity-10"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#a87c47]">Vision</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              "To be the international hub of Sri Lanka as the leader of Travel & Tourism."
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={VisionImg}
              alt="Vision"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <img
              src={MissionImg}
              alt="Mission"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px]"
            />
          </div>
          <div className="relative w-full md:w-1/2 md:pl-12">
            <img
              src={MissionWatermark}
              alt="Mission Watermark"
              className="absolute top-0 left-0 w-32 opacity-10"
            />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-[#a87c47]">Mission</span>
            </h2>
            <p className="text-lg font-medium leading-relaxed">
              "To navigate new opportunities smoothly with ease and confidence as
              you embark onto your next chapter."
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Goal;
