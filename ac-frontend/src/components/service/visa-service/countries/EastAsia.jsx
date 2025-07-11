import React from "react";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    dots: true,
    infinite: true,
    speed: 800,
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
    <div className="w-full bg-[linen] py-16 px-6" id="east-asia">
      <div className="max-w-[1240px] mx-auto">
        <div className="pb-10 flex flex-col items-center text-center px-4">
          <p className="text-[#a87c47] font-bold text-xl">EAST ASIA</p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 pb-2">
            Visit <span className="text-[#a87c47]">East Asia</span>
          </h1>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-transparent border border-gray-100 rounded-xl overflow-hidden transition hover:shadow-xl h-full flex flex-col">
                <div className="h-[240px] w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <a
                    href="/"
                    className="text-lg font-semibold text-black flex items-center gap-2 hover:text-[#a87c47] transition mb-2"
                  >
                    <FaLocationDot className="text-[#a87c47]" />
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <span className="text-sm font-medium text-[#a87c47]">{item.info}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
