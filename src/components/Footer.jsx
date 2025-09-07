import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCameraRetro,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + Name */}
        <div>
          <div className="flex items-center mb-4">
            <FaCameraRetro className="text-pink-500 text-2xl sm:text-3xl mr-2" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              SliqueProductions
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-6">
            Capturing your precious moments with creativity, elegance, and
            timeless storytelling. Weddings, engagements, and celebrations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:text-pink-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-pink-500 transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-pink-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-pink-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Contact Us
          </h3>
          <p className="text-sm sm:text-base">📍 Kotkasim, Alwar, Rajasthan</p>
          <p className="text-sm sm:text-base">📞 +91 98765 43210</p>
          <p className="text-sm sm:text-base">✉️ info@sliqueproductions.com</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaFacebookF size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaYoutube size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Find Us
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg h-40 sm:h-52 md:h-40 lg:h-56">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.236940663402!2d75.81823327535092!3d26.89243326117406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5cd20f6d8a3%3A0xf2efc9c6f5c6cfe3!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1693666633339!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
        © {new Date().getFullYear()} SliqueProductions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
