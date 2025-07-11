import React, { useState } from "react";
import { Container } from "@mui/material";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const faqs = [
  {
    question: "What is Authentication?",
    answer:
      "Authentication confirms that the signature and stamp on your document are from a recognized official or authority. It's a verification done by a government office.",
  },
  {
    question: "What is Notarization?",
    answer:
      "Notarization involves a certified notary public verifying and stamping your document to confirm its authenticity and legality.",
  },
  {
    question: "What is Verification?",
    answer:
      "Verification checks the accuracy and truthfulness of the information or document provided, often done by educational or legal institutions.",
  },
  {
    question: "What is Attestation?",
    answer:
      "Attestation is the process of having a government or authority officially endorse your document, usually required for use in foreign countries.",
  },
  {
    question: "What is an Apostille?",
    answer:
      "An Apostille is a certificate that authenticates your document for international use under the Hague Apostille Convention.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-[linen] text-gray-900 py-16 px-4" id="faq">
      <Container maxWidth="md">
        <div className="text-center mb-10">
          <p className="text-[#a87c47] font-bold text-xl uppercase tracking-wider">
            FAQ
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold py-4">
            Frequently Asked <span className="text-[#a87c47]">Questions</span>
          </h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-50 rounded-2xl p-6 bg-white shadow-2xs transition hover:shadow-sm"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
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
