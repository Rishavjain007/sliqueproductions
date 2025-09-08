import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Accept darkMode prop for theme switching
const Contact = ({ darkMode }) => {
  const accent = "#673de6";
  const bg = darkMode ? "#000" : "#fff";
  const cardBg = darkMode ? "#111" : "#fff";
  const border = darkMode ? "#673de6" : "#000";
  const text = darkMode ? "#fff" : "#000";
  const inputBg = darkMode ? "#181818" : "#fff";
  const inputText = darkMode ? "#fff" : "#000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    no: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_jain2007",
        "template_jain2007",
        formData,
        "6wYyJL8BLdFufqBxL"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: `Thank you, ${formData.name}. We'll get back to you soon.`,
            confirmButtonColor: accent,
            background: cardBg,
            color: text,
          });
          setFormData({
            name: "",
            email: "",
            no: "",
            message: "",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send message. Please try again!",
            confirmButtonColor: accent,
            background: cardBg,
            color: text,
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      className="w-full py-10 px-4 sm:py-30 py-20 sm:px-6 lg:py-30 lg:px-8 overflow-x-hidden transition-colors duration-300"
      style={{ background: bg, color: text }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center mb-12 px-4"
      >
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: text }}
        >
          Contact Us
        </h1>
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg"
          style={{ color: text }}
        >
          Have questions or want to work with us? Send us a message and we’ll
          get back to you as soon as possible.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div
            className="flex items-center p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            style={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              color: text,
            }}
          >
            <FaPhoneAlt className="text-2xl mr-4" style={{ color: accent }} />
            <div>
              <h3
                className="font-semibold text-base sm:text-lg mb-1"
                style={{ color: text }}
              >
                Phone
              </h3>
              <p className="text-sm sm:text-base" style={{ color: text }}>
                +91 94623 39166
              </p>
            </div>
          </div>
          <div
            className="flex items-center p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            style={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              color: text,
            }}
          >
            <FaEnvelope className="text-2xl mr-4" style={{ color: accent }} />
            <div>
              <h3
                className="font-semibold text-base sm:text-lg mb-1"
                style={{ color: text }}
              >
                Email
              </h3>
              <p className="text-sm sm:text-base" style={{ color: text }}>
                hello@sliqueproductions.com
              </p>
            </div>
          </div>
          <div
            className="flex items-center p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            style={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              color: text,
            }}
          >
            <FaMapMarkerAlt
              className="text-2xl mr-4"
              style={{ color: accent }}
            />
            <div>
              <h3
                className="font-semibold text-base sm:text-lg mb-1"
                style={{ color: text }}
              >
                Address
              </h3>
              <p className="text-sm sm:text-base" style={{ color: text }}>
                Kotkasim, Alwar, Rajasthan, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="rounded-lg shadow-sm space-y-4 sm:space-y-6"
          style={{
            color: text,
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
            style={{
              background: inputBg,
              color: inputText,
              border: `1.2px solid ${border}`,
              outline: "none",
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
            style={{
              background: inputBg,
              color: inputText,
              border: `1.2px solid ${border}`,
              outline: "none",
            }}
          />
          <input
            type="tel"
            name="no"
            value={formData.no}
            onChange={handleChange}
            placeholder="Your Contact Number"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
            style={{
              background: inputBg,
              color: inputText,
              border: `1.2px solid ${border}`,
              outline: "none",
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition"
            style={{
              background: inputBg,
              color: inputText,
              border: `1.2px solid ${border}`,
              outline: "none",
            }}
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition text-sm sm:text-base"
            style={{
              background: accent,
              color: "#fff",
              border: `2px solid ${accent}`,
            }}
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
