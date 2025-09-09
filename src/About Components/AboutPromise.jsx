import React from "react";
import { FaHandshake } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";

const AboutPromise = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";
  const shadow = theme.shadow;

  return (
    <section
      className="p-8 rounded-2xl shadow-lg flex flex-col items-center"
      style={{
        background: cardBg,
        animation: "fadeIn 2s",
        border: `1.5px solid ${border}`,
        boxShadow: shadow,
      }}
    >
      <FaHandshake size={50} className="mb-4" style={{ color: themeColor }} />
      <h2
        className="text-2xl font-bold mb-4 text-center"
        style={{ color: themeColor }}
      >
        Our Promise
      </h2>
      <p
        className="text-center text-md max-w-2xl mx-auto"
        style={{ color: subText }}
      >
        At SliqueProductions, your satisfaction is our top priority. We promise
        to deliver not just photos, but memories that you’ll cherish forever.
      </p>
    </section>
  );
};

export default AboutPromise;
