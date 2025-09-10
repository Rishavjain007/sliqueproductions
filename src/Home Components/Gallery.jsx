import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTheme } from "../hooks/useTheme";

const Gallery = () => {
  const { theme } = useTheme();
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549887534-4c1b4e13d2f3?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
  ];

  return (
    <section
      className="py-20"
      style={{
        background: theme.sectionGradient,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-8" style={{ color: theme.accent }}>
          Our Gallery
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-lg"
                style={{
                  border: `2px solid ${theme.accent}`,
                  background: theme.cardBg,
                }}
              >
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-72 object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Gallery;
