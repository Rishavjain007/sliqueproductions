import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?cs=srgb&dl=pexels-vireshstudio-1444442.jpg&fm=jpg",
  "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?cs=srgb&dl=pexels-pixabay-322207.jpg&fm=jpg",
  "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?cs=srgb&dl=pexels-pixabay-260689.jpg&fm=jpg",
  "https://images.pexels.com/photos/1983030/pexels-photo-1983030.jpeg?cs=srgb&dl=pexels-justin-shaifer-1983030.jpg&fm=jpg",
];

const variants = {
  enter: {
    opacity: 0,
    scale: 0.8,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

const Hero = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      className="relative h-[90vh] w-full overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      {/* Always keeping the images stacked */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="absolute w-full h-full object-cover"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ background: theme.heroOverlay }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
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

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
