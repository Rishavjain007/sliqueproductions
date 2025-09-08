import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCameraRetro, FaMoon, FaSun } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const themeColor = "#673de6";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Toggle dark mode on <html> tag for global styles (optional if using Tailwind)
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const navBg = darkMode ? "#000" : "#fff";
  const menuText = darkMode ? "#fff" : "#000";
  const activeHover = themeColor;

  return (
    <nav
      className="fixed top-0 left-0 w-full shadow-md z-50 transition-colors duration-300"
      style={{
        background: navBg,
        color: menuText,
        borderBottom: `2px solid ${themeColor}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center font-bold select-none"
          style={{
            fontSize: "1.1rem",
            color: menuText,
            letterSpacing: 1,
            textShadow: darkMode ? "0 2px 8px #000a" : "none",
          }}
        >
          <FaCameraRetro
            className="mr-2"
            size={30}
            style={{ color: themeColor }}
          />
          SliqueProductions
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-base">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="transition-colors duration-200"
                style={{
                  color: menuText,
                  borderBottom: "2px solid transparent",
                  padding: "2px 0",
                }}
                onMouseEnter={(e) => (e.target.style.color = activeHover)}
                onMouseLeave={(e) => (e.target.style.color = menuText)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle dark mode"
          className="ml-3 p-2 rounded-full border-2 hover:scale-110 transition-all"
          style={{
            borderColor: themeColor,
            background: darkMode ? "#000" : "#fff",
            color: themeColor,
          }}
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl ml-3 focus:outline-none"
          style={{ color: themeColor }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: navBg,
          color: menuText,
          borderTop: darkMode ? `1px solid ${themeColor}` : "",
        }}
      >
        <ul className="flex flex-col space-y-4 py-6 px-6 text-lg font-medium">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block transition-colors duration-200"
                style={{
                  color: menuText,
                  borderBottom: "2px solid transparent",
                  padding: "2px 0",
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = activeHover)}
                onMouseLeave={(e) => (e.target.style.color = menuText)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
