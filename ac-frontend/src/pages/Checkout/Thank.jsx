import React from "react";
import { Container } from "@mui/material";
import { MdVerifiedUser } from "react-icons/md";

const ThankYou = () => {
  return (
    <div className="h-full bg-white py-24 px-10 md:px-10">
      <Container maxWidth="lg">
        <div className="max-w-2xl mx-auto text-center bg-gray-50 p-10 rounded-2xl shadow-SM">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-green-600 text-5xl mb-4">
              <MdVerifiedUser />
            </div>

            <h1 className="text-3xl font-bold text-black">
              Thank you for making a purchase with{" "}
              <span className="text-[#a87c47]">EPT Academy.</span>
            </h1>

            <p className="text-gray-700 text-lg">We hope to see you soon!</p>

            <a
              href="/checkout/no-items"
              className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition"
            >
              Return to Cart
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThankYou;
