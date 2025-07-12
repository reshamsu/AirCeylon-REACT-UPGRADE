import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Slider from "../contact/Slider";

const contacts = [
  {
    icon: <FaInfoCircle className="text-[#c89238] text-xl" />,
    title: "General Inquiries",
    email: "info@airceylonint.com",
  },
  {
    icon: <FaGraduationCap className="text-[#c89238] text-2xl" />,
    title: "EPT Academy",
    email: "eptacademy@airceylonint.com",
  },
  {
    icon: <FaUserTie className="text-[#c89238] text-xl" />,
    title: "Business Client",
    email: "alliances@airceylonint.com",
  },
  {
    icon: <BiSupport className="text-[#c89238] text-2xl" />,
    title: "Transition Support",
    email: "info@airceylonint.com",
    phone: "+1 437 254 3077",
  },
];

const ContactInfo = () => {
  return (
    <div className="bg-[linen] text-gray-800 py-16 px-6" id="contact">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Get <span className="text-[#c89238]">Connected!</span>
          </h1>
          <p>
            We’re here to assist you with any inquiries about our services or solutions.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-4 px-4">
          {contacts.map((item, i) => (
            <div
              key={i}
              className="bg-transparent rounded-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h4 className="text-lg font-semibold text-[#c89238]">{item.title}</h4>
              </div>
              <ul className="text-sm space-y-2">
                <li>
                  <Link
                    to={`tel:${item.phone || "+94760301141"}`}
                    className="flex items-center gap-2 font-medium hover:underline"
                  >
                    <IoCall className="text-base" />
                    {item.phone || "+94 760 301 141"}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`mailto:${item.email}`}
                    className="flex items-center gap-2 font-medium hover:underline"
                  >
                    <MdEmail className="text-base" />
                    {item.email}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-xl font-bold mb-8">Visit Us By Appointment</h3>
          <Slider />
          <a
            href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 mt-10 font-semibold text-md hover:underline"
          >
            <FaLocationDot className="text-3xl md:text-xl text-[#c89238]" />
            WSpace Building - 252A, Galle Road, Colombo 4 (Bambalapitiya), Sri Lanka
          </a>
        </div>
      </Container>
    </div>
  );
};


export default ContactInfo;
