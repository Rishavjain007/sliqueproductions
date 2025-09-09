import React, { useRef, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

const timeline = [
  {
    year: "2012",
    event:
      "SliqueProductions was founded with a vision to tell visual stories.",
  },
  { year: "2015", event: "Crossed 100 clients milestone with raving reviews." },
  {
    year: "2017",
    event: "Expanded to include corporate and fashion photography.",
  },
  {
    year: "2021",
    event: "Reached 1,000 projects and featured in top wedding magazines.",
  },
  {
    year: "2024",
    event: "Built a 12-member creative team and launched new service lines.",
  },
];

const AboutTimeline = () => {
  const { theme } = useTheme();
  const timelineRef = useRef(null);

  const gradient =
    theme.bg === "#000"
      ? "linear-gradient(135deg, #181818 60%, #B18652 100%)"
      : "linear-gradient(135deg, #fff 60%, #B18652 100%)";

  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";

  // Animate the growing timeline line on scroll
  useEffect(() => {
    const timelineSection = timelineRef.current;
    const line = timelineSection?.querySelector(".grow-line");
    if (!timelineSection || !line) return;

    const onScroll = () => {
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.min(
        Math.max(0, windowHeight - rect.top),
        rect.height
      );
      const percent = Math.max(0, Math.min(visible / rect.height, 1));
      line.style.height = percent * 100 + "%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={timelineRef}
      className="py-8"
      style={{
        background: gradient,
        borderRadius: 18,
        boxShadow: theme.shadow,
        position: "relative",
      }}
    >
      <h2
        className="text-2xl font-bold text-center mb-8"
        style={{ color: theme.accent }}
      >
        Our Journey
      </h2>

      <div className="max-w-4xl mx-auto relative px-4 sm:px-6">
        {/* Vertical animated line */}
        <div
          className="absolute left-6 top-7 grow-line"
          style={{
            width: "4px",
            background: "#B18652",
            borderRadius: "6px",
            zIndex: 0,
            height: "0%",
            transition: "height 0.5s cubic-bezier(.4,2,.5,1)",
            minHeight: "32px",
          }}
        />

        <ul className="relative z-10 space-y-10">
          {timeline.map((item, index) => (
            <li key={index} className="flex items-start relative">
              {/* Dot */}
              <div
                className="flex flex-col items-center mr-8"
                style={{ width: 44 }}
              >
                <div
                  className="w-5 h-5 rounded-full border-4"
                  style={{
                    background: "#fff",
                    borderColor: "#B18652",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Event Content */}
              <div>
                <span
                  className="text-lg font-bold"
                  style={{ color: theme.accent }}
                >
                  {item.year}
                </span>
                <p
                  className="mt-1 text-base"
                  style={{ color: subText, opacity: 0.95 }}
                >
                  {item.event}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional responsive styling */}
      <style>{`
        .grow-line {
          left: 44px;
          top: 2px;
          bottom: 40px;
        }
        @media (max-width: 640px) {
          .grow-line {
            left: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutTimeline;
