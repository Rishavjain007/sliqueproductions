import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaRing,
  FaCameraRetro,
  FaQuoteLeft,
  FaQuestionCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Dummy images (replace with your real images later)
const serviceImgs = [
  {
    title: "Weddings",
    img: "https://i.pinimg.com/736x/8e/50/26/8e502616471eae8a85f9d622faac39b6.jpg",
    icon: <FaHeart size={40} color="#673de6" />,
  },
  {
    title: "Pre-Wedding",
    img: "https://cdn0.weddingwire.in/article/1405/3_2/1280/jpg/125041-indian-wedding-photography-timeline-shutterdown.jpeg",
    icon: <FaRing size={40} color="#673de6" />,
  },
  {
    title: "Engagements",
    img: "https://www.admissify.com/blog/wp-content/uploads/2024/05/Describe-a-Wedding-Ceremony-You-Attended.jpg",
    icon: <FaCameraRetro size={40} color="#673de6" />,
  },
  {
    title: "Functions",
    img: "https://media.istockphoto.com/id/1472256896/photo/the-bride-and-groom-under-the-veil-on-the-sunset-by-the-river.jpg?s=612x612&w=0&k=20&c=1BlwrjabqvRZmtHj8q1OPOA2g0ufAXYsxAs0VB2ExQo=",
    icon: <FaCameraRetro size={40} color="#673de6" />,
  },
];
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

const themeColors = {
  light: {
    bg: "#fff",
    text: "#000",
    accent: "#673de6",
    cardBg: "#fff",
    cardBorder: "#673de6",
    sectionGradient: "linear-gradient(90deg, #fff 60%, #673de67c 100%)",
    galleryTitle: "#673de6",
    heroOverlay: "rgba(0, 0, 0, 0.61)",
    faqCard: "#fff",
    shadow: "0 8px 32px 0 rgba(103,61,230, 0.12)",
  },
  dark: {
    bg: "#000",
    text: "#fff",
    accent: "#673de6",
    cardBg: "#111",
    cardBorder: "#673de6",
    sectionGradient: "linear-gradient(90deg, #000 60%, #673de67c 100%)",
    galleryTitle: "#fff",
    heroOverlay: "rgba(0,0,0,0.6)",
    faqCard: "#181818",
    shadow: "0 8px 32px 0 rgba(103,61,230, 0.20)",
  },
};

