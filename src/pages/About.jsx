// import React from "react";
// import {
//   FaCameraRetro,
//   FaLightbulb,
//   FaHeart,
//   FaUsers,
//   FaBullseye,
//   FaRocket,
//   FaAward,
//   FaRegSmileBeam,
//   FaHandshake,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaCogs,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import img from "../assets/images/logo.jpg";
// const themeColor = "#B18652";

// const About = ({ darkMode }) => {
//   const navBg = darkMode ? "#000" : "#fff";
//   const textColor = darkMode ? "#fff" : "#000";
//   const sectionBg = darkMode ? "#181818" : "#f7f7f7";
//   const cardBg = darkMode ? "#1e1e1e" : "#fff";
//   const subText = darkMode ? "#b3b3b3" : "#555";
//   const border = darkMode ? "#222" : "#eee";
//   const shadow = "0 6px 32px 0 #B186527c, 0 1.5px 6px #55442fb0";

//   // Stats section data
//   const stats = [
//     {
//       label: "Years Experience",
//       value: "10+",
//       icon: <FaAward style={{ color: themeColor }} size={32} />,
//     },
//     {
//       label: "Happy Clients",
//       value: "700+",
//       icon: <FaRegSmileBeam style={{ color: themeColor }} size={32} />,
//     },
//     {
//       label: "Projects Completed",
//       value: "1,000+",
//       icon: <FaCameraRetro style={{ color: themeColor }} size={32} />,
//     },
//     {
//       label: "Team Members",
//       value: "12",
//       icon: <FaUsers style={{ color: themeColor }} size={32} />,
//     },
//   ];

//   // Team section data
//   const team = [
//     {
//       name: "Rishav Jain",
//       role: "Founder & Lead Photographer",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Priya Sharma",
//       role: "Creative Director",
//       img: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       name: "Amit Patel",
//       role: "Cinematographer",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//     {
//       name: "Neha Kapoor",
//       role: "Photo Editor",
//       img: "https://randomuser.me/api/portraits/women/46.jpg",
//     },
//   ];

//   // Testimonial section data
//   const testimonials = [
//     {
//       text: "SliqueProductions made our wedding truly memorable. Every photo tells a story.",
//       name: "Ankita & Rahul",
//     },
//     {
//       text: "The passion and professionalism of the team are unmatched.",
//       name: "Rohit Sharma",
//     },
//     {
//       text: "Our baby shoot was a delightful experience. Highly recommended!",
//       name: "Shreya & Aman",
//     },
//   ];

//   // Timeline data
//   const timeline = [
//     {
//       year: "2012",
//       event:
//         "SliqueProductions was founded with a vision to tell visual stories.",
//     },
//     {
//       year: "2015",
//       event: "Crossed 100 clients milestone with raving reviews.",
//     },
//     {
//       year: "2017",
//       event: "Expanded to include corporate and fashion photography.",
//     },
//     {
//       year: "2021",
//       event: "Reached 1,000 projects and featured in top wedding magazines.",
//     },
//     {
//       year: "2024",
//       event: "Built a 12-member creative team and launched new service lines.",
//     },
//   ];
//   const services = [
//     {
//       title: "Custom Photography",
//       desc: "Tailored shoots for weddings, portraits, events, and more to perfectly capture your special moments.",
//       icon: <FaCogs size={36} style={{ color: themeColor }} />,
//     },
//     {
//       title: "Creative Consultation",
//       desc: "We brainstorm and guide you to create visuals that stand out and tell a compelling story.",
//       icon: <FaLightbulb size={36} style={{ color: themeColor }} />,
//     },
//     {
//       title: "Marketing Solutions",
//       desc: "Expert support for social media campaigns and visual content to elevate your brand’s presence.",
//       icon: <FaChartLine size={36} style={{ color: themeColor }} />,
//     },
//     {
//       title: "Mobile Photography",
//       desc: "Convenient and fast mobile photography services for quick, high-quality shots wherever you need them.",
//       icon: <FaMobileAlt size={36} style={{ color: themeColor }} />,
//     },
//   ];

//   // Gradient for section backgrounds
//   const gradient = darkMode
//     ? "linear-gradient(135deg, #181818 60%, #B18652 100%)"
//     : "linear-gradient(135deg, #fff 60%, #B18652 100%)";

