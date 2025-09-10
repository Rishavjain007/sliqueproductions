import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { ThemeProvider } from "./contexts/ThemeContext";
import ServiceList from "./Services Components/ServiceList.jsx";
import Prewedding from "./Services Components/Prewedding.jsx";
import Wedding from "./Services Components/Wedding.jsx";
import EventCorporate from "./Services Components/EventCorporate.jsx";
import Product from "./Services Components/Product.jsx";
import Fashion from "./Services Components/Fashion.jsx";
import RealEstate from "./Services Components/RealEstate.jsx";
import BabyShoot from "./Services Components/BabyShoot.jsx";
import Maternity from "./Services Components/Maternity.jsx";
// import Gallery from "./pages/Gallery.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <div style={{ paddingTop: "60px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
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
