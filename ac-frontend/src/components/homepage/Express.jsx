import React from "react";
import { Link } from "react-router-dom";

// Images
import express1 from "../../assets/express1.png";
import express2 from "../../assets/express2.png";
import express3 from "../../assets/express3.png";

const expressOptions = [
  {
    title: "For Inquiries / Consultations",
    button: "Call Us",
    iconPng: express1,
    phone: "+94760301141",
  },
  {
    title: "To Set an Appointment For Visit / Service",
    button: "Book Now",
    iconPng: express2,
    phone: "+94760301141",
  },
  {
    title: "To Begin IELTS Training",
    button: "Register Now",
    iconPng: express3,
    phone: "+94760301141",
    // direct: "/checkout",
  },
];

const Express = () => {
  return (
    <section className="bg-[linen] text-black px-4 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-[#a87c47] font-semibold text-base md:text-lg uppercase tracking-wider">
          Express
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">
          Express Lane
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 p-6">
          {expressOptions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl hover:shadow-xl transition duration-300 ease-in-out p-6 flex flex-col items-center text-center justify-between"
            >
              <img
                src={item.iconPng}
                alt={item.button}
                className="w-28 h-28 object-contain mb-4"
              />
              <p className="text-md font-medium text-gray-800 mb-6 px-2">
                {item.title}
              </p>
              {item.phone ? (
                <a href={`tel:${item.phone}`} className="w-full">
                  <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full py-3 rounded-xl text-white font-semibold text-base transition">
                    {item.button}
                  </button>
                </a>
              ) : (
                <Link to={item.direct || "#"} className="w-full">
                  <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full py-3 rounded-xl text-white font-semibold text-base transition">
                    {item.button}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Express;
