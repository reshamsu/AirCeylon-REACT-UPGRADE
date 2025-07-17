// Footer.jsx
import React from "react";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";
import logo from "../assets/Logo.png";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) => {
    if (location.pathname === path) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate(path, { state: { scrollToId: sectionId } });
    }
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-14">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Branding & Social */}
          <div>
            <Link
              to="/"
              className="flex flex-col items-center mb-4"
            >
              <img src={logo} alt="Air Ceylon Logo" className="w-12 mb-2" />
              <span className="text-[#a87c47] text-xl font-bold">Air Ceylon</span>
            </Link>
            <p className="text-md mb-8 font-semibold text-center">Beyond Traveling</p>
            <div className="flex justify-center space-x-4 text-2xl text-gray-600 duration-300">
              <a href="https://wa.me/94760301141"><IoLogoWhatsapp className="hover:text-[#a87c47]" /></a>
              <a href="https://www.facebook.com/share/19h7Uyr39x/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook className="hover:text-[#a87c47]" /></a>
              <a href="https://www.instagram.com/air.ceylon?igsh=MXFiaTdhZ3picmM2dg==" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-[#a87c47]" /></a>
              <a href="https://www.linkedin.com/company/air-ceylon/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-[#a87c47]" /></a>
              <a href="mailto:info@airceylonint.com"><HiOutlineMail className="hover:text-[#a87c47]" /></a>
            </div>
          </div>

          {/* Services */}
          <div className="md:ml-6">
            <h2 className="font-semibold text-lg mb-3">Services</h2>
            <ul className="space-y-2 text-md">
              {[
                { text: "VISA Service", path: "/services/visa-service" },
                { text: "EPT Academy", path: "/services/ept-academy" },
                { text: "Transition Support", path: "/services/transition-support" },
                { text: "Notarization", path: "/services/notarization" },
              ].map(({ text, path }) => (
                <li key={text}>
                  <button onClick={() => handleNavigation(path, "top")} className="hover:text-[#a87c47] hover:underline">
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Categories */}
          <div className="md:ml-4">
            <h3 className="font-semibold text-lg mb-3">Visa Service</h3>
            <ul className="space-y-2 text-md">
              {["europe", "east-asia", "middle-east", "south-asia", "southeast-asia"].map((region) => (
                <li key={region}>
                  <button onClick={() => handleNavigation("/services/visa-service", region)} className="hover:text-[#a87c47] hover:underline">
                    {region.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* EPT Academy */}
          <div className="md:ml-4">
            <h3 className="font-semibold text-lg mb-3">EPT Academy</h3>
            <ul className="space-y-2 text-md">
              {["Course ZERO (Free)", "Crash Course", "Essential Course", "Pro Course"].map((course) => (
                <li key={course}>
                  <button
                    onClick={() => handleNavigation("/services/ept-academy", "packages")}
                    className="hover:text-[#a87c47] hover:underline"
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-14 text-md text-center">
          <p className="mb-6 px-4">
            <span className="font-bold">Visit us by Appointment:</span> Air Ceylon International, 252A, Galle Road, Colombo 4 (Bambalapitiya), Western Province, Sri Lanka.{" "}
            <a
              href="https://www.google.com/maps?q=Air+Ceylon+International,+252A+Galle+Road,+Colombo+00400,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on Google Maps
            </a>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4">
            <label className="font-semibold">
              Phone: <a href="tel:+94760301141" className="text-[#a87c47]">+94 760 301 141</a>
            </label>
            <RxDividerVertical className="hidden md:block text-gray-400" />
            <label className="font-semibold">
              Email: <a href="mailto:info@airceylonint.com" className="text-[#a87c47]">info@airceylonint.com</a>
            </label>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-md mt-8 text-gray-500">
          <p>
            Air Ceylon International Private Limited <FaRegCopyright className="inline mb-0.5" /> 2025.
            All Rights Reserved. Powered by{" "}
            <a href="https://www.myhive.biz/" className="text-[#a87c47] font-bold hover:underline">myhive</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
