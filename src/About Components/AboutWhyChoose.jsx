import React from "react";
import { useTheme } from "../hooks/useTheme";

const reasons = [
  {
    title: "Tailored Solutions",
    desc: "We customize our services to meet your unique needs, ensuring a seamless and satisfying experience.",
  },
  {
    title: "Professional Team",
    desc: "Our talented and passionate team is committed to delivering exceptional results every time.",
  },
  {
    title: "Customer Satisfaction",
    desc: "We work closely with you from start to finish, guaranteeing your story is told exactly how you envision it.",
  },
];

const AboutWhyChoose = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";

  return (
    <section style={{ animation: "fadeIn 1.5s" }}>
      <h2
        className="text-3xl font-bold mb-6 text-center"
        style={{ color: theme.accent }}
      >
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            style={{ background: cardBg, border: `1.5px solid ${border}` }}
          >
            <h3 className="text-xl font-semibold mb-2 text-center">
              {reason.title}
            </h3>
            <p className="text-center text-sm" style={{ color: subText }}>
              {reason.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutWhyChoose;
