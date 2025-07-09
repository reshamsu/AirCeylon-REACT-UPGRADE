import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct Image Imports
import india from "../../../../assets/south-asia-india.jpg";
import maldives from "../../../../assets/south-asia-maldives.jpg";
import nepal from "../../../../assets/south-asia-nepal.jpg";

const attractions = [
  {
    img: india,
    title: "Agra, India",
    location: "India",
    description:
      "Home to the Taj Mahal — a timeless symbol of love, blending Mughal architecture with cultural splendor.",
    info: "India",
  },
  {
    img: maldives,
    title: "Malé, Maldives",
    location: "Maldives",
    description:
      "Turquoise lagoons, over-water villas, and serene sunsets — the Maldives invites you to a paradise of pure escape and luxury.",
    info: "Maldives",
  },
  {
    img: nepal,
    title: "Kathmandu, Nepal",
    location: "Nepal",
    description:
      "Nestled in the Himalayas, Kathmandu is a spiritual hub filled with ancient temples, stupas, and breathtaking mountain views.",
    info: "Nepal",
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
    <div className="landing-slider2" id="south-asia">
      <Container className="container">
        <div className="container-fluid">
          <label>South Asia</label>
          <h1>Visit South Asia</h1>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div
              key={index}
              style={{ padding: "0 10px", boxSizing: "border-box" }}
            >
              <div
                className="slide-card"
                style={{
                  background: "transparent",
                  overflow: "hidden",
                  height: "100%",
                  margin: ".4rem",
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
                      borderRadius: "10px",
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
                      color: "var(--text-white)",
                      fontSize: "1.05rem",
                    }}
                  >
                    <FaLocationDot style={{ color: "var(--text-white)" }} />
                    {item.title}
                  </a>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
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
                      color: "var(--dark-blue)",
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
