import { Container } from "@mui/material";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";

const Payment = () => {
  return (
    <div className="checkout-section">
      <Container className="container">
        <div className="card">
          <div className="card-section">
            <h1>Thank you for making a purchase with <span className="gradient-text">EPT Academy.</span></h1>
            <p>We hope to see you soon</p>
            <div className="button">
              <a href="/checkout/no-items" className="text-button">
                Return to Cart
              </a>
            </div>
          </div>

          {/* <div className="card-final">
            <div className="card-summary">
              <h2>YOUR CART</h2>
              <h4>Summary</h4>
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
                <p>$ 0</p>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>$ 0</strong>
              </ul>
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Payment;
