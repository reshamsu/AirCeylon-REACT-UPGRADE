import React from "react";
import partnerships from "../../assets/partnerships.png";
import standards from "../../assets/standards.png";
import experience from "../../assets/experience.png";
import travelHub from "../../assets/travel-hub.png";

const Analytics = () => {
  return (
    <div className="text-white px-4 py-20 bg-black/90">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[#c89238] font-bold text-xl">OUR EXPERTISE</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-4">
          Your Journey, Our Responsibility.
        </h1>
        <h4 className="md:text-xl text-xl font-semibold my-6">
          Navigating Your Experience with Confidence and Ease
        </h4>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 m-6">
          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="w-[100px] mb-4" src={partnerships} alt="Expert Partnerships" />
              <h2 className="text-xl font-semibold mb-2">Expert Partnerships</h2>
              <p className="text-sm text-gray-300">
                Trusted Licensed Professionals to ensure Your Experience is in the Best of Hands.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="w-[100px] mb-4" src={standards} alt="Exceeding Standards" />
              <h2 className="text-xl font-semibold mb-2">Exceeding Standards</h2>
              <p className="text-sm text-gray-300">
                Commitment to High Quality Service & Support Beyond the Boundaries by Flying the Extra Mile for You.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="w-[100px] mb-4" src={experience} alt="Effortless Experience" />
              <h2 className="text-xl font-semibold mb-2">Effortless Experience</h2>
              <p className="text-sm text-gray-300">
                Dedicated to Implementing a Smart, Easy, Simple & Seamless Experience as much as Your Journey.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img className="w-[100px] mb-4" src={travelHub} alt="Exclusive Travel Hub" />
              <h2 className="text-xl font-semibold mb-2">Exclusive Travel Hub</h2>
              <p className="text-sm text-gray-300">
                Determined to Provide Exclusive Services All in One Place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
