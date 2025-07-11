import React from "react";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import china from "../../assets/east-asia-china.jpg";
import germany from "../../assets/europe-germany.jpg";
import maldives from "../../assets/south-asia-maldives.jpg";
import spain from "../../assets/europe-spain.jpg";
import canada from "../../assets/europe-canada.webp";
import singapore from "../../assets/southeast-asia-singapore.jpg";

const attractions = [
  {
    img: china,
    title: "The Great Wall of China",
    location: "China",
    description:
      "Walk along one of the world’s greatest wonders — the Great Wall winds through ancient landscapes and tells tales of dynasties past.",
    info: "Beijing, China",
  },
  {
    img: germany,
    title: "Frankfurt, Germany",
    location: "Germany",
    description:
      "A skyline of innovation meets Old World charm — Frankfurt blends financial power with cultural richness and historic streets.",
    info: "Frankfurt, Germany",
  },
  {
    img: maldives,
    title: "Male, Maldives",
    location: "Maldives",
    description:
      "Turquoise lagoons, over-water villas, and serene sunsets — the Maldives invites you to a paradise of pure escape and luxury.",
    info: "Male, Maldives",
  },
  {
    img: spain,
    title: "Madrid, Spain",
    location: "Spain",
    description:
      "From flamenco rhythms to regal boulevards — Madrid pulses with art, flavor, and the warmth of Spanish spirit.",
    info: "Madrid, Spain",
  },
  {
    img: canada,
    title: "Toronto, Canada",
    location: "Canada",
    description:
      "Toronto is a multicultural mosaic — where skyscrapers meet the shores of Lake Ontario and every street tells a global story.",
    info: "Toronto, Canada",
  },
  {
    img: singapore,
    title: "Singapore",
    location: "Singapore",
    description:
      "A futuristic skyline meets lush green sanctuaries — explore Singapore’s seamless blend of innovation, culture, and cuisine.",
    info: "Marina Bay, Singapore",
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
    <div className="w-full bg-white py-16 px-6" id="destinations">
      <div className="max-w-[1240px] mx-auto">
        <div className="pb-10 flex flex-col items-start text-start px-4">
          <p className="text-[#a87c47] font-bold text-xl">DESTINATIONS</p>
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 pb-2">
            Your Next <span className="text-[#a87c47]">Journey Awaits</span>
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
