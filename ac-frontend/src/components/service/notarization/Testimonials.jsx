import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4" id="airceylon-testimonials">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c89238] font-bold text-xl">TESTIMONIALS</p>
          <h1 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3 my-4">
            Experience with <span className="text-[#c89238]">Air Ceylon</span>
            <FaCommentDots className="text-[#c89238]" size={40} />
          </h1>
        </div>

        <div className="grid md:grid-cols-1 gap-8 px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-md p-8 flex flex-col justify-between gap-4 hover:shadow-lg transition">
            <p className="text-lg font-semibold text-[#c89238] mb-2">Notarization</p>
            <div className="text-md leading-relaxed relative text-white">
              <FaQuoteLeft className="inline-block text-[#c89238] mr-2" size={20} />
              The level of personalized service Air Ceylon provides is unparalleled. Their attention to detail, swift communication, and thoughtful recommendations made my corporate retreat both productive and enjoyable. Highly recommended for premium travel needs.
              <FaQuoteRight className="inline-block text-[#c89238] ml-2" size={20} />
            </div>
            <p className="text-sm text-gray-300 mt-3 font-medium italic">
              — Graduate, Canadian College (Sri Lanka)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
