import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// ... import other pages/routes as needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div style={{ paddingTop: "60px" }}>
        {/* adjust padding if your navbar height is different */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>
      <Footer darkMode={darkMode} />
    </Router>
  );
};

export default App;
