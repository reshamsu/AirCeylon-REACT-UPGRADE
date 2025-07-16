import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleNav = () => setNavOpen(!navOpen);

  const isActive = (path) => currentPath === path;
  const isServicesActive = currentPath.startsWith("/services");

  useEffect(() => {
    setNavOpen(false);
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [currentPath]);

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50 py-0.5">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Air Ceylon Logo" className="w-11 mr-3" />
          <span className="text-[#a87c47] text-xl font-bold">Air Ceylon</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-[16px] font-medium">
          <li>
            <Link to="/" className={`${isActive("/") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"} transition`}>
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <span className={`${isServicesActive ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"} cursor-pointer transition`}>
              Services
            </span>
            {desktopDropdownOpen && (
              <ul className="absolute top-6 left-0 bg-white shadow-lg rounded-xl py-4 w-56 z-50">
                <li><Link to="/services/visa-service" className="block px-5 py-2 hover:text-[#a87c47]">VISA Service</Link></li>
                <li><Link to="/services/ept-academy" className="block px-5 py-2 hover:text-[#a87c47]">EPT Academy</Link></li>
                <li><Link to="/services/transition-support" className="block px-5 py-2 hover:text-[#a87c47]">Transition Support</Link></li>
                <li><Link to="/services/notarization" className="block px-5 py-2 hover:text-[#a87c47]">Notarization</Link></li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/about" className={`${isActive("/about") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"} transition`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`${isActive("/blog") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"} transition`}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${isActive("/contact") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"} transition`}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/checkout/no-items" className="hover:text-[#a87c47] transition">
              <IoBagCheckOutline size={22} />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={toggleNav} className="md:hidden z-50 cursor-pointer">
          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 space-y-6 text-[16px] font-medium">
          <Link to="/" className={`block ${isActive("/") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"}`}>
            Home
          </Link>

          {/* Services Dropdown - Mobile */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between w-full font-semibold text-left"
            >
              Services {mobileDropdownOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
            </button>
            {mobileDropdownOpen && (
              <div className="ml-2 mt-4 space-y-4 pl-2">
                <Link to="/services/visa-service" className="block hover:text-[#a87c47]">VISA Service</Link>
                <Link to="/services/ept-academy" className="block hover:text-[#a87c47]">EPT Academy</Link>
                <Link to="/services/transition-support" className="block hover:text-[#a87c47]">Transition Support</Link>
                <Link to="/services/notarization" className="block hover:text-[#a87c47]">Notarization</Link>
              </div>
            )}
          </div>

          <Link to="/about" className={`block ${isActive("/about") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"}`}>
            About
          </Link>
          <Link to="/blog" className={`block ${isActive("/blog") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"}`}>
            Blogs
          </Link>
          <Link to="/contact" className={`block ${isActive("/contact") ? "text-[#a87c47] font-semibold" : "hover:text-[#a87c47]"}`}>
            Contact
          </Link>
          <Link to="/checkout/no-items" className="block hover:text-[#a87c47] flex items-center">
            <IoBagCheckOutline size={20} className="mr-2" /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
