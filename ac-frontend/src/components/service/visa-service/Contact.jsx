import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { Container } from "@mui/material";

const VisaContact = () => {
  // Form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const valid =
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      emailRegex.test(email) &&
      phone.trim() !== "" &&
      country !== "" &&
      country !== "Select a Country" &&
      adults !== "" &&
      adults !== "Select" &&
      children !== "" &&
      children !== "Select";

    setIsValid(valid);
  }, [firstName, lastName, email, phone, country, adults, children]);

  return (
    <div className="bg-gray-50 text-black px-4 py-16 flex flex-col">
      <Container maxWidth="lg" className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          VISA <span className="text-[#a87c47]">Application Form.</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          We're here to assist you with any inquiries about our solutions.
        </p>
      </Container>

      <Container maxWidth="lg">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">VISA Service Form</h2>
            <p className="text-gray-600">Fill in the form below to start your application.</p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (isValid) {
                alert("Form submitted!");
                // handle submit logic here
              }
            }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-4 font-medium">First Name (Passport)</label>
                <input
                  type="text"
                  placeholder="First Name as per passport"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                  required
                />
              </div>
              <div>
                <label className="block mb-4 font-medium">Last Name (Passport)</label>
                <input
                  type="text"
                  placeholder="Last Name as per passport"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-4 font-medium">Gmail Address</label>
                <input
                  type="email"
                  placeholder="Your Gmail Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                  required
                />
              </div>
              <div>
                <label className="block mb-4 font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block mb-4 font-medium">Choose Country</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg"
                  required
                >
                  <option value="">Select a Country</option>
                  {[
                    "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "China", "Egypt", "Georgia", "India", "Indonesia", "Japan",
                    "Jordan", "Kuwait", "Lebanon", "Maldives", "Malaysia", "Mauritius", "Morocco", "Nepal", "Oman", "Pakistan",
                    "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Thailand", "Tunisia", "Turkey", "UAE", "Uzbekistan", "Vietnam"
                  ].map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="adults" className="block mb-4 font-medium">No. of Adults</label>
                <select
                  id="adults"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg"
                  required
                >
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{`${num} Adult${num > 1 ? "s" : ""}`}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="children" className="block mb-4 font-medium">No. of Children</label>
                <select
                  id="children"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg"
                  required
                >
                  <option value="">Select</option>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{`${num} Children`}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-4 font-medium">Additional Info</label>
              <textarea
                placeholder="Message here..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-200 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#a87c47]"
              ></textarea>
            </div>

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
