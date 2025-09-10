import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRing,
  FaBuilding,
  FaBox,
  FaTshirt,
  FaHome,
  FaBaby,
  FaFemale,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const services = [
  {
    name: "Wedding",
    icon: <FaHeart size={32} />,
    path: "/wedding",
  },
  {
    name: "Prewedding",
    icon: <FaRing size={32} />,
    path: "/prewedding",
  },
  {
    name: "Event & Corporate",
    icon: <FaBuilding size={32} />,
    path: "/event-corporate",
  },
  {
    name: "Product",
    icon: <FaBox size={32} />,
    path: "/product",
  },
  {
    name: "Fashion",
    icon: <FaTshirt size={32} />,
    path: "/fashion",
  },
  {
    name: "Real estate",
    icon: <FaHome size={32} />,
    path: "/real-estate",
  },
  {
    name: "Baby shoot",
    icon: <FaBaby size={32} />,
    path: "/baby-shoot",
  },
  {
    name: "Maternity",
    icon: <FaFemale size={32} />,
    path: "/maternity",
  },
];

const ServiceList = () => {
  const { theme } = useTheme();
  return (
    <section style={{ background: theme.bg }} className="py-12">
      <h2
        className="text-3xl font-bold text-center mb-8"
        style={{ color: theme.accent }}
      >
        Our Services
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="rounded-2xl shadow-lg hover:shadow-2xl p-7 flex flex-col items-center text-center transition-transform hover:scale-105"
            style={{
              background: theme.cardBg,
              border: `2px solid ${theme.accent}`,
              color: theme.text,
            }}
          >
            <div className="mb-3" style={{ color: theme.accent }}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
            <Link
              to={service.path}
              className="mt-2 px-5 py-2 rounded-full font-bold shadow"
              style={{
                background: theme.accent,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Explore
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceList;
