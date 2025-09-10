import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from "../hooks/useTheme";

const Slider = ({ images }) => {
  const { theme } = useTheme();

  return (
    <section style={{ background: theme.bg }}>
      <div className="max-w-5xl mx-auto h-96 md:h-[450px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="rounded-2xl shadow-lg"
          style={{
            border: `2px solid ${theme.accent}`,
            boxShadow: theme.shadow,
            background: theme.cardBg,
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.img
                src={img}
                alt={`slide-${i + 1}`}
                className="w-full object-cover rounded-2xl h-[350px] md:h-[450px]"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, type: "spring" }}
                style={{
                  background: theme.cardBg,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
