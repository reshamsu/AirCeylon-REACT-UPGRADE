import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!product) {
      navigate("/checkout/no-items");
    }
  }, [product, navigate]);

  if (!product) return null;

  const onSubmit = (data) => {
    navigate("/checkout/payment", { state: { product, customerInfo: data } });
  };

  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-group">
                <h2>
                  PERSONAL <span>INFO</span>
                </h2>
                <div className="form-group">
                  <label>
                    Email<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <p className="error-message">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="card-group">
                <h2>
                  SHIPPING <span>ADDRESS</span>
                </h2>
                <div className="row">
                  <div className="form-group" style={{ marginRight: ".8rem" }}>
                    <label>
                      First Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.firstName && (
                      <p className="error-message">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Last Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.lastName && (
                      <p className="error-message">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Company (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    {...register("company")}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Address<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                  />
                  {errors.address && (
                    <p className="error-message">{errors.address.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>
                    City<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    {...register("city", { required: "City is required" })}
                  />
                  {errors.city && (
                    <p className="error-message">{errors.city.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>
                    Country<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                  {errors.country && (
                    <p className="error-message">{errors.country.message}</p>
                  )}
                </div>

                <div className="row">
                  <div className="form-group">
                    <label>
                      Postal Code<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                      {...register("postalCode", {
                        required: "Postal code is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.postalCode && (
                      <p className="error-message">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>
                  <div className="form-group" style={{ marginLeft: ".8rem" }}>
                    <label>
                      Telephone<span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      style={{ padding: ".8rem 8%" }}
                    />
                    {errors.phone && (
                      <p className="error-message">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="button">
                  <button
                    className="text-button"
                    onClick={() =>
                      navigate("/checkout/add-items", { state: { product } })
                    }
                    type="button"
                  >
                    Return to Cart
                  </button>
                  <button className="btn btn-dark" type="submit">
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="card-final">
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
              <ul className="summary">
                <li>Selected Course</li>
                <p>{product.name}</p>
              </ul>
              <ul className="summary">
                <li>Taxes</li>
                <p>LKR 0</p>
              </ul>
              <ul className="summary">
                <li>Discounts</li>
                <i>No Discount Applied</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <p>LKR {product.price.toLocaleString()}</p>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>LKR {product.price.toLocaleString()}</strong>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PersonalInfo;
