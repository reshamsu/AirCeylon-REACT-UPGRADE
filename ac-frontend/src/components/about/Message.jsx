import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import founderImage from "../../assets/person.jpeg";

const Message = () => {
  return (
    <div className="bg-[linen] text-gray-900 py-16 px-4">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="bg-gray-100 rounded-2xl shadow-md p-8 md:p-12">
          <div className="text-md md:text-md space-y-4 relative">
            <p className="text-[#a87c47] font-bold text-lg">
              <FaQuoteLeft className="inline-block mr-3 mb-1" />
              A Message from Our Founder
            </p>

            <p>
              When I came up with Air Ceylon, it wasn’t just about travel — it
              was about transformation.
            </p>
            <p>
              I saw and experienced the challenges people face when navigating
              new journeys: visas, immigration, education, transitions, and the
              uncertainties that follow. Too often, these experiences were
              stressful, discouraging, and impersonal. The mission for Air Ceylon
              was born to change that.
            </p>
            <p>
              Our vision is to become Sri Lanka’s main travel and transition hub
              — a place where your journey begins with clarity, support, and
              confidence. Whether you're taking flight for opportunity,
              education, or a new life abroad, we’re here to walk with you every
              step of the way. From expert visa services and immigration
              consultancy to IELTS training, travels & tours, air ticketing, and
              post-arrival (transition) support like accommodation, jobs, and
              lifestyle integration — we believe in going the extra mile, even
              after you land.
            </p>
            <p>
              At Air Ceylon, we are building more than a service. We’re building
              a bridge — between countries, between people, and between dreams
              and reality.
              <FaQuoteRight className="inline-block ml-3 mb-1 text-[#a87c47]" />
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={founderImage}
              alt="Founder & CEO"
              className="w-20 h-20 rounded-full object-cover border border-[#a87c47]"
            />
            <div>
              <h3 className="font-bold text-lg">Founder & CEO</h3>
              <p className="text-md text-gray-600">Air Ceylon International</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