//   return (
//     <div
//       style={{
//         background: navBg,
//         color: textColor,
//         minHeight: "100vh",
//         transition: "background 0.3s, color 0.3s",
//       }}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-20">
//         {/* Section 1 - Introduction */}
//         <section
//           className="text-center space-y-4"
//           style={{
//             animation: "fadeIn 1s",
//           }}
//         >
//           <div
//             className="inline-block rounded-full p-4 shadow-xl mb-2"
//             style={{
//               background: "#fff",
//               //   boxShadow: shadow,
//               border: `3px solid ${themeColor}`,
//               marginTop: "10px",
//             }}
//           >
//             {/* <FaCameraRetro
//               size={50}
//               style={{
//                 color: themeColor,
//                 filter: "drop-shadow(0 6px 16px #B1865255)",
//               }}
//             /> */}
//             <img
//               src={img}
//               alt="Logo"
//               className="h-16 w-16 rounded-full"
//               style={{ border: `2px solid ${themeColor}` }}
//             />
//           </div>
//           <h1
//             className="text-4xl font-extrabold tracking-tight"
//             style={{ color: themeColor }}
//           >
//             Welcome to SliqueProductions
//           </h1>
//           <p
//             className="text-lg max-w-2xl mx-auto leading-relaxed"
//             style={{
//               color: subText,
//               fontWeight: 400,
//               fontSize: "1.18rem",
//               letterSpacing: ".02em",
//             }}
//           >
//             We believe in capturing life's special moments with creativity,
//             passion, and authenticity.
//             <br />
//             <span style={{ color: themeColor, fontWeight: 600 }}>
//               Every frame tells a unique story — yours.
//             </span>
//           </p>
//         </section>

//         {/* Section 2 - Stats */}
//         <section
//           className="w-full py-8"
//           style={{ background: sectionBg, borderRadius: 20 }}
//         >
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-transparent px-8">
//             {stats.map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="rounded-2xl flex flex-col items-center p-7 transition-all hover:scale-105"
//                 style={{
//                   background: cardBg,
//                   border: `1.5px solid ${border}`,
//                   boxShadow: shadow,
//                   minHeight: 130,
//                   position: "relative",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   transition: "0.25s",
//                 }}
//               >
//                 <div
//                   className="absolute opacity-0 group-hover:opacity-100 transition-all"
//                   style={{
//                     background: themeColor,
//                     width: 60,
//                     height: 60,
//                     filter: "blur(24px)",
//                     left: "50%",
//                     top: "8px",
//                     transform: "translateX(-50%)",
//                   }}
//                 />
//                 <div className="mb-3 z-10">{stat.icon}</div>
//                 <div
//                   className="text-2xl font-bold z-10"
//                   style={{ color: themeColor }}
//                 >
//                   {stat.value}
//                 </div>
//                 <div className="text-sm z-10" style={{ color: subText }}>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Section 3 - Timeline */}
//         <section
//           className="py-8"
//           style={{ background: gradient, borderRadius: 18, boxShadow: shadow }}
//         >
//           <h2 className="text-2xl font-bold text-center mb-8">Our Journey</h2>
//           <div className="max-w-4xl relative">
//             <div
//               className={`absolute left-1/2 top-0 bottom-0 border-l-1 border-${border} -ml-1`}
//             />
//             <ul className="relative z-10 space-y-8">
//               {timeline.map((item, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="w-1/2 text-right pr-6 ms-[-6px]">
//                     <span className="text-lg font-bold">{item.year}</span>
//                   </div>
//                   <div
//                     className="w-2 h-2 rounded-full mt-2"
//                     style={{
//                       background: "#B18652",
//                       minWidth: 8,
//                       minHeight: 8,
//                       boxShadow: "0 2px 8px #B18652cc",
//                     }}
//                   />
//                   <div
//                     className="w-1/2 pl-6 text-left text-sm"
//                     style={{ color: { subText }, opacity: 0.92 }}
//                   >
//                     {item.event}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {/* Section 4 - Pillars */}
//         <section
//           className="grid md:grid-cols-3 gap-10"
//           style={{ animation: "fadeIn 1.2s" }}
//         >
//           {[
//             {
//               icon: (
//                 <FaLightbulb
//                   size={40}
//                   className="mx-auto mb-4"
//                   style={{ color: themeColor }}
//                 />
//               ),
//               title: "Creativity",
//               desc: "We craft stunning visuals that reflect imagination and style, making every moment unforgettable.",
//             },
//             {
//               icon: (
//                 <FaHeart
//                   size={40}
//                   className="mx-auto mb-4"
//                   style={{ color: themeColor }}
//                 />
//               ),
//               title: "Passion",
//               desc: "We pour our hearts into every project, ensuring that your memories are preserved with love and care.",
//             },
//             {
//               icon: (
//                 <FaUsers
//                   size={40}
//                   className="mx-auto mb-4"
//                   style={{ color: themeColor }}
//                 />
//               ),
//               title: "Experience",
//               desc: "With years of expertise, we deliver high-quality, professional visuals that speak volumes.",
//             },
//           ].map((item, idx) => (
//             <div
//               key={item.title}
//               className="p-7 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
//               style={{ background: cardBg, border: `1.5px solid ${border}` }}
//             >
//               {item.icon}
//               <h3 className="text-xl font-semibold mb-2 text-center">
//                 {item.title}
//               </h3>
//               <p className="text-center text-sm" style={{ color: subText }}>
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </section>

