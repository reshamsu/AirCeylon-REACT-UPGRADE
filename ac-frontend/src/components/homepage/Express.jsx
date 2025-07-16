import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import express1 from "../../assets/express1.png";
import express2 from "../../assets/express2.png";
import express3 from "../../assets/express3.png";

const expressOptions = [
  {
    title: "For Inquiries / Consultations",
    button: "Call Us",
    iconPng: express1,
    phone: "+94760301141",
  },
  {
    title: "To Set an Appointment For Visit / Service",
    button: "Book Now",
    iconPng: express2,
    redirect: "/contact#appointment",
  },
  {
    title: "To Begin IELTS Training",
    button: "Register Now",
    iconPng: express3,
    showDialog: true,
  },
];

// Course options with prices
const courseOptions = [
  { label: "COURSE ZERO (FREE) – 20 SESSIONS", value: "Course ZERO", price: 0 },
  { label: "CRASH COURSE – 5 SESSIONS", value: "Crash Course", price: 25000 },
  {
    label: "ESSENTIAL COURSE – 10 SESSIONS",
    value: "Essential Course",
    price: 50000,
  },
  { label: "PRO COURSE – 20 SESSIONS", value: "Pro Course", price: 100000 },
];

const registrationFee = 10000; // Fixed registration fee

const Express = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find selected course to get price
    const course = courseOptions.find((c) => c.value === selectedCourse);
    if (!course) return;

    // Calculate total price
    const totalPrice = registrationFee + course.price;

    // Prepare payload with name and price matching Checkout expectations
    const payload = {
      ...form,
      name: course.label,        // For Checkout: display course name
      price: totalPrice,         // For Checkout: total price
      course: course.value,
      courseLabel: course.label,
      coursePrice: course.price,
      registrationFee,
      totalPrice,
    };

    // Navigate to checkout with product payload
    navigate("/checkout/add-items", { state: { product: payload } });

    // Reset states
    setOpenDialog(false);
    setShowForm(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-[linen] text-black px-4 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-[#a87c47] font-bold text-base md:text-lg uppercase tracking-wider">
          Express
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-4">
          Express Lane
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 p-6">
          {expressOptions.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl hover:shadow-xl transition duration-300 ease-in-out p-6 flex flex-col items-center text-center justify-between"
            >
              <img
                src={item.iconPng}
                alt={item.button}
                className="w-28 h-28 object-contain mb-4"
              />
              <p className="text-md font-medium text-gray-800 mb-6 px-2">
                {item.title}
              </p>
              {item.phone ? (
                <a href={`tel:${item.phone}`} className="w-full">
                  <button className="bg-[#a87c47] hover:bg-[#966a3a] w-full py-3 rounded-xl text-white font-semibold text-base transition">
                    {item.button}
                  </button>
                </a>
              ) : item.redirect ? (
                <button
                  onClick={() => navigate(item.redirect)}
                  className="bg-[#a87c47] hover:bg-[#966a3a] w-full py-3 rounded-xl text-white font-semibold text-base transition"
                >
                  {item.button}
                </button>
              ) : item.showDialog ? (
                <button
                  onClick={() => setOpenDialog(true)}
                  className="bg-[#a87c47] hover:bg-[#966a3a] w-full py-3 rounded-xl text-white font-semibold text-base transition"
                >
                  {item.button}
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Dialog Section */}
      {openDialog && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-center items-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-8 relative">
            {!showForm ? (
              <>
                <h3 className="text-lg font-semibold mb-4">Select a Course</h3>
                <div className="space-y-3 mb-6">
                  {courseOptions.map((course, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`w-full border px-5 py-3 rounded-xl font-semibold text-sm transition ${
                        selectedCourse === course.value
                          ? "bg-[#a87c47] text-white"
                          : "bg-white text-black border-gray-200 hover:border-[#a87c47]"
                      }`}
                      onClick={() => setSelectedCourse(course.value)}
                    >
                      {course.label}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-2">
                  <button
                    onClick={() => {
                      setOpenDialog(false);
                      setSelectedCourse(null);
                    }}
                    className="text-[#a87c47] font-semibold px-3"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => selectedCourse && setShowForm(true)}
                    disabled={!selectedCourse}
                    className={`px-6 py-2 rounded-lg font-semibold text-white transition ${
                      selectedCourse
                        ? "bg-[#a87c47] hover:bg-[#966a3a]"
                        : "bg-gray-200 cursor-not-allowed"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-6">
                  Register for <span className="text-[#a87c47]">{selectedCourse}</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 font-semibold tracking-wide text-sm"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Your First Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#a87c47]"
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="block mb-2 font-semibold tracking-wide text-sm"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#a87c47]"
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="block mb-2 font-semibold tracking-wide text-sm"
                  >
                    Gmail Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Gmail Address"
                    pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#a87c47]"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label
                    htmlFor="file"
                    className="block mb-2 font-semibold tracking-wide text-sm"
                  >
                    Attach file*
                  </label>
                  <input
                    id="file"
                    type="file"
                    name="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="w-full border bg-gray-100 border-gray-200 rounded-lg px-4 py-2 focus:outline-none"
                    onChange={handleInputChange}
                    required
                  />

                  <div className="flex justify-between mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setSelectedCourse(null);
                      }}
                      className="text-[#a87c47] font-semibold px-3"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-[#a87c47] hover:bg-[#966a3a] text-white px-6 py-2 rounded-lg font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Express;
