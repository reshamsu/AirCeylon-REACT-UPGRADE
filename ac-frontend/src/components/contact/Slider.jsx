import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import officeDesk from "../../assets/office-desk.jpeg";
import officeCounter from "../../assets/office-counter.jpeg";
import meetingRoom from "../../assets/meeting_room.jpg";
import interview from "../../assets/interview.jpg";

// Image array
const images = [officeDesk, officeCounter, meetingRoom, interview];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-4"> {/* spacing between slides */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-60 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
