import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="relative h-[90vh] w-full">
      <motion.img
        src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?cs=srgb&dl=pexels-vireshstudio-1444442.jpg&fm=jpg"
        alt="Wedding Hero"
        className="w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: theme.heroOverlay }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-3xl sm:text-6xl font-extrabold mb-4"
          style={{
            color: "#fff",
            letterSpacing: "2px",
            textShadow: "0 4px 32px #000",
          }}
        >
          SliqueProductions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-base sm:text-lg max-w-2xl leading-relaxed"
          style={{
            color: "#fff",
            textShadow: "0 2px 12px #000",
            fontSize: "1.35rem",
          }}
        >
          Capturing moments that tell timeless stories — Weddings, Engagements &
          Beyond.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
