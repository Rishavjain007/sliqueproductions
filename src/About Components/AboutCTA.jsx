import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const AboutCTA = () => {
  const { theme } = useTheme();
  return (
    <section className="text-center">
      <h3
        className="text-2xl font-semibold mb-4"
        style={{ color: theme.accent }}
      >
        Ready to Capture Your Story?
      </h3>
      <button
        className="px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
        style={{
          background: theme.accent,
          color: "#fff",
          fontSize: "1.2rem",
          letterSpacing: ".03em",
          boxShadow: "0 6px 24px #B1865255",
        }}
      >
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Get in Touch
        </Link>
      </button>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(70px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn { animation: fadeIn 1s; }
        .animate-slideUp { animation: slideUp 1s; }
      `}</style>
    </section>
  );
};

export default AboutCTA;
