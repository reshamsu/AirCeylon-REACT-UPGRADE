import React from "react";
import accom from "../../../assets/accom.png";
import jobs from "../../../assets/jobs.png";
import community from "../../../assets/community.png";
import lifestyle from "../../../assets/lifestyle.png";

const Analytics = () => {
  return (
    <div className="text-white px-4 py-20 bg-black/90">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[#c89238] font-bold text-xl">FACILITY</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-4 pb-4">
          What <span className="text-[#c89238]">We Offer</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6 m-6">
          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img className="w-[100px] mb-4" src={accom} alt="Accommodation" />
              <h1 className="text-lg font-semibold mb-2">Accommodation</h1>

              <p className="text-sm text-gray-300">
                Trusted Licensed Professionals to ensure Your Experience is in
                the Best of Hands.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img className="w-[100px] mb-4" src={jobs} alt="Jobs" />
              <h1 className="text-lg font-semibold mb-2">Jobs</h1>
              <p className="text-sm text-gray-300">
                Commitment to High Quality Service & Support Beyond the
                Boundaries by Flying the Extra Mile for You.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img className="w-[100px] mb-4" src={community} alt="Community" />
              <h1 className="text-lg font-semibold mb-2">Community</h1>
              <p className="text-sm text-gray-300">
                Dedicated to Implementing a Smart, Easy, Simple & Seamless
                Experience as much as Your Journey.
              </p>
            </div>
          </div>

          <div className="bg-white/2 shadow-lg rounded-xl p-8 hover:scale-105 transition-transform ease-in-out duration-300 flex items-center justify-center">
            <div className="flex flex-col items-center text-center">
              <img
                className="w-[100px] mb-4"
                src={lifestyle}
                alt="Lifestyle Management"
              />
              <h1 className="text-lg font-semibold mb-2">Lifestyle Management</h1>
              <p className="text-sm text-gray-300">Determined to Provide Exclusive Services All in One Place.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
