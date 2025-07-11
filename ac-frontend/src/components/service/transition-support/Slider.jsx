import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import toronto from "../../../assets/toronto.jpg";
import careers from "../../../assets/careers.jpg";
import community from "../../../assets/community.jpg";
import lifestyle from "../../../assets/lifestyle-management.jpeg";

const attractions = [
  {
    img: toronto,
    title: "Accommodation",
    description:
      "Experience comfort, convenience, and quality living with our range of modern, fully-equipped accommodations tailored to your needs.",
    info: "Ontario, Canada",
  },
  {
    img: careers,
    title: "Careers",
    description:
      "Unlock your potential and build a rewarding future with diverse career opportunities in a dynamic and supportive environment.",
    info: "Ontario, Canada",
  },
  {
    img: community,
    title: "Community",
    description:
      "Connect, engage, and grow in a vibrant community where people from all walks of life come together with shared values and purpose.",
    info: "Ontario, Canada",
  },
  {
    img: lifestyle,
    title: "Lifestyle Management",
    description:
      "Enhance your everyday living with personalized support and holistic services that help you balance wellness, work, and life with ease.",
    info: "Ontario, Canada",
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
    <div className="w-full bg-white py-16 px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="pb-10 flex flex-col items-center text-center px-4">
          <p className="text-[#a87c47] font-bold text-xl">CANADA</p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 pb-2">
            Toronto
          </h1>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden transition hover:shadow-xl h-full flex flex-col">
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
                    className="text-lg font-semibold text-[#a87c47] flex items-center gap-2 transition mb-2"
                  >
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <span className="text-sm font-medium text-[#a87c47]">
                    {item.info}
                  </span>
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
