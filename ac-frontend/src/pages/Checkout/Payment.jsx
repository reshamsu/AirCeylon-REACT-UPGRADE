import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productInfo = location.state?.product || null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Payment data:", data);
    console.log("Product info:", productInfo);
    navigate("/checkout/thankyou", { state: { product: productInfo } });
  };

  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <div className="card-group">
              <h2>Payment Information</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Credit/Debit Card</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card Number"
                    {...register("cardNumber", {
                      required: "Card number is required",
                      minLength: {
                        value: 16,
                        message: "Card number must be 16 digits",
                      },
                      maxLength: {
                        value: 16,
                        message: "Card number must be 16 digits",
                      },
                    })}
                  />
                  {errors.cardNumber && (
                    <p className="text-danger">{errors.cardNumber.message}</p>
                  )}
                </div>

                <div className="row">
                  <div className="form-group" style={{ marginRight: ".8rem" }}>
                    <label>Expiry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      style={{ padding: ".8rem 8%" }}
                      {...register("expiry", {
                        required: "Expiry date is required",
                      })}
                    />
                    {errors.expiry && (
                      <p className="text-danger">{errors.expiry.message}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Security Code"
                      style={{ padding: ".88rem 8%", width: "100%" }}
                      {...register("cvv", {
                        required: "CVV is required",
                        minLength: { value: 3, message: "Minimum 3 digits" },
                        maxLength: { value: 4, message: "Maximum 4 digits" },
                      })}
                    />
                    {errors.cvv && (
                      <p className="text-danger">{errors.cvv.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Billing Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Billing Address"
                    {...register("billingAddress", {
                      required: "Billing address is required",
                    })}
                  />
                  {errors.billingAddress && (
                    <p className="text-danger">{errors.billingAddress.message}</p>
                  )}
                </div>

                <div className="card-group">
                  <h3>Accept Terms & Conditions *</h3>

                  <div className="form-group">
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <input
                        type="checkbox"
                        {...register("terms", {
                          required: "You must agree to the terms and conditions",
                        })}
                      />
                      I agree to Terms & Conditions
                    </label>
                    {errors.terms && (
                      <p className="text-danger">{errors.terms.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0" }}>
                      <input
                        type="checkbox"
                        {...register("gdpr", {
                          required: "Consent for personal data processing is required",
                        })}
                      />
                      Consent for Personal Data Processing (GDPR-compliant)
                    </label>
                    {errors.gdpr && (
                      <p className="text-danger">{errors.gdpr.message}</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0" }}>
                      <input
                        type="checkbox"
                        {...register("refundPolicy", {
                          required: "You must acknowledge the refund policy",
                        })}
                      />
                      Acknowledge refund/cancellation policy
                    </label>
                    {errors.refundPolicy && (
                      <p className="text-danger">{errors.refundPolicy.message}</p>
                    )}
                  </div>
                </div>

                <div className="button">
                  <button
                    type="button"
                    className="text-button"
                    onClick={() =>
                      navigate("/checkout/personal-info", {
                        state: { product: productInfo },
                      })
                    }
                  >
                    Return to Info
                  </button>
                  <button type="submit" className="btn btn-dark">
                    <MdVerifiedUser /> Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Product Name</li>
                <p>{productInfo?.name || "Not provided"}</p>
              </ul>
              <ul className="summary">
                <li>Price</li>
                <p>$ {productInfo?.price || "0.00"}</p>
              </ul>
              <ul className="summary">
                <li>Taxes</li>
                <p>$ 0</p>
              </ul>
              <ul className="summary">
                <li>Discounts</li>
                <i>No Discount Applied</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <p>$ {productInfo?.price || "0.00"}</p>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>$ {productInfo?.price || "0.00"}</strong>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
