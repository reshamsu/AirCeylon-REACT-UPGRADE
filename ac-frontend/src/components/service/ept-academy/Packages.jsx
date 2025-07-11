import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaCartPlus } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { GrOverview } from "react-icons/gr";
import offer from "../../../assets/limited-offer.png";

const products = [
  {
    id: 1,
    name: "Course ZERO",
    sessions: 20,
    duration: "6 months",
    price: "0 (Free)",
    label: "Free",
  },
  {
    id: 2,
    name: "Crash Course",
    sessions: 5,
    duration: "Customizable",
    price: "25,000",
  },
  {
    id: 3,
    name: "Essential Course",
    sessions: 10,
    duration: "Customizable",
    price: "50,000",
  },
  {
    id: 4,
    name: "Pro Course",
    sessions: 20,
    duration: "Customizable",
    price: "100,000",
  },
];

const EPTPackages = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate("/checkout/add-items", { state: { product } });
  };

  return (
    <div className="bg-white text-black py-16 px-8" id="packages">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            IELTS <span className="text-[#a87c47]">Courses</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 border-gray-900 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between p-5"
            >
              <div className="p-2">
                <div className="flex items-center gap-3 mb-4">
                  {product.id === 1 && (
                    <img src={offer} alt="Offer" className="w-8" />
                  )}
                  <h3 className="text-xl font-semibold">
                    {product.name}
                    {product.label && (
                      <span className="ml-2 text-md text-[#a87c47] font-bold">
                        ({product.label})
                      </span>
                    )}
                  </h3>
                </div>

                <ul className="text-sm space-y-3 text-gray-700 mb-4">
                  <li className="flex items-center gap-2">
                    <GrOverview className="text-lg text-[#a87c47]" />
                    <span>Sessions: {product.sessions}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <PiTargetBold className="text-lg text-[#a87c47]" />
                    <span>Focus: Academic & General</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <WiTime4 className="text-lg text-[#a87c47]" />
                    <span>Duration: {product.duration}</span>
                  </li>
                </ul>

                <h4 className="text-sm font-bold text-gray-800 mb-2">
                  Modules Covered:
                </h4>
                <ul className="text-sm space-y-1 text-gray-700 mb-4">
                  {["Listening", "Reading", "Writing", "Speaking"].map(
                    (mod, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <FaCheck className="text-green-600" />
                        <span>{mod}</span>
                      </li>
                    )
                  )}
                </ul>

                {product.id === 1 && (
                  <p className="text-xs text-gray-500 italic mb-4">
                    *Terms & Conditions Apply
                  </p>
                )}
              </div>
              <button
                onClick={() => handleBuyNow(product)}
                className={`w-full flex items-center justify-center gap-2 text-white px-4 py-3 font-semibold rounded-xl ${
                  product.id === 1
                    ? "bg-[#a87c47] hover:bg-[#946f3e]"
                    : "bg-gray-800 hover:bg-gray-700"
                } transition`}
              >
                LKR {product.price}
                <FaCartPlus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EPTPackages;
