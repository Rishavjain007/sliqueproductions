import React from "react";
import { FaCogs, FaLightbulb, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const Servicess = () => {
  const { theme } = useTheme();
  const services = [
    {
      title: "Custom Photography",
      desc: "Tailored shoots for weddings, portraits, events, and more to perfectly capture your special moments.",
      icon: <FaCogs size={36} style={{ color: theme.accent }} />,
    },
    {
      title: "Creative Consultation",
      desc: "We brainstorm and guide you to create visuals that stand out and tell a compelling story.",
      icon: <FaLightbulb size={36} style={{ color: theme.accent }} />,
    },
    {
      title: "Marketing Solutions",
      desc: "Expert support for social media campaigns and visual content to elevate your brand’s presence.",
      icon: <FaChartLine size={36} style={{ color: theme.accent }} />,
    },
    {
      title: "Mobile Photography",
      desc: "Convenient and fast mobile photography services for quick, high-quality shots wherever you need them.",
      icon: <FaMobileAlt size={36} style={{ color: theme.accent }} />,
    },
  ];

  return (
    <section
      className="py-12"
      style={{ background: theme.bg, color: theme.text }}
    >
      <h2
        className="text-2xl font-bold text-center mb-8"
        style={{ color: theme.accent }}
      >
        Our Services
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center"
            style={{
              background: theme.cardBg,
              border: `1.5px solid ${theme.cardBorder}`,
            }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-sm" style={{ color: theme.text }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          className="px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
          style={{
            background: theme.accent,
            color: "#fff",
            fontSize: "1rem",
            letterSpacing: ".03em",
            boxShadow: "0 6px 24px #B1865255",
          }}
        >
          View All Services
        </button>
      </div>
    </section>
  );
};

export default Servicess;
