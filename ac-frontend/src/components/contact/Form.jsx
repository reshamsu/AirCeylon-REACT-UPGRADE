import React, { useState } from "react";
import { Container } from "@mui/material";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState("form");

  const tabButtons = [
    { key: "form", label: "Contact Form" },
    { key: "bookappointment", label: "Book Appointment" },
  ];

  const iframeSources = {
    bookappointment:
      "https://api.leadconnectorhq.com/widget/booking/MuBKootQtAyenTNNfQVQ",
  };

  return (
    <div className=" py-16 bg-gray-50">
      <Container className="lg">
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-6 gap-2.5">
          {tabButtons.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-3 rounded-xl  font-medium transition ${
                activeTab === tab.key
                  ? "bg-[#a87c47] text-white shadow-md"
                  : "bg-[linen] text-[#a87c47] hover:bg-[#c89238]/10"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form or Appointment */}
        <div className="bg-transparent m-2">
          {activeTab === "form" ? (
            <div className="p-8 shadow-md rounded-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold">
                  Send us a <span className="text-[#a87c47]">Message</span>
                </h2>
                <p className="text-gray-600 mt-3">
                  We're here to assist you with any inquiries about our solutions.
                </p>
              </div>

              <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                    />
                  </div>
                  <div>
                    <label className="block text-md text-gray-700 font-medium mb-3">
                      Preferred Support System
                    </label>
                    <select className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]">
                      <option>Call for Inquiries</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-md text-gray-700 font-medium mb-3">
                    Additional Info
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Message here..."
                    className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 font-medium text-lg bg-[#a87c47] text-white px-8 py-4 rounded-xl shadow hover:bg-[#b17a2a] transition"
                  >
                    Send Message <FiSend className="text-xl" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="w-full h-[900px]">
              <iframe
                src={iframeSources[activeTab]}
                title="Appointment Booking"
                className="w-full h-full border-none rounded-lg shadow-md"
                scrolling="yes"
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
