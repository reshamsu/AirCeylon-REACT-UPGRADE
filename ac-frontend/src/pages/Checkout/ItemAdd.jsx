import { useEffect } from "react";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const FIXED_REGISTRATION_FEE = 10000;

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // Redirect if no product passed
  useEffect(() => {
    if (!product) {
      navigate("/checkout/no-items");
    }
  }, [product, navigate]);

  if (!product) return null;

  // Check if course is free by value or by name
  // Defensive fallback: use course or name for check
  const isFreeCourse =
    product.course === "Course ZERO" || product.name === "COURSE ZERO (FREE) – 20 SESSIONS";

  // Extract course fee number safely
  const courseFeeNumber = isFreeCourse
    ? 0
    : Number(product.coursePrice ?? 0);

  const registrationFee = FIXED_REGISTRATION_FEE;

  const subtotal = registrationFee + courseFeeNumber;

  // totalPrice sent from Express or fallback to subtotal
  const totalPrice = Number(product.totalPrice ?? subtotal);

  // Formatting function for price display
  const formatPrice = (num) =>
    num.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  const handleCheckout = () => {
    navigate("/checkout/personal-info", { state: { product } });
  };

  return (
    <div className="h-full bg-white py-20 px-4 md:px-10">
      <Container maxWidth="lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div className="text-center md:text-start">
            <h1 className="text-2xl font-bold text-black">
              SHOPPING <span className="text-[#a87c47]">CART</span>
            </h1>
            <p className="text-gray-700 mt-4">
              You have selected: <strong>{product.name}</strong>
            </p>
          </div>

          {/* Right Section - Cart Summary */}
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
                <span>
                  {isFreeCourse ? "Free" : `LKR ${formatPrice(courseFeeNumber)}`}
                </span>
              </div>

              <div className="flex justify-between font-semibold py-3 border-b border-gray-200">
                <span>Subtotal</span>
                <span>LKR {formatPrice(subtotal)}</span>
              </div>

              <div className="flex justify-between font-bold py-3">
                <span>Total Price</span>
                <span>LKR {formatPrice(totalPrice)}</span>
              </div>

              <div className="pt-6">
                <button
                  onClick={handleCheckout}
                  className="block w-full text-center bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
