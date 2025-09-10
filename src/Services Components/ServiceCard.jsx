import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import Slider from "./Slider";
import AboutCTA from "../About Components/AboutCTA";

const ServiceCard = ({ title, subtitle, description, images, features }) => {
  const { theme } = useTheme();

  return (
    <section
      className="py-12"
      style={{ background: theme.sectionGradient || "#fff" }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="rounded-2xl shadow-xl w-full h-96 overflow-hidden mb-20"
            style={{
              border: `3px solid ${theme.accent}`,
              background: theme.cardBg || "#fff",
            }}
          >
            <Slider images={images} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-3xl font-bold mb-3"
            style={{ color: theme.accent }}
          >
            {title}
          </h1>
          {subtitle && (
            <h2
              className="text-lg mb-2 font-semibold"
              style={{ color: theme.subtext || theme.text }}
            >
              {subtitle}
            </h2>
          )}
          <p className="mb-6" style={{ color: theme.text }}>
            {description}
          </p>
          {features && features.length > 0 && (
            <ul className="mb-6 list-disc pl-4" style={{ color: theme.text }}>
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      <AboutCTA />
    </section>
  );
};

export default ServiceCard;
