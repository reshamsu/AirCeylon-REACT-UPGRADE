import React from "react";
import { Container } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { GrOverview } from "react-icons/gr";
import { IoCart } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import offer from "../../../assets/limited-offer.png";

// Complete product list
const products = [
  {
    id: 1,
    name: "Course",
    sessions: 20,
    duration: "6 months",
    price: "0 (Free)",
    label: "ZERO (Free)",
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
    <div className="ept-packages" id="packages">
      <Container className="container" style={{ padding: "3rem 0" }}>
        <div className="container-fluid">
          <h1>
            IELTS <span className="gradient-text">Courses</span>
          </h1>
        </div>
        <div className="container-lg">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-title-active">
                <h3>
                  {product.id === 1 && (
                    <img
                      src={offer}
                      alt="offer"
                      style={{ width: "40px", marginRight: "1rem" }}
                    />
                  )}
                  {product.name}{" "}
                  {product.label ? <span>{product.label}</span> : null}
                </h3>
              </div>

              <div className="card-body">
                <ul>
                  <li>
                    <GrOverview style={{ fontSize: "22px" }} /> Sessions:{" "}
                    {product.sessions}
                  </li>
                  <li>
                    <PiTargetBold /> Focus: Academic & General
                  </li>
                  <li>
                    <WiTime4 /> Duration: {product.duration}
                  </li>
                </ul>

                <h4>Modules Covered:</h4>
                <ul>
                  <li>
                    <FaCheck /> Listening
                  </li>
                  <li>
                    <FaCheck /> Reading
                  </li>
                  <li>
                    <FaCheck /> Writing
                  </li>
                  <li>
                    <FaCheck /> Speaking
                  </li>
                </ul>
                {product.id === 1 && <label>*Terms & Conditions Apply*</label>}
                <button
                  onClick={() => handleBuyNow(product)}
                  className={`btn ${
                    product.id === 1 ? "btn-primary" : "btn-dark"
                  }`}
                >
                  LKR {product.price.toLocaleString()} <IoCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default EPTPackages;
