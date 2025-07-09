import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from src/assets
import turkiye from "../../../../assets/europe-turkiye.jpg";
import georgia from "../../../../assets/europe-georgia.jpg";
import azerbaijan from "../../../../assets/europe-azerbaijan.jpg";
import belarus from "../../../../assets/europe-belarus.jpg";

const attractions = [
  {
    img: turkiye,
    title: "Istanbul, Turkiye",
    location: "Turkiye",
    description:
      "Where East meets West — explore Istanbul’s majestic mosques, bustling bazaars, and centuries of layered history.",
    info: "Istanbul, Turkiye",
  },
  {
    img: georgia,
    title: "Tbilisi, Georgia",
    location: "Georgia",
    description:
      "A charming blend of old and new — Tbilisi offers cobbled streets, wine culture, and scenic hilltop views.",
    info: "Tbilisi, Georgia",
  },
  {
    img: azerbaijan,
    title: "Baku, Azerbaijan",
    location: "Azerbaijan",
    description:
      "Modern architecture meets Caspian Sea breeze — discover Baku’s Flame Towers and its rich Silk Road history.",
    info: "Baku, Azerbaijan",
  },
  {
    img: belarus,
    title: "Minsk, Belarus",
    location: "Belarus",
    description:
      "Wide avenues, Soviet-era architecture, and green parks — Minsk reveals an unexpected side of Eastern Europe.",
    info: "Minsk, Belarus",
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
    <div className="landing-slider" id="europe">
      <Container className="container">
        <div className="container-fluid">
          <label>Europe</label>
          <h1>
            Visit <span className="gradient-text">Europe</span>
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
