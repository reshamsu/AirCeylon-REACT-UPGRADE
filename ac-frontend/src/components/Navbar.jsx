import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-2">
      <div className="max-w-[1240px] mx-auto px-10 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Air Ceylon Logo" className="w-12 mr-2" />
          <span className="text-[#a87c47] text-xl font-bold">Air Ceylon</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-12 text-[16px] font-medium">
          <li>
            <Link to="/" className="hover:text-[#c89238] transition">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="cursor-pointer hover:text-[#c89238] transition">
              Services
            </span>
            {dropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-xl py-4 w-56 z-50">
                <li>
                  <Link to="/services/visa-service" className="block px-4 py-2 hover:bg-[#f3eadc]">VISA Service</Link>
                </li>
                <li>
                  <Link to="/services/ept-academy" className="block px-4 py-2 hover:bg-[#f3eadc]">EPT Academy</Link>
                </li>
                <li>
                  <Link to="/services/transition-support" className="block px-4 py-2 hover:bg-[#f3eadc]">Transition Support</Link>
                </li>
                <li>
                  <Link to="/services/notarization" className="block px-4 py-2 hover:bg-[#f3eadc]">Notarization</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" className="hover:text-[#c89238] transition">About</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#c89238] transition">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#c89238] transition">Contact</Link>
          </li>
          <li>
            <Link to="/checkout/no-items" className="hover:text-[#c89238] transition">
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
        className={`fixed top-0 left-0 h-full w-3/4 bg-white border-r shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 space-y-6 text-[16px] font-medium">
          <Link to="/" onClick={toggleNav} className="block hover:text-[#c89238]">Home</Link>

          {/* Services Mobile */}
          <div className="space-y-4">
            <p className="text-[#a87c47] font-semibold">Services</p>
            <Link to="/services/visa-service" onClick={toggleNav} className="block hover:text-[#c89238]">VISA Service</Link>
            <Link to="/services/ept-academy" onClick={toggleNav} className="block hover:text-[#c89238]">EPT Academy</Link>
            <Link to="/services/transition-support" onClick={toggleNav} className="block hover:text-[#c89238]">Transition Support</Link>
            <Link to="/services/notarization" onClick={toggleNav} className="block hover:text-[#c89238]">Notarization</Link>
          </div>

          <Link to="/about" onClick={toggleNav} className="block hover:text-[#c89238]">About</Link>
          <Link to="/blog" onClick={toggleNav} className="block hover:text-[#c89238]">Blogs</Link>
          <Link to="/contact" onClick={toggleNav} className="block hover:text-[#c89238]">Contact</Link>
          <Link to="/checkout/no-items" onClick={toggleNav} className="block hover:text-[#c89238] flex items-center">
            <IoBagCheckOutline size={20} className="mr-2" /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
