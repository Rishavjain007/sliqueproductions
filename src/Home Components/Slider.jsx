import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTheme } from "../hooks/useTheme";

const sliderImgs = [
  "https://t4.ftcdn.net/jpg/10/63/24/17/360_F_1063241784_DRU59VMnR5NW2HmVTlOGHcLuS93023Z3.jpg",
  "https://i.pinimg.com/originals/bd/f9/52/bdf952fe521f1232076d029ec75890d0.jpg",
  "https://st3.depositphotos.com/1000917/12845/i/450/depositphotos_128450570-stock-photo-amazing-hindu-wedding-ceremony-details.jpg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, type: "spring" },
  }),
};

const Slider = () => {
  const { theme } = useTheme();
  return (
    <section className="py-20" style={{ background: theme.bg }}>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-3"
        style={{ color: theme.accent }}
      >
        Moments We Captured
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <div
          style={{
            height: 4,
            width: 100,
            background: theme.accent,
            borderRadius: 6,
            margin: "auto",
          }}
        />
      </motion.div>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-2xl shadow-lg"
          style={{
            border: `2px solid ${theme.accent}`,
            boxShadow: theme.shadow,
            background: theme.cardBg,
          }}
        >
          {sliderImgs.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.img
                src={img}
                alt={`slide-${i}`}
                className="w-full h-[480px] object-cover rounded-2xl"
                initial={{ opacity: 0, scale: 1.07 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
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
