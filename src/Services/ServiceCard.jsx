import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const ServiceCard = ({ title, subtitle, description, images, features }) => {
  const { theme } = useTheme();

  return (
    <section
      className="py-12"
      style={{ background: theme.sectionGradient, }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Images slider - just display one for now, can add Swiper */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={images[0]}
            alt={title}
            className="rounded-2xl shadow-xl w-full h-96 object-cover"
            style={{ border: `3px solid ${theme.accent}` }}
          />
        </motion.div>
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: theme.accent }}
          >
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-lg mb-2 font-semibold">{subtitle}</h2>
          )}
          <p className="mb-6" style={{ color: theme.text }}>
            {description}
          </p>
          {features && (
            <ul className="mb-6 list-disc pl-4" style={{ color: theme.text }}>
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCard;
