import React from "react";
import leafIcon from "../../../assets/leaf.png";
import studentNotary from "../../../assets/student-notary.webp";
import notarySeal from "../../../assets/notary-seal.jpeg";
import canadaNotaries from "../../../assets/canada-notaries.jpg";

const audienceList = [
  {
    title: "Students with Canadian Affiliated Certificates and Documents",
    image: studentNotary,
  },
  {
    title: "Canadian Affiliated Academic Institutions in Sri Lanka",
    image: notarySeal,
  },
  {
    title: "Canadian Academic Bodies in Sri Lanka",
    image: canadaNotaries,
  },
];

const ToWhom = () => {
  return (
    <section className="bg-white text-black py-20 px-4" id="target-audience">
      <div className="max-w-[1240px] mx-auto px-8 text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Who is <span className="text-[#a87c47]">it for?</span>
        </h1>
        <p className="text-lg font-medium text-gray-700">
          The key to notarize your documents starts here.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {audienceList.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg group transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition duration-300 group-hover:brightness-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-60 z-10 flex flex-col justify-between p-6">
              <img src={leafIcon} alt="Leaf Icon" className="w-8 h-8" />
              <h2 className="text-black text-lg font-bold  mt-auto">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToWhom;
