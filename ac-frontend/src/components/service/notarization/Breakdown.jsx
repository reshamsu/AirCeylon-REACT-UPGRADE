import React from "react";

const procedureSteps = [
  { step: "STEP 1" },
  { description: "Domestic Service & Handling", price: 50 },

  { step: "STEP 2" },
  { description: "Outbound Shipping", price: 250 },

  { step: "STEP 3" },
  { description: "Notarization", price: 75 },
  { description: "*Additional Cost per Document", price: 40 },
  { description: "Apostille", price: 175 },
  { description: "*Additional Cost per Document", price: 75 },
  { description: "RSN Courier", price: 100 },
  { description: "Canadian Official Document Charges", price: 25 },
  { description: "*Additional Cost per Document", price: 25 },

  { step: "STEP 4" },
  { description: "Verification", price: 100 },

  { step: "STEP 5" },
  { description: "International Service & Handling Cost", price: 50 },

  { step: "STEP 6" },
  { description: "Inbound Shipping", price: 250 },
];

const Breakdown = () => {
  return (
    <section className="bg-white text-black py-16 p-8" id="pricing">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-10">
          <p className="text-[#a87c47] font-bold text-lg mb-2">BREAKDOWN</p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Pricing <span className="">and Procedure</span>
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-left text-sm">
            <thead className="bg-[#a87c47] text-white">
              <tr>
                <th className="p-3">Description</th>
                <th className="p-3">Price (CAD $)</th>
              </tr>
            </thead>
            <tbody>
              {procedureSteps.map((item, index) =>
                item.step ? (
                  <tr
                    key={`step-${index}`}
                    className="bg-gray-100 font-semibold"
                  >
                    <td colSpan={2} className="p-3 text-[#a87c47] uppercase">
                      {item.step}
                    </td>
                  </tr>
                ) : (
                  <tr key={`desc-${index}`} className="hover:bg-gray-50">
                    <td className="p-3">
                      {item.description.startsWith("*Additional Cost") ? (
                        <span className="font-semibold">
                          {item.description}
                        </span>
                      ) : (
                        item.description
                      )}
                    </td>
                    <td className="p-3">
                      {item.description.startsWith("*Additional Cost") ? (
                        <span className="font-semibold">
                          ${item.price.toFixed(2)}
                        </span>
                      ) : (
                        `$${item.price.toFixed(2)}`
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 italic mt-6 max-w-2xl mx-auto text-center">
          * Prices listed are pre-tax and subject to 13% HST by the Province of
          Ontario. Payable to service providers located in Ontario, Canada via
          Air Ceylon International.
        </p>
      </div>
    </section>
  );
};

export default Breakdown;
