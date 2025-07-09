import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images from src/assets
import japan from "../../../../assets/east-asia-japan.jpg";
import china from "../../../../assets/east-asia-china.jpg";
import korea from "../../../../assets/east-asia-korea.jpg";

const attractions = [
  {
    img: japan,
    title: "Tokyo, Japan",
    location: "Japan",
    description:
      "A dazzling fusion of ancient temples and futuristic skylines — Tokyo offers a dynamic experience at every corner.",
    info: "Japan",
  },
  {
    img: china,
    title: "Great Wall, China",
    location: "China",
    description:
      "Walk along one of the world’s greatest wonders — the Great Wall winds through ancient landscapes and dynastic history.",
    info: "China",
  },
  {
    img: korea,
    title: "Seoul, South Korea",
    location: "South Korea",
    description:
      "A cultural powerhouse — explore Seoul’s palaces, K-pop districts, vibrant street food, and cutting-edge fashion.",
    info: "South Korea",
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
    <div className="landing-slider2" id="east-asia">
      <Container className="container">
        <div className="container-fluid">
          <label>East Asia</label>
          <h1>Visit East Asia</h1>
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
