import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function About() {
  return <div className="pt-24 text-center text-3xl">About Us Page</div>;
}
function Portfolio() {
  return <div className="pt-24 text-center text-3xl">Portfolio Page</div>;
}
function Services() {
  return <div className="pt-24 text-center text-3xl">Services Page</div>;
}
function Contact() {
  return <div className="pt-24 text-center text-3xl">Contact Page</div>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
