import React from "react";
import { FaBullseye, FaRocket } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";

const AboutMissionVision = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";

  return (
    <section className="grid md:grid-cols-2 gap-10">
      <div
        className="p-8 rounded-2xl shadow-lg mb-6 md:mb-0 ring-1 ring-[#B18652]/10"
        style={{
          background: cardBg,
          animation: "slideUp 1.2s",
          border: `1.5px solid ${border}`,
        }}
      >
        <FaBullseye
          size={44}
          className="mx-auto mb-4"
          style={{ color: themeColor }}
        />
        <h2
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: themeColor }}
        >
          Our Mission
        </h2>
        <p
          className="text-center text-md max-w-2xl mx-auto"
          style={{ color: subText }}
        >
          To create meaningful, beautiful visuals that celebrate life's
          milestones, helping people relive their happiest moments for years to
          come.
        </p>
      </div>
      <div
        className="p-8 rounded-2xl shadow-lg ring-1 ring-[#B18652]/10"
        style={{
          background: cardBg,
          animation: "slideUp 1.2s",
          border: `1.5px solid ${border}`,
        }}
      >
        <FaRocket
          size={44}
          className="mx-auto mb-4"
          style={{ color: themeColor }}
        />
        <h2
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: themeColor }}
        >
          Our Vision
        </h2>
        <p
          className="text-center text-md max-w-2xl mx-auto"
          style={{ color: subText }}
        >
          To be a globally trusted creative partner, capturing stories that
          inspire, connect, and leave a lasting impact.
        </p>
      </div>
    </section>
  );
};

export default AboutMissionVision;
