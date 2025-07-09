import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct Image Imports
import kuwait from "../../../../assets/middle-east-kuwait.jpg";
import dubai from "../../../../assets/middle-east-dubai.jpg";
import petra from "../../../../assets/middle-east-petra.jpg";

const attractions = [
  {
    img: kuwait,
    title: "Kuwait City, Kuwait",
    location: "Kuwait",
    description:
      "A blend of modernity and tradition — discover Kuwait City's coastal skyline, souks, and stunning cultural institutions.",
    info: "Kuwait City, Kuwait",
  },
  {
    img: dubai,
    title: "Dubai, UAE",
    location: "UAE",
    description:
      "Futuristic skyscrapers, luxury shopping, and desert adventures — Dubai is a global hub of innovation and opulence.",
    info: "Dubai, UAE",
  },
  {
    img: petra,
    title: "Petra, Jordan",
    location: "Jordan",
    description:
      "Step into a lost city carved from rose-red stone — Petra is Jordan’s most breathtaking archaeological wonder.",
    info: "Petra, Jordan",
  },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="landing-slider" id="middle-east">
      <Container className="container">
        <div className="container-fluid">
          <label>Middle East</label>
          <h1>
            Visit <span className="gradient-text">Middle East</span>
          </h1>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div key={index} style={{ padding: "0 10px", boxSizing: "border-box" }}>
              <div
                className="slide-card"
                style={{
                  background: "#fff",
                  overflow: "hidden",
                  height: "100%",
                  margin: "1rem",
                }}
              >
                <div className="image">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="card-body" style={{ padding: "1rem" }}>
                  <a
                    href="/"
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      margin: "0.75rem 0",
                      textDecoration: "none",
                      fontSize: "1.05rem",
                    }}
                  >
                    <FaLocationDot />
                    {item.title}
                  </a>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#444",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <label
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "var(--text-gold-hover)",
                    }}
                  >
                    {item.info}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Gallery;
