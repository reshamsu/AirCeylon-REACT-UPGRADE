import React from "react";
import notarization from "../../../assets/notarization.png";
import authentication from "../../../assets/Authentication.png";
import verification from "../../../assets/Verification.png";
import attestation from "../../../assets/Attestation.png";
import apostille from "../../../assets/Apostille.png";

const definitions = [
  {
    title: "Notarization",
    image: notarization,
    description: [
      "Notarization is when a certified lawyer (called a Notary Public) checks your document and confirms that it is real and trustworthy. The notary signs and places an official stamp on it. This proves that the document was seen and approved by a legal officer.",
      "- It is often required when you send documents for legal, visa, or business purposes, both locally and internationally.",
    ],
  },
  {
    title: "Authentication",
    image: authentication,
    description: [
      "Authentication means that a government office checks whether the person who signed or notarized your document is a real and registered official. It confirms that the notary's or officer's signature and stamp are valid.",
      "- Many foreign embassies or employers want proof that your notarized documents are truly legal and genuine.",
    ],
  },
  {
    title: "Verification",
    image: verification,
    description: [
      "Verification is the process of checking that the details or documents you give are correct, true, and not fake. It can be done by companies, schools, banks, or government officers.",
      "- To make sure you are giving honest information and that your documents are valid.",
    ],
  },
  {
    title: "Attestation",
    image: attestation,
    description: [
      "Attestation is when a government or official department checks your document and places a stamp or signature to confirm that it is original and correct. This is usually done after notarization and authentication.",
      "- Most countries (especially Gulf countries like UAE, Qatar, etc.) require attested documents for work, visa, or family sponsorship.",
    ],
  },
  {
    title: "Apostille",
    image: apostille,
    description: [
      "An Apostille is a special stamp or certificate given by a government office to make a document officially accepted in certain foreign countries. It is used instead of attestation when the destination country is part of the “Hague Apostille Convention.”",
      "- It makes the process easier and faster for using legal documents in countries that recognize the Apostille system.",
    ],
  },
];

const Terminology = () => {
  return (
    <section className="bg-[linen] text-black py-16 px-4" id="terminology">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mx-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">
            <span className="text-[#a87c47]">Terminology</span>
          </h1>
          <p className="text-md md:text-lg font-semibold text-gray-700">
            The key to notarize your documents starts here.
          </p>
        </div>

        <div className="space-y-8 mt-4">
          {definitions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mx-2 p-6 md:p-8 rounded-2xl shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[80px] md:max-w-[120px] h-auto object-contain rounded-2xl"
              />

              <div>
                <h3 className="text-2xl font-bold text-[#a87c47] mb-3">
                  {item.title}
                </h3>
                <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {item.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terminology;
