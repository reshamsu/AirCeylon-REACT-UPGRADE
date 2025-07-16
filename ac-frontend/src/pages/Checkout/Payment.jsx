import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

const FIXED_REGISTRATION_FEE = 10000;

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productInfo = location.state?.product || null;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  if (!productInfo) {
    // If no product info, redirect back to cart
    navigate("/checkout/no-items");
    return null;
  }

  // Check if course is free (price 0)
  const isFreeCourse = productInfo.price === 0;

  // Course fee number (0 if free, else coursePrice or price)
  const courseFeeNumber = isFreeCourse
    ? 0
    : Number(productInfo.coursePrice ?? productInfo.price) || 0;

  const registrationFee = FIXED_REGISTRATION_FEE;
  const subtotal = registrationFee + courseFeeNumber;
  const totalPrice = Number(productInfo.totalPrice ?? subtotal) || subtotal;

  const formatPrice = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const onSubmit = (data) => {
    console.log("Payment data:", data);
    console.log("Product info:", productInfo);
    navigate("/checkout/thankyou", { state: { product: productInfo, paymentInfo: data } });
  };

  return (
    <div className="h-full bg-white py-20 px-4 md:px-10">
      <Container maxWidth="lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Payment Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <h2 className="text-2xl font-bold text-black">
              PAYMENT <span className="text-[#a87c47]">INFORMATION</span>
            </h2>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Credit/Debit Card<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                placeholder="Card Number"
                {...register("cardNumber", {
                  required: "Card number is required",
                  minLength: { value: 16, message: "Must be 16 digits" },
                  maxLength: { value: 16, message: "Must be 16 digits" },
                })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-yellow-500"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
              )}
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date<span className="text-red-500"> *</span>
                </label>
                <input
                  type="month"
                  {...register("expiry", {
                    required: "Expiry date is required",
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiry.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  placeholder="Security Code"
                  {...register("cvv", {
                    required: "CVV is required",
                    minLength: { value: 3, message: "Minimum 3 digits" },
                    maxLength: { value: 4, message: "Maximum 4 digits" },
                  })}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
                )}
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Billing Address<span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                placeholder="Billing Address"
                {...register("billingAddress", {
                  required: "Billing address is required",
                })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.billingAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.billingAddress.message}</p>
              )}
            </div>

            {/* Consent Checkboxes */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must agree to the terms and conditions",
                  })}
                  className="w-4 h-4"
                />
                <label className="text-sm text-gray-700">I agree to Terms & Conditions</label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("gdpr", {
                    required: "Consent for personal data processing is required",
                  })}
                  className="w-4 h-4"
                />
                <label className="text-sm text-gray-700">
                  Consent for Personal Data Processing (GDPR-compliant)
                </label>
              </div>
              {errors.gdpr && <p className="text-red-500 text-sm">{errors.gdpr.message}</p>}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("refundPolicy", {
                    required: "You must acknowledge the refund policy",
                  })}
                  className="w-4 h-4"
                />
                <label className="text-sm text-gray-700">Acknowledge refund/cancellation policy</label>
              </div>
              {errors.refundPolicy && (
                <p className="text-red-500 text-sm">{errors.refundPolicy.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => navigate("/checkout/personal-info", { state: { product: productInfo } })}
                className="text-gray-600 hover:underline"
              >
                Return to Info
              </button>

              <button
                type="submit"
                disabled={!isValid}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition ${
                  isValid ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                <MdVerifiedUser />
                Pay Now
              </button>
            </div>
          </form>

          {/* Cart Summary */}
          <div className="bg-gray-50 rounded-xl p-10 w-full max-w-md ml-auto shadow-md">
            <h2 className="text-xl font-bold mb-4 text-[#a87c47]">YOUR CART</h2>

            <div className="text-sm">
              <h3 className="font-semibold mb-2">Summary</h3>

              <div className="flex justify-between py-3 border-b border-gray-200">
                <span>Registration Fee</span>
                <span>LKR {formatPrice(registrationFee)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span>Course Fee</span>
                <span>{isFreeCourse ? "Free" : `LKR ${formatPrice(courseFeeNumber)}`}</span>
              </div>
              <div className="flex justify-between font-semibold py-3 border-b border-gray-200">
                <span>Selected Course</span>
                <span>{productInfo.name}</span>
              </div>
              <div className="flex justify-between font-semibold py-3 border-b border-gray-200">
                <span>Subtotal</span>
                <span>LKR {formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-4">
                <span>Total Price</span>
                <span>LKR {formatPrice(totalPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
