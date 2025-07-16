import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { FiSend } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("form");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 👇 Auto-switch to Book Appointment tab if URL hash is #appointment
  useEffect(() => {
    if (location.hash === "#appointment") {
      setActiveTab("bookappointment");

      setTimeout(() => {
        const element = document.getElementById("appointment");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Delay to wait for rendering
    }
  }, [location]);

  useEffect(() => {
    const valid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      emailRegex.test(email) &&
      phone.trim() !== "" &&
      service !== "" &&
      service !== "Select a Service";

    setIsValid(valid);
  }, [firstName, lastName, email, phone, service]);

  const tabButtons = [
    { key: "form", label: "Contact Form" },
    { key: "bookappointment", label: "Book Appointment" },
  ];

  const iframeSources = {
    bookappointment:
      "https://api.leadconnectorhq.com/widget/booking/MuBKootQtAyenTNNfQVQ",
  };

  return (
    <div className="py-16 bg-gray-50" id="appointment">
      <Container className="lg">
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-6 gap-2.5">
          {tabButtons.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-3 rounded-xl font-medium transition ${
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
                  We're here to assist you with any inquiries about our
                  solutions.
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (isValid) {
                    alert("Form submitted!");
                  }
                }}
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                      required
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 font-medium mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-md text-gray-700 font-medium mb-3">
                      Select Service
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                      required
                    >
                      <option value="">Select a Service</option>
                      <option>General Inquiry</option>
                      <option>Book an Appointment</option>
                      <option>Register for a Course</option>
                      <option>VISA Application</option>
                      <option>Transition Support</option>
                      <option>Notarization</option>
                      <option>Other Inquires</option>
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
                    placeholder="Kindly provide any more information regarding your inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c89238]"
                  />
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`inline-flex items-center gap-2 font-medium text-lg px-8 py-4 rounded-xl shadow transition ${
                      isValid
                        ? "bg-[#a87c47] text-white hover:bg-[#b17a2a]"
                        : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
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
                className="w-full h-full border-none rounded-xl shadow-md"
                scrolling="yes"
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
