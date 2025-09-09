import React from "react";
import {
  FaAward,
  FaRegSmileBeam,
  FaCameraRetro,
  FaUsers,
} from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";
const stats = [
  {
    label: "Years Experience",
    value: "10+",
    icon: <FaAward style={{ color: themeColor }} size={32} />,
  },
  {
    label: "Happy Clients",
    value: "700+",
    icon: <FaRegSmileBeam style={{ color: themeColor }} size={32} />,
  },
  {
    label: "Projects Completed",
    value: "1,000+",
    icon: <FaCameraRetro style={{ color: themeColor }} size={32} />,
  },
  {
    label: "Team Members",
    value: "12",
    icon: <FaUsers style={{ color: themeColor }} size={32} />,
  },
];

const AboutStats = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";
  const shadow = theme.shadow;

  return (
    <section
      className="w-full py-8"
      style={{ background: theme.bg, borderRadius: 20 }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-transparent px-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl flex flex-col items-center p-7 transition-all hover:scale-105"
            style={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              boxShadow: shadow,
              minHeight: 130,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              transition: "0.25s",
            }}
          >
            <div className="mb-3 z-10">{stat.icon}</div>
            <div
              className="text-2xl font-bold z-10"
              style={{ color: themeColor }}
            >
              {stat.value}
            </div>
            <div className="text-sm z-10" style={{ color: subText }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
