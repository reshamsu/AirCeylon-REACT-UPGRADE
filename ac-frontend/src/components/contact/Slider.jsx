import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correct image imports assuming assets are in src/assets
import officeDesk from "../../assets/office-desk.jpeg";
import officeCounter from "../../assets/office-counter.jpeg";
import meetingRoom from "../../assets/meeting_room.jpg";
import interview from "../../assets/interview.jpg";

const images = [officeDesk, officeCounter, meetingRoom, interview];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 11000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index + 1}`}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
