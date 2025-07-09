import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import VisaService from "./pages/VisaService";
import EPTAcademy from "./pages/EPTAcademy";
import TransitionSupport from "./pages/TransitionSupport";
import Notarization from "./pages/Notarization";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blogs";

import ItemNone from "./pages/Checkout/ItemNone";
import ItemAdd from "./pages/Checkout/ItemAdd";
import PersonalInfo from "./pages/Checkout/PersonalInfo";
import Payment from "./pages/Checkout/Payment";
import Thank from "./pages/Checkout/Thank";

// import TravelTours from "./components/service/Travel&Tours";
// import Ticketing from "./components/service/Ticketing";
// import Europe from "./components/service/visa-service/countries/Europe";
// import SouthAsia from "./components/service/visa-service/countries/SouthAsia";
// import MiddleEast from "./components/service/visa-service/countries/MiddleEast";
// import EastAsia from "./components/service/visa-service/countries/EastAsia";
// import SouthEastAsia from "./components/service/visa-service/countries/SouthEastAsia";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <div className="Air-Ceylon">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/visa-service" element={<VisaService />} />
          <Route path="/services/ept-academy" element={<EPTAcademy />} />
          <Route
            path="/services/transition-support"
            element={<TransitionSupport />}
          />
          <Route path="/services/notarization" element={<Notarization />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />

          {/* <Route path="/services/travels-tours" element={<TravelTours />} />
          <Route path="/services/ticketing" element={<Ticketing />} />
          
          <Route path="/services/visa-service/europe" element={<Europe />} />
          <Route path="/services/visa-service/south-asia" element={<SouthAsia />} />
          <Route path="/services/visa-service/middle-east" element={<MiddleEast />} />
          <Route path="/services/visa-service/east-asia" element={<EastAsia />} />
          <Route path="/services/visa-service/south-east-asia" element={<SouthEastAsia />} /> */}

          <Route path="/checkout/no-items" element={<ItemNone />} />
          <Route path="/checkout/add-items" element={<ItemAdd />} />
          <Route path="/checkout/personal-info" element={<PersonalInfo />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/thankyou" element={<Thank />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
