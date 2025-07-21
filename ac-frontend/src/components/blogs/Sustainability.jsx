import React from "react";
import { Link } from "react-router-dom";

import ethicalIcon from "../../assets/ethical.png";
import proactiveIcon from "../../assets/proactive.png";

const Sustainability = () => {
  const cards = [
    {
      title: "Our Values",
      description:
        "We lead with honesty, integrity, and smart innovation. Every service we deliver is built on trust, ethics, and forward-thinking tech.",
      icon: ethicalIcon,
      link: "/about#values",
    },
    {
      title: "Our Green Practices",
      description:
        "Our initiatives drive sustainable growth and community impact. We focus on eco-conscious operations and social responsibility.",
      icon: proactiveIcon,
      link: "/about#initiatives",
    },
  ];

  return (
    <div className="text-gray-800 px-4 py-20 bg-gray-50">
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-[#a87c47] font-bold text-xl">CSR</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-4 pb-4">
          Our Values <span className="text-[#a87c47]">& Practices</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 m-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex flex-col items-center justify-between"
            >
              <img className="w-[100px] mb-4" src={card.icon} alt={card.title} />
              <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-700">{card.description}</p>
              <Link to={card.link} className="w-full">
                <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full rounded-xl font-semibold text-lg py-2 mt-6 text-white transition">
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
