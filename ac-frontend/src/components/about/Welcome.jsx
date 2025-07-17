import React from "react";
import about from "../../assets/aboutus.png";

const Welcome = () => {
  return (
    <div className="bg-[linen] text-black py-16 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
            About <span className="text-[#a87c47]">Us</span>
          </h1>
          <p className="font-semibold text-sm mb-4">
            Air Ceylon International isn’t just about travel — we are about your
            entire journey.
          </p>

          <div className="space-y-4 text-gray-800">
            <p>
              As Sri Lanka’s emerging hub for complete travel and transition
              services, we go far beyond flights. From VISA Service, Immigration
              Consultancy, and IELTS training through our EPT Academy, to travel
              & tours planning, Notarization, and Air Ticketing — we are your
              friendly neighborhood travel partner every step of the way.
            </p>
            <p>
              But our commitment doesn’t stop at the Arrivals. We go the extra
              mile to help you settle in with accommodation support, job
              connections, community building, and lifestyle management,
              ensuring confidence in navigating your new chapter.
            </p>
            <p>
              Powered by expert partnerships and streamlined processes, Air
              Ceylon International is reimagining what it means to move, live,
              and thrive across borders — where every journey begins with care,
              clarity, and confidence.
            </p>
          </div>
        </div>

        <div className="flex-1 w-full lg:w-auto">
          <img
            src={about}
            alt="About Air Ceylon"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
