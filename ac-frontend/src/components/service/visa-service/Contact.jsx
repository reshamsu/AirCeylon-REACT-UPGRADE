import React from "react";
import { FiSend } from "react-icons/fi";
import { Container } from "@mui/material";

const VisaContact = () => {
  return (
    <div className=" bg-white text-black px-4 py-16 flex flex-col">
      <Container maxWidth="lg" className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          VISA <span className="text-[#a87c47]">Application Form.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          We're here to assist you with any inquiries about our solutions.
        </p>
      </Container>

      <Container maxWidth="md">
        <div className="bg-gray-50 shadow-lg rounded-xl p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              VISA Service Form
            </h2>
            <p className="text-gray-600">
              Fill in the form below to start your application.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-4 font-medium">First Name (Passport)</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                />
              </div>
              <div>
                <label className="block mb-4 font-medium">Last Name (Passport)</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-4 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                />
              </div>
              <div>
                <label className="block mb-4 font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block mb-4 font-medium">Choose Country</label>
                <select className="w-full border border-gray-200 p-3 rounded-lg">
                  <option>Select a Country</option>
                  {[
                    "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "China", "Egypt", "Georgia", "India", "Indonesia", "Japan",
                    "Jordan", "Kuwait", "Lebanon", "Maldives", "Malaysia", "Mauritius", "Morocco", "Nepal", "Oman", "Pakistan",
                    "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Thailand", "Tunisia", "Turkey", "UAE", "Uzbekistan", "Vietnam"
                  ].map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="adults" className="block mb-4 font-medium">No. of Adults</label>
                <select id="adults" className="w-full border border-gray-200 p-3 rounded-lg">
                  <option>Select</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num}>{`${num} Adult${num > 1 ? "s" : ""}`}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="children" className="block mb-4 font-medium">No. of Children</label>
                <select id="children" className="w-full border border-gray-200 p-3 rounded-lg">
                  <option>Select</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num}>{`${num} Children`}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-4 font-medium">Additional Info</label>
              <textarea
                placeholder="Message here..."
                rows={4}
                className="w-full border border-gray-200 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-medium text-lg bg-[#a87c47] text-white px-8 py-4 rounded-xl shadow hover:bg-[#b17a2a] transition"
              >
                Submit Now <FiSend className="text-xl" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default VisaContact;
