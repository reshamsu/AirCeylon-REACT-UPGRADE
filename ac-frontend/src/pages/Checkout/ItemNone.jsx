import React from "react";

const Checkout = () => {
  return (
    <div className="h-full bg-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Section */}
        <div className="text-center md:text-start">
          <h1 className="text-2xl font-bold text-black">
            SHOPPING <span className="text-[#a87c47]">CART</span>
          </h1>
          <p className="text-gray-700 mt-4">There are no items in your cart</p>
        </div>

        {/* Right Section - Cart Summary */}
        <div className="bg-gray-50 rounded-xl p-10 w-full max-w-md ml-auto shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#a87c47]">YOUR CART</h2>

          <div className="text-sm">
            <h3 className="font-semibold mb-2">Summary</h3>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span>Registration Fee</span>
              <span>LKR 10,000</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span>Course Fee</span>
              <span>LKR 0</span>
            </div>

            <div className="flex justify-between font-semibold py-3 border-b border-gray-200">
              <span>Subtotal</span>
              <span>LKR 0</span>
            </div>

            <div className="flex justify-between font-bold py-3">
              <span>Total Price</span>
              <span>LKR 0</span>
            </div>

            <div className="pt-6">
              <a
                href="/checkout/personal-info"
                className="block w-full text-center bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
