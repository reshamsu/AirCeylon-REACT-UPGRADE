import React from "react";
import { FaScaleUnbalanced, FaHandsHolding } from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";

const values = [
  {
    icon: <FaScaleUnbalanced className="text-6xl text-[#c89238]" />,
    title: "Integrity",
    description:
      "We act with honesty, accountability, and ethical responsibility in every service we deliver.",
  },
  {
    icon: <PiLightbulbFilamentBold className="text-6xl text-[#c89238]" />,
    title: "Innovation",
    description:
      "We embrace modern solutions, smart systems, and continuous improvement to make every journey seamless.",
  },
  {
    icon: <FaHandsHolding className="text-6xl text-[#c89238]" />,
    title: "Initiative",
    description:
      "We proactively solve challenges, anticipate needs, and go beyond expectations — before, during, and after travel.",
  },
  {
    icon: <LuHeartHandshake className="text-6xl text-[#c89238]" />,
    title: "Inspiration",
    description:
      "We aim to inspire confidence, ambition, and new beginnings to everyone.",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-[#19233e] text-white py-20 px-4" id="values">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-14">
          Our Core <span className="text-[#c89238]">Values</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1c2746] shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex flex-col items-center justify-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-2xl text-white font-bold mb-4">{item.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
