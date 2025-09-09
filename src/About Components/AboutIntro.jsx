import React from "react";
import { useTheme } from "../hooks/useTheme";
import img from "../assets/images/logo.jpg";

const themeColor = "#B18652";

const AboutIntro = () => {
  const { theme } = useTheme();
  return (
    <section
      className="text-center space-y-4"
      style={{ animation: "fadeIn 1s" }}
    >
      <div
        className="inline-block rounded-full p-4 shadow-xl mb-2"
        style={{
          background: "#fff",
          border: `3px solid ${themeColor}`,
          marginTop: "10px",
        }}
      >
        <img
          src={img}
          alt="Logo"
          className="h-16 w-16 rounded-full"
          style={{ border: `2px solid ${themeColor}` }}
        />
      </div>
      <h1
        className="text-4xl font-extrabold tracking-tight"
        style={{ color: themeColor }}
      >
        Welcome to SliqueProductions
      </h1>
      <p
        className="text-lg max-w-2xl mx-auto leading-relaxed"
        style={{
          color: theme.text === "#fff" ? "#b3b3b3" : "#555",
          fontWeight: 400,
          fontSize: "1.18rem",
          letterSpacing: ".02em",
        }}
      >
        We believe in capturing life's special moments with creativity, passion,
        and authenticity.
        <br />
        <span style={{ color: themeColor, fontWeight: 600 }}>
          Every frame tells a unique story — yours.
        </span>
      </p>
    </section>
  );
};

export default AboutIntro;
