// src/components/Home/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();

  const testimonials = [
    {
      name: "Riya & Arjun",
      feedback:
        "Absolutely stunning photos! They captured our wedding perfectly.",
    },
    {
      name: "Neha & Karan",
      feedback:
        "Their creativity and professionalism made our engagement unforgettable.",
    },
    {
      name: "Priya & Manish",
      feedback: "We loved every shot. Highly recommend for any event!",
    },
  ];

  return (
    <section
      className="py-20"
      style={{ background: theme.bg, color: theme.accent }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-6"
        >
          What Our Clients Say
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div
            style={{
              height: 4,
              width: 100,
              background: theme.accent,
              borderRadius: 6,
              margin: "auto",
            }}
          />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.06, boxShadow: theme.shadow }}
              className="p-8 rounded-xl shadow-lg"
              style={{
                background: theme.cardBg,
                border: `2px solid ${theme.accent}`,
                color: theme.text,
                transition: "box-shadow .25s, border .25s",
              }}
            >
              <FaQuoteLeft
                style={{ color: theme.accent }}
                className="text-3xl mb-4 mx-auto"
              />
              <p className="italic mb-4">"{testi.feedback}"</p>
              <h4 className="text-lg font-semibold">{testi.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
