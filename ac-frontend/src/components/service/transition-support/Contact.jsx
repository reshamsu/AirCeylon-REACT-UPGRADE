import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="bg-[linen] text-black py-16 px-6" id="contact">
        <div className="max-w-[900px] mx-auto bg-gray-50 rounded-2xl shadow-md p-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact <span className="text-[#a87c47]">Transition Support</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're open{" "}
            <span className="font-semibold text-black">7 days a week </span>all
            to assist you with any inquiries about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+14372543077"
              className="bg-[#a87c47] hover:bg-[#946f3e] text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-md"
            >
              <IoCall size={20} /> Call Us
            </a>

            <a
              href="mailto:info@airceylonint.com"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition shadow-md"
            >
              <MdEmail size={20} /> Email Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
