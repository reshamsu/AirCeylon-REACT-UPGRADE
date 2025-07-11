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

const VisaWelcome = () => {
  return (
    <section className="bg-white text-black py-16 px-4" id="target-audience">
      <div className="max-w-[1240px] mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Who is <span className="text-[#a87c47]">it for?</span>
        </h1>
        <p className="text-lg font-medium text-gray-700">
          The key to notarize your documents starts here.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {audienceList.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-end text-center transition"
          >
            <img src={leafIcon} alt="Leaf Icon" className="w-8 mb-4" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisaWelcome;