//         {/* Section 5 - Mission & Vision */}
//         <section className="grid md:grid-cols-2 gap-10">
//           <div
//             className="p-8 rounded-2xl shadow-lg mb-6 md:mb-0 ring-1 ring-[#B18652]/10"
//             style={{
//               background: cardBg,
//               animation: "slideUp 1.2s",
//               border: `1.5px solid ${border}`,
//             }}
//           >
//             <FaBullseye
//               size={44}
//               className="mx-auto mb-4"
//               style={{ color: themeColor }}
//             />
//             <h2
//               className="text-2xl font-bold mb-4 text-center"
//               style={{ color: themeColor }}
//             >
//               Our Mission
//             </h2>
//             <p
//               className="text-center text-md max-w-2xl mx-auto"
//               style={{ color: subText }}
//             >
//               To create meaningful, beautiful visuals that celebrate life's
//               milestones, helping people relive their happiest moments for years
//               to come.
//             </p>
//           </div>
//           <div
//             className="p-8 rounded-2xl shadow-lg ring-1 ring-[#B18652]/10"
//             style={{
//               background: cardBg,
//               animation: "slideUp 1.2s",
//               border: `1.5px solid ${border}`,
//             }}
//           >
//             <FaRocket
//               size={44}
//               className="mx-auto mb-4"
//               style={{ color: themeColor }}
//             />
//             <h2
//               className="text-2xl font-bold mb-4 text-center"
//               style={{ color: themeColor }}
//             >
//               Our Vision
//             </h2>
//             <p
//               className="text-center text-md max-w-2xl mx-auto"
//               style={{ color: subText }}
//             >
//               To be a globally trusted creative partner, capturing stories that
//               inspire, connect, and leave a lasting impact.
//             </p>
//           </div>
//         </section>

