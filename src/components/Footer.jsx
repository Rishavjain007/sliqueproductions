import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCameraRetro,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Props: darkMode (boolean) controlled by App/parent, for unified theme
const Footer = ({ darkMode }) => {
  // Theme colors
  const accent = "#673de6";
  const bg = darkMode ? "#000" : "#fff";
  const text = darkMode ? "#fff" : "#000";
  const subtext = darkMode ? "#b3b3b3" : "#333";
  const border = darkMode ? "#222" : "#e5e5e5";
  const iconColor = accent;

  return (
    <footer
      style={{
        background: bg,
        color: text,
        borderTop: `2px solid ${accent}`,
        transition: "background 0.3s, color 0.3s",
      }}
      className="pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Name */}
        <div>
          <div className="flex items-center mb-4">
            <FaCameraRetro
              style={{ color: accent }}
              className="text-2xl sm:text-3xl mr-2"
            />
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ color: text }}
            >
              SliqueProductions
            </h2>
          </div>
          <p
            className="text-sm sm:text-base leading-6"
            style={{ color: subtext }}
          >
            Capturing your precious moments with creativity, elegance, and
            timeless storytelling. Weddings, engagements, and celebrations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: text }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="transition"
                  style={{
                    color: subtext,
                  }}
                  onMouseEnter={(e) => (e.target.style.color = accent)}
                  onMouseLeave={(e) => (e.target.style.color = subtext)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: text }}
          >
            Contact Us
          </h3>
          <p className="text-sm sm:text-base" style={{ color: subtext }}>
            📍 Kotkasim, Alwar, Rajasthan
          </p>
          <p className="text-sm sm:text-base" style={{ color: subtext }}>
            📞 +91 98765 43210
          </p>
          <p className="text-sm sm:text-base" style={{ color: subtext }}>
            ✉️ info@sliqueproductions.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: iconColor }}
              className="transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: iconColor }}
              className="transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: iconColor }}
              className="transition-transform hover:scale-110"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: text }}
          >
            Find Us
          </h3>
          <div
            className="rounded-lg overflow-hidden shadow-lg h-40 sm:h-52 md:h-40 lg:h-56"
            style={{ border: `2px solid ${border}` }}
          >
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.236940663402!2d75.81823327535092!3d26.89243326117406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cd20f6d8a3%3A0xf2efc9c6f5c6cfe3!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1693666633339!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: darkMode
                  ? "grayscale(.5) invert(.97)"
                  : "grayscale(.1)",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="mt-10 pt-4 text-center text-xs sm:text-sm"
        style={{
          borderTop: `1px solid ${border}`,
          color: subtext,
        }}
      >
        © {new Date().getFullYear()} SliqueProductions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
