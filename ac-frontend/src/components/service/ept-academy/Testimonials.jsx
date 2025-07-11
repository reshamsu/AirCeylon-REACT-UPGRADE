import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    text: `Miss Tasha was very helpful, gained a lot of tips and she recommended really good resources to practice IELTS, helped me gain a scope of the whole test in a short period of time. Very satisfied with her work and would definitely recommend.`,
    author: "IELTS Student",
  },
  {
    text: `I had a good experience with the IELTS classes I attended. Tasha was incredibly knowledgeable and provided tailored guidance that helped me improve all areas including reading, writing, listening, and speaking. I passed!`,
    author: "IELTS Student",
  },
  {
    text: `I wanted a band score of 6.5 for the IELTS, and my English was very weak. Within a very short time, Tasha helped me improve my English skills more than I expected. Highly recommended!`,
    author: "IELTS Student",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#c89238] font-bold text-xl">TESTIMONIALS</p>
          <h1 className="text-2xl md:text-4xl font-bold flex justify-center items-center gap-3 my-4">
            What Our <span className="text-[#c89238]">Students Say</span>
            <FaCommentDots className="text-[#c89238]" size={40} />
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3 m-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-md p-6 flex flex-col justify-between gap-4 hover:shadow-lg transition"
            >
              <div className="text-sm leading-relaxed relative text-white">
                <FaQuoteLeft className="inline-block text-[#c89238] mr-2" size={20}/>
                {item.text}
                <FaQuoteRight className="inline-block text-[#c89238] ml-2" size={20}/>
              </div>
              <p className="text-sm text-gray-300 mt-3 font-medium italic">
                — {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