const Home = ({ darkMode }) => {
  // darkMode: boolean prop controlled by Navbar
  const dark = darkMode;
  const theme = dark ? themeColors.dark : themeColors.light;

  const faqs = [
    {
      q: "How do we book your services?",
      a: "You can book by contacting us via email or phone. A booking deposit secures your date.",
    },
    {
      q: "Do you travel for destination weddings?",
      a: "Yes, we love traveling! We cover both domestic and international destination weddings.",
    },
    {
      q: "When will we receive our photos?",
      a: "We typically deliver edited photos within 2–4 weeks after the event.",
    },
    {
      q: "Can we customize our package?",
      a: "Absolutely! We tailor packages based on your unique needs and preferences.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="w-full overflow-hidden transition-colors duration-300"
      style={{ background: theme.bg, color: theme.text, minHeight: "100vh" }}
    >
      {/* Hero Section */}
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
          style={{
            background: theme.heroOverlay,
          }}
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
            Capturing moments that tell timeless stories — Weddings, Engagements
            & Beyond.
          </motion.p>
        </div>
      </section>
      {/* Services Section */}
      <section
        id="services"
        className="py-20 text-center"
        style={{ background: theme.bg }}
      >
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-3"
        >
          Our Services
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
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {serviceImgs.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.07,
                boxShadow: theme.shadow,
                y: -8,
                borderColor: theme.accent,
              }}
              transition={{ type: "spring", stiffness: 160 }}
              className="rounded-2xl shadow-lg overflow-hidden flex flex-col items-center border-2"
              style={{
                background: theme.cardBg,
                border: `2px solid ${theme.cardBorder}`,
                color: theme.text,
                transition: "border .25s, box-shadow .25s, transform .25s",
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover"
                style={{ filter: dark ? "grayscale(.18)" : "grayscale(.05)" }}
              />
              <div className="p-6 flex flex-col items-center">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Slider Section */}
      <section className="py-20" style={{ background: theme.bg }}>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-3"
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
      {/* Special Services */}
      <section
        className="py-20"
        style={{
          background: theme.sectionGradient,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-3"
            style={{ color: theme.text }}
          >
            We help you arrange
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
                width: 80,
                background: theme.accent,
                borderRadius: 6,
                margin: "auto",
              }}
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Weddings",
                desc: "Elegant wedding photography capturing your most precious day.",
                icon: <FaHeart size={30} color="#673de6" />,
              },
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Engagements",
                desc: "Celebrate love with timeless engagement photos.",
                icon: <FaRing size={30} color="#673de6" />,
              },
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Events",
                desc: "From birthdays to parties, we capture it all beautifully.",
                icon: <FaCameraRetro size={30} color="#673de6" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 + idx * 0.13 }}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                  boxShadow: theme.shadow,
                }}
                className="p-10 rounded-2xl shadow-2xl border hover:shadow-xl transition"
                style={{
                  background: theme.cardBg,
                  borderColor: theme.accent,
                  color: theme.text,
                }}
              >
                <div className="mb-6 flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="rounded-xl mb-2"
                  />
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Gallery Slider */}
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
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: theme.galleryTitle }}
          >
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
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1549887534-4c1b4e13d2f3?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
            ].map((img, idx) => (
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
      {/* About Us */}
      <section className="py-20" style={{ background: theme.bg }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop"
            alt="About Us"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ border: `2px solid ${theme.accent}` }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="leading-relaxed mb-6">
              At <span className="font-semibold">SliqueProductions</span>, we
              believe in telling love stories through our lens. With years of
              experience in weddings, engagements, and event photography, we
              ensure every moment is captured with perfection and creativity.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: theme.bg,
                color: theme.accent,
                border: `2px solid ${theme.accent}`,
              }}
              className="px-7 py-3 rounded-full font-bold shadow transition"
              style={{
                background: theme.accent,
                color: "#fff",
                border: `2px solid ${theme.accent}`,
                letterSpacing: "1.2px",
                fontSize: "1rem",
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20" style={{ background: theme.bg }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold mb-6"
          >
            What Our Clients Say
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
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Riya & Arjun",
                feedback:
                  "Absolutely stunning photos! They captured our wedding perfectly.",
              },
              {
                name: "Neha & Karan",
                feedback:
                  "Their creativity and professionalism made our engagement unforgettable.",
              },
              {
                name: "Priya & Manish",
                feedback:
                  "We loved every shot. Highly recommend for any event!",
              },
            ].map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.06, boxShadow: theme.shadow }}
                className="p-8 rounded-xl shadow-lg"
                style={{
                  background: theme.cardBg,
                  border: `2px solid ${theme.accent}`,
                  color: theme.text,
                  transition: "box-shadow .25s, border .25s",
                }}
              >
                <FaQuoteLeft
                  style={{ color: theme.accent }}
                  className="text-3xl mb-4 mx-auto"
                />
                <p className="italic mb-4">"{testi.feedback}"</p>
                <h4 className="text-lg font-semibold">{testi.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section
        className="py-20"
        style={{
          background: theme.sectionGradient,
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: theme.text }}
          >
            Frequently Asked Questions
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
                width: 80,
                background: theme.accent,
                borderRadius: 6,
                margin: "auto",
              }}
            />
          </motion.div>
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.13, duration: 0.5 }}
                className="rounded-lg p-5 shadow-md hover:shadow-lg transition cursor-pointer border-2"
                style={{
                  background: theme.faqCard,
                  border: `2px solid ${theme.accent}`,
                  color: theme.text,
                  transition: "box-shadow .25s, border .25s",
                }}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaQuestionCircle
                      style={{ color: theme.accent }}
                      className="mr-2 text-xl"
                    />
                    <h4 className="text-lg font-semibold">{faq.q}</h4>
                  </div>
                  <motion.span
                    style={{ color: theme.accent }}
                    className="font-bold text-xl"
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  >
                    {openIndex === idx ? "-" : "+"}
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 overflow-hidden"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
