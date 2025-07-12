import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    label: "Business Client",
    text: `At Hive Colombo, we navigate through any travel related activities seamlessly and confidently via Air Ceylon. Their expertise, partnerships and commitment is unique but more importantly a reliable & valuable travel solution.`,
    author: "Hive Colombo HQ",
  },
  {
    label: "EPT Academy",
    text: `I wanted a band score of 6.5 for the IELTS, and my English was very weak. Within a very short time, Tasha helped me improve my English skills more than I expected. Highly recommended!`,
    author: "IELTS Student",
  },
  {
    label: "Notarization",
    text: `The level of personalized service Air Ceylon provides is unparalleled. Their attention to detail, swift communication, and thoughtful recommendations made my corporate retreat both productive and enjoyable. Highly recommended for premium travel needs.`,
    author: "Graduate - Canadian College (Sri Lanka)",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white text-gray-800 py-14 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c89238] font-bold text-xl">TESTIMONIALS</p>
          <h1 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-2 my-4">
            Experience with <span className="text-[#c89238]">Air Ceylon</span>
            <FaCommentDots className="text-[#c89238]" size={40}/>
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-3 m-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-4 hover:shadow-md transition"
            >
              <p className="text-lg font-semibold tracking-wide">
                {item.label}
              </p>
              <div className="text-[15px] leading-relaxed relative">
                <FaQuoteLeft className="inline-block text-[#c89238] mr-2" size={24} />
                {item.text}
                <FaQuoteRight className="inline-block text-[#c89238] ml-2" size={24}/>
              </div>
              <p className="text-[#c89238] font-semibold text-sm mt-1">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
