import React from "react";

const steps = [
  {
    step: "Step 1",
    description:
      "Gathering the original documents/certificates with one copy each and passport copy printouts.",
  },
  {
    step: "Step 2",
    description:
      "Shipping to Air Ceylon International Office in Toronto - Canada.",
  },
  {
    step: "Step 3",
    description:
      "Getting the apostille & notarization of the documents/certificates with our partner - Red Seal Notary.",
  },
  {
    step: "Step 4",
    description:
      "Verification of Notarization & Apostille from the General Consulate of Sri Lanka in Toronto - Canada.",
  },
  {
    step: "Step 5",
    description:
      "Confirming all documents and notarial services with clients before shipping back.",
  },
  {
    step: "Step 6",
    description: "Ship to Air Ceylon Office in Colombo - Sri Lanka.",
  },
];

const Process = () => {
  return (
    <div className="bg-[linen] text-black py-16 p-10" id="process">
      <div className="max-w-[1240px] mx-auto text-center mb-10">
        <p className="text-[#a87c47] font-bold text-lg uppercase mb-2">
          Affiliations
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Canadian Issued <span className="text-[#a87c47]">Documents</span>
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Here’s a quick glance at the process for getting your Canadian Issued
          Documents Apostilled, Notarized, Authenticated & Verified.
        </p>
      </div>

      <div className="max-w-[800px] mx-auto space-y-6 text-left">
        <h2 className="text-lg font-semibold text-gray-700">
          Steps to Notarize your documents:
        </h2>
        {steps.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="text-[#a87c47] font-bold text-lg min-w-[70px]">
              {item.step}:
            </div>
            <p className="text-black text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
        <button
          onClick={() => handleBuyNow(product)}
          className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 w-fit font-semibold rounded-xl"
        >
          View Pricing
        </button>
      </div>
    </div>
  );
};

export default Process;
