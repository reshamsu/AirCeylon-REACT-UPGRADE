import React from "react";
import { Link } from "react-router-dom";

// Import images
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
    <div className="bg-[linen] text-black px-4 py-16">
      <div className="max-w-[1240px] mx-auto text-center">
        <p className="text-[#a87c47] font-bold text-xl">EXPRESS</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold my-2">
          Express Lane
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pt-12">
          {expressOptions.map((item, index) => (
            <div
              key={index}
              className="bg-transparent rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {item.iconPng && (
                <img
                  src={item.iconPng}
                  alt={item.button}
                  className="w-[120px] mb-4"
                />
              )}

              <h4 className="text-lg font-semibold mb-4">{item.title}</h4>

              {item.phone ? (
                <a href={`tel:${item.phone}`} className="w-full">
                  <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full rounded-2xl font-semibold text-lg py-3 text-white transition">
                    {item.button}
                  </button>
                </a>
              ) : (
                <Link to={item.direct || "#"} className="w-full">
                  <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full rounded-2xl font-semibold text-lg py-3 text-white transition">
                    {item.button}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Express;
