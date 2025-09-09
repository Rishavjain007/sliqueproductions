import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { ThemeProvider } from "./contexts/ThemeContext";
import ServiceList from "./Services/ServiceList";
import Prewedding from "./Services/Prewedding.jsx,EventCorporate.jsx,Product.jsx,Fashion.jsx,RealEstate.jsx,BabyShoot.jsx,Maternity";
import Wedding from "./Services/Wedding.jsx,Prewedding.jsx,EventCorporate.jsx,Product.jsx,Fashion.jsx,RealEstate.jsx,BabyShoot.jsx,Maternity";
import EventCorporate from "./Services/EventCorporate";
import Product from "./Services/Product";
import Fashion from "./Services/Fashion";
import RealEstate from "./Services/RealEstate";
import BabyShoot from "./Services/BabyShoot";
import Maternity from "./Services/Maternity";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/all-services" element={<ServiceList />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/prewedding" element={<Prewedding />} />
            <Route path="/event-corporate" element={<EventCorporate />} />
            <Route path="/product" element={<Product />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/baby-shoot" element={<BabyShoot />} />
            <Route path="/maternity" element={<Maternity />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
