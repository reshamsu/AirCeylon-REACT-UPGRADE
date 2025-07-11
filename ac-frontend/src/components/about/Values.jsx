import React from "react";
import { FaScaleUnbalanced, FaHandsHolding } from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";

const values = [
  {
    icon: <FaScaleUnbalanced className="text-5xl text-[#a87c47]" />,
    title: "Integrity",
    description:
      "We act with honesty, accountability, and ethical responsibility in every service we deliver.",
  },
  {
    icon: <PiLightbulbFilamentBold className="text-5xl text-[#a87c47]" />,
    title: "Innovation",
    description:
      "We embrace modern solutions, smart systems, and continuous improvement to make every journey seamless.",
  },
  {
    icon: <FaHandsHolding className="text-5xl text-[#a87c47]" />,
    title: "Initiative",
    description:
      "We proactively solve challenges, anticipate needs, and go beyond expectations — before, during, and after travel.",
  },
  {
    icon: <LuHeartHandshake className="text-5xl text-[#a87c47]" />,
    title: "Inspiration",
    description:
      "We aim to inspire confidence, ambition, and new beginnings to everyone.",
  },
];

const CoreValues = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-4" id="values">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          Our Core <span className="text-[#a87c47]">Values</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-100 border border-gray-200 rounded-2xl shadow-md p-8 hover:shadow-lg transition flex flex-col items-center justify-around text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h2 className="text-xl text-gray-900 font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
