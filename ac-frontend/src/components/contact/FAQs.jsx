import React, { useState } from "react";
import { Container } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Yes, we partner with trusted providers to offer optional travel insurance during checkout. It covers trip cancellations, medical emergencies, and lost baggage.",
  },
  {
    question: "What destinations does Air Ceylon serve?",
    answer:
      "AirCeylon offers both domestic and international flights across Asia, Europe, and the Middle East. You can explore our destinations page for a full list.",
  },
  {
    question: "How can I make a booking with Air Ceylon?",
    answer:
      "You can easily book flights through our website, mobile app, or by contacting our customer service. Simply choose your departure and arrival cities, dates, and select your preferred flight.",
  },
  {
    question: "What is the best pricing plan?",
    answer:
      "We allow one carry-on (up to 7kg) and one checked bag (up to 23kg) for economy class. Additional or oversized baggage may incur extra fees. Business class passengers enjoy higher baggage allowances.",
  },
  {
    question: "Can I change or cancel my booking?",
    answer:
      "Yes, most tickets are eligible for changes or cancellations, though fees may apply. Visit our “Manage Booking” section or contact support for assistance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-gray-100 text-gray-900 py-16 px-4" id="faq">
      <Container maxWidth="lg">
        <div className="text-center mb-10">
          <p className="text-[#a87c47] font-bold text-xl uppercase tracking-wider">
            SUPPORT
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold py-4">
            Frequently Asked <span className="text-[#a87c47]">Questions</span>
          </h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-gray-50 shadow-2xs transition hover:shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-md font-medium">{faq.question}</h2>
                <span className="text-3xl text-[#a87c47]">
                  {openIndex === index ? <IoMdClose /> : <IoIosAdd />}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-md text-gray-800 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
