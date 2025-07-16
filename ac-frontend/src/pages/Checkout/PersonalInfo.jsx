import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const FIXED_REGISTRATION_FEE = 10000;

const PersonalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (!product) {
      navigate("/checkout/no-items");
    }
  }, [product, navigate]);

  if (!product) return null;

  // Detect free course by price === 0
  const isFreeCourse = product.price === 0;

  // Course fee (0 if free, else coursePrice or price)
  const courseFeeNumber = isFreeCourse
    ? 0
    : Number(product.coursePrice ?? product.price) || 0;

  const registrationFee = FIXED_REGISTRATION_FEE;
  const subtotal = registrationFee + courseFeeNumber;
  const totalPrice = Number(product.totalPrice ?? subtotal) || subtotal;

  const formatPrice = (num) =>
    num.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const onSubmit = (data) => {
    navigate("/checkout/payment", { state: { product, customerInfo: data } });
  };

  return (
    <div className="h-full bg-white py-20 px-4 md:px-10">
      <Container maxWidth="lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Form Section */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <h2 className="text-2xl font-bold text-black">
              CANDIDATE <span className="text-[#a87c47]">INFO</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  First Name<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring focus:ring-yellow-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Name<span className="text-red-500"> *</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring focus:ring-yellow-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gmail Address<span className="text-red-500"> *</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Please enter a valid Gmail address",
                  },
                })}
                className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring focus:ring-yellow-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number (with country code)
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="tel"
                placeholder="+94XXXXXXXXX"
                {...register("phone", { required: "Phone number is required" })}
                className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring focus:ring-yellow-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Upload File */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Attach File<span className="text-red-500"> *</span>
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                {...register("attachment", {
                  required: "File attachment is required",
                })}
                className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 file:bg-black file:text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer"
              />
              {errors.attachment && (
                <p className="text-red-500 text-sm mt-1">{errors.attachment.message}</p>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() =>
                  navigate("/checkout/add-items", { state: { product } })
                }
                className="text-gray-600 hover:underline"
              >
                Return to Cart
              </button>

              <button
                type="submit"
                className={`px-6 py-3 rounded-xl font-semibold text-white transition ${
                  isValid ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isValid}
              >
                Continue
              </button>
            </div>
          </form>

          {/* Right: Summary Card */}
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
                <span>{product.name}</span>
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

export default PersonalInfo;
