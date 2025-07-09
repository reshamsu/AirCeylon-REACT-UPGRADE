import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct Image Imports
import singapore from "../../../../assets/southeast-asia-singapore.jpg";
import indonesia from "../../../../assets/southeast-asia-indonesia.jpg";
import vietnam from "../../../../assets/southeast-asia-vietnam.jpg";

const attractions = [
  {
    img: singapore,
    title: "Marina Bay, Singapore",
    location: "Singapore",
    description:
      "Famous for its futuristic skyline and lush gardens, Marina Bay offers a vibrant blend of innovation, culture, and coastal beauty.",
    info: "Marina Bay, Singapore",
  },
  {
    img: indonesia,
    title: "Bali, Indonesia",
    location: "Indonesia",
    description:
      "Bali’s tropical charm, spiritual temples, and stunning beaches make it a dream destination for relaxation and adventure.",
    info: "Bali, Indonesia",
  },
  {
    img: vietnam,
    title: "Ha Long Bay, Vietnam",
    location: "Vietnam",
    description:
      "A surreal seascape of emerald waters and limestone islands — Ha Long Bay is a natural wonder steeped in legend.",
    info: "Ha Long Bay, Vietnam",
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
    <div className="landing-slider" id="southeast-asia">
      <Container className="container">
        <div className="container-fluid">
          <label>South East-Asia</label>
          <h1>
            Visit <span className="gradient-text">South East-Asia</span>
          </h1>
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
