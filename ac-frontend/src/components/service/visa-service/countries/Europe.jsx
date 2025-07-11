import React from "react";
import Slider from "react-slick";
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
    <div className="w-full bg-white py-16 px-6" id="europe">
      <div className="max-w-[1240px] mx-auto">
        <div className="pb-10 flex flex-col items-center text-center px-4">
          <p className="text-[#a87c47] font-bold text-xl">EUROPE</p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 pb-2">
            Visit <span className="text-[#a87c47]">Europe</span>
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
                    className="text-lg font-semibold text-black flex items-center gap-2 hover:text-[#a87c47] transition mb-2"
                  >
                    <FaLocationDot className="text-[#a87c47]" />
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
