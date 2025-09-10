import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ images }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Framer Motion variants for animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <div
      className="p-6 min-h-screen"
      style={{ background: theme.sectionGradient, color: theme.text }}
    >
      <h2
        className="text-3xl font-bold my-9 py-6 text-center"
        style={{ color: theme.accent }}
      >
        Our Gallery
      </h2>

      {/* Masonry layout using CSS columns */}
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
        <AnimatePresence>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox slider */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img }))}
        index={index}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default Gallery;
