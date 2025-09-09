import React from "react";
import { useTheme } from "../hooks/useTheme";

const themeColor = "#B18652";
const team = [
  {
    name: "Rishav Jain",
    role: "Founder & Lead Photographer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Creative Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Cinematographer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Neha Kapoor",
    role: "Photo Editor",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const AboutTeam = () => {
  const { theme } = useTheme();
  const subText = theme.text === "#fff" ? "#b3b3b3" : "#555";

  return (
    <section>
      <h2
        className="text-2xl font-bold text-center mb-8"
        style={{ color: theme.accent }}
      >
        Meet Our Team
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-transparent group transition-all"
          >
            <div
              className="rounded-full overflow-hidden border-4 shadow-lg group-hover:scale-105 transition"
              style={{
                borderColor: themeColor,
                width: 96,
                height: 96,
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="mt-3 font-semibold text-center"
              style={{ color: themeColor }}
            >
              {member.name}
            </div>
            <div className="text-xs text-center" style={{ color: subText }}>
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
