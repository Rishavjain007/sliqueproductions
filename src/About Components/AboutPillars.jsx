import React from "react";
import { FaLightbulb, FaHeart, FaUsers } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";

const pillars = [
  {
    icon: <FaLightbulb size={40} style={{ color: themeColor }} />,
    title: "Creativity",
    desc: "We craft stunning visuals that reflect imagination and style, making every moment unforgettable.",
  },
  {
    icon: <FaHeart size={40} style={{ color: themeColor }} />,
    title: "Passion",
    desc: "We pour our hearts into every project, ensuring that your memories are preserved with love and care.",
  },
  {
    icon: <FaUsers size={40} style={{ color: themeColor }} />,
    title: "Experience",
    desc: "With years of expertise, we deliver high-quality, professional visuals that speak volumes.",
  },
];

const AboutPillars = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";

  return (
    <section
      className="grid md:grid-cols-3 gap-10"
      style={{ animation: "fadeIn 1.2s" }}
    >
      {pillars.map((item, idx) => (
        <div
          key={item.title}
          className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          style={{ background: cardBg, border: `1.5px solid ${border}` }}
        >
          <div className="mx-auto mb-4">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center">
            {item.title}
          </h3>
          <p className="text-center text-sm" style={{ color: subText }}>
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutPillars;