//         {/* Section 6 - Why Choose Us */}
//         <section style={{ animation: "fadeIn 1.5s" }}>
//           <h2
//             className="text-3xl font-bold mb-6 text-center"
//             style={{ color: themeColor }}
//           >
//             Why Choose Us
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Tailored Solutions",
//                 desc: "We customize our services to meet your unique needs, ensuring a seamless and satisfying experience.",
//               },
//               {
//                 title: "Professional Team",
//                 desc: "Our talented and passionate team is committed to delivering exceptional results every time.",
//               },
//               {
//                 title: "Customer Satisfaction",
//                 desc: "We work closely with you from start to finish, guaranteeing your story is told exactly how you envision it.",
//               },
//             ].map((reason, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
//                 style={{ background: cardBg, border: `1.5px solid ${border}` }}
//               >
//                 <h3 className="text-xl font-semibold mb-2 text-center">
//                   {reason.title}
//                 </h3>
//                 <p className="text-center text-sm" style={{ color: subText }}>
//                   {reason.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Section 7 - Meet the Team */}
//         <section>
//           <h2
//             className="text-2xl font-bold text-center mb-8"
//             style={{ color: themeColor }}
//           >
//             Meet Our Team
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {team.map((member, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center bg-transparent group transition-all"
//               >
//                 <div
//                   className="rounded-full overflow-hidden border-4 shadow-lg group-hover:scale-105 transition"
//                   style={{
//                     borderColor: themeColor,
//                     width: 96,
//                     height: 96,
//                   }}
//                 >
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div
//                   className="mt-3 font-semibold text-center"
//                   style={{ color: themeColor }}
//                 >
//                   {member.name}
//                 </div>
//                 <div className="text-xs text-center" style={{ color: subText }}>
//                   {member.role}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Section 8 - Testimonials */}
//         <section>
//           <h2
//             className="text-2xl font-bold text-center mb-8"
//             style={{ color: themeColor }}
//           >
//             What Our Clients Say
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testi, idx) => (
//               <div
//                 key={idx}
//                 className="p-6 rounded-2xl shadow-lg flex flex-col items-center"
//                 style={{
//                   background: cardBg,
//                   border: `1.5px solid ${border}`,
//                   minHeight: "180px",
//                   boxShadow: shadow,
//                 }}
//               >
//                 <FaQuoteLeft className="mb-3" style={{ color: themeColor }} />
//                 <p
//                   className="italic text-center"
//                   style={{ color: subText, fontWeight: 500 }}
//                 >
//                   "{testi.text}"
//                 </p>
//                 <div className="flex items-center mt-4">
//                   <span className="font-semibold" style={{ color: themeColor }}>
//                     {testi.name}
//                   </span>
//                   <FaQuoteRight
//                     className="ml-2"
//                     style={{ color: themeColor, fontSize: 16 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Section 9 - Our Promise */}
//         <section
//           className="p-8 rounded-2xl shadow-lg flex flex-col items-center"
//           style={{
//             background: cardBg,
//             animation: "fadeIn 2s",
//             border: `1.5px solid ${border}`,
//             boxShadow: shadow,
//           }}
//         >
//           <FaHandshake
//             size={50}
//             className="mb-4"
//             style={{ color: themeColor }}
//           />
//           <h2
//             className="text-2xl font-bold mb-4 text-center"
//             style={{ color: themeColor }}
//           >
//             Our Promise
//           </h2>
//           <p
//             className="text-center text-md max-w-2xl mx-auto"
//             style={{ color: subText }}
//           >
//             At SliqueProductions, your satisfaction is our top priority. We
//             promise to deliver not just photos, but memories that you’ll cherish
//             forever.
//           </p>
//         </section>

//         {/* Section 10 - Call to Action */}
//         <section className="text-center">
//           <h3 className="text-2xl font-semibold mb-4">
//             Ready to Capture Your Story?
//           </h3>
//           <button
//             className="px-8 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-lg"
//             style={{
//               background: themeColor,
//               color: "#fff",
//               fontSize: "1.2rem",
//               letterSpacing: ".03em",
//               boxShadow: "0 6px 24px #B1865255",
//             }}
//           >
//             <Link to="/contact">Get in Touch</Link>
//           </button>
//         </section>
//       </div>
//       {/* Animations */}
//       <style>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(30px);}
//           100% { opacity: 1; transform: translateY(0);}
//         }
//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(70px);}
//           100% { opacity: 1; transform: translateY(0);}
//         }
//         .animate-fadeIn { animation: fadeIn 1s; }
//         .animate-slideUp { animation: slideUp 1s; }
//       `}</style>
//     </div>
//   );
// };

// export default About;

import React from "react";
import AboutIntro from "../About Components/AboutIntro.jsx";
import AboutStats from "../About Components/AboutStats.jsx";
import AboutTimeline from "../About Components/AboutTimeline.jsx";
import AboutPillars from "../About Components/AboutPillars.jsx";
import AboutMissionVision from "../About Components/AboutMissionVision.jsx";
import AboutWhyChoose from "../About Components/AboutWhyChoose.jsx";
import AboutTeam from "../About Components/AboutTeam.jsx";
import Testimonials from "../Home Components/Testimonials.jsx";
import AboutPromise from "../About Components/AboutPromise.jsx";
import AboutCTA from "../About Components/AboutCTA.jsx";
import { useTheme } from "../hooks/useTheme";
import Servicess from "../Home Components/Services.jsx";

const About = () => {
  const { theme } = useTheme();
  return (
    <section
      className="py-12"
      style={{ background: theme.bg, color: theme.text }}
    >
      <div style={{ minHeight: "100vh" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-20">
          <AboutIntro />
          <AboutStats />
          <AboutTimeline />
          <Servicess />
          <AboutWhyChoose />
          <AboutPillars />
          <AboutMissionVision />
          <AboutTeam />
          <Testimonials />
          <AboutPromise />
          <AboutCTA />
        </div>
      </div>
    </section>
  );
};

export default About;
