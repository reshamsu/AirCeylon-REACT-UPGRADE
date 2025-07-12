import React from "react";
import partnerships from "../../assets/partnerships.png";
import standards from "../../assets/standards.png";
import experience from "../../assets/experience.png";
import travelHub from "../../assets/travel-hub.png";

const cardItems = [
  {
    img: partnerships,
    alt: "Expert Partnerships",
    title: "Expert Partnerships",
    desc: "Trusted Licensed Professionals to ensure your experience is in the best of hands.",
  },
  {
    img: standards,
    alt: "Exceeding Standards",
    title: "Exceeding Standards",
    desc: "Commitment to high quality service & support by flying the extra mile for you.",
  },
  {
    img: experience,
    alt: "Effortless Experience",
    title: "Effortless Experience",
    desc: "Smart, simple, and seamless systems built to make every step easy and smooth.",
  },
  {
    img: travelHub,
    alt: "Exclusive Travel Hub",
    title: "Exclusive Travel Hub",
    desc: "All-in-one travel & transition solutions — under one trusted platform.",
  },
];

const Analytics = () => {
  return (
    <section className="bg-black/90 text-white px-4 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-[#c89238] font-semibold text-base md:text-lg tracking-wider uppercase">
          Our Expertise
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
          Your Journey, Our Responsibility.
        </h1>
        <p className="text-lg md:text-xl font-medium mt-6 text-gray-200">
          Navigating Your Experience with Confidence and Ease
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-8">
          {cardItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/2 backdrop-blur-md shadow-xl rounded-2xl p-8 hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
