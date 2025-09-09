import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";
const testimonials = [
  {
    text: "SliqueProductions made our wedding truly memorable. Every photo tells a story.",
    name: "Ankita & Rahul",
  },
  {
    text: "The passion and professionalism of the team are unmatched.",
    name: "Rohit Sharma",
  },
  {
    text: "Our baby shoot was a delightful experience. Highly recommended!",
    name: "Shreya & Aman",
  },
];

const AboutTestimonials = () => {
  const { theme } = useTheme();
  const cardBg = theme.cardBg;
  const border = theme.cardBorder;
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";
  const shadow = theme.shadow;

  return (
    <section>
      <h2
        className="text-2xl font-bold text-center mb-8"
        style={{ color: themeColor }}
      >
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testi, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl shadow-lg flex flex-col items-center"
            style={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              minHeight: "180px",
              boxShadow: shadow,
            }}
          >
            <FaQuoteLeft className="mb-3" style={{ color: themeColor }} />
            <p
              className="italic text-center"
              style={{ color: subText, fontWeight: 500 }}
            >
              "{testi.text}"
            </p>
            <div className="flex items-center mt-4">
              <span className="font-semibold" style={{ color: themeColor }}>
                {testi.name}
              </span>
              <FaQuoteRight
                className="ml-2"
                style={{ color: themeColor, fontSize: 16 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTestimonials;
