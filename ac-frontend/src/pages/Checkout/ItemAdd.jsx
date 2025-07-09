import { Container } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    navigate("/checkout/no-items");
    return null;
  }

  const handleCheckout = () => {
    navigate("/checkout/personal-info", { state: { product } });
  };

  return (
    <div className="checkout-section">
      <Container maxWidth="lg">
        <div className="card">
          <div className="card-section">
            <div className="container-fluid">
              <h1>
                SHOPPING <span className="gradient-text">CART</span>
              </h1>
              <p>
                You have selected: <strong>{product.name}</strong>
              </p>
            </div>
          </div>

          <div className="card-final" style={{ borderRadius: "10px" }}>
            <div className="card-summary">
              <ul className="summary">
                <li>Taxes</li>
                <i>LKR 0</i>
              </ul>
              <ul className="summary">
                <li>Applied discounts or offers</li>
                <i>No Discount Applied</i>
              </ul>
              <ul className="summary">
                <li>Total Price</li>
                <i>LKR {product.price.toLocaleString()}</i>
              </ul>
              <ul className="final-summary">
                <strong>Total Price</strong>
                <strong>LKR {product.price.toLocaleString()}</strong>
              </ul>
            </div>
            <div className="button">
              <button onClick={handleCheckout} className="btn btn-dark">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
