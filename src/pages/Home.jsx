import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaRing,
  FaCameraRetro,
  FaQuoteLeft,
  FaQuestionCircle,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
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
    <div className="w-full overflow-hidden">
      {/* SECTION 1: Hero */}
      <section className="relative h-[90vh] w-full">
        <img
          src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?cs=srgb&dl=pexels-vireshstudio-1444442.jpg&fm=jpg"
          alt="Wedding Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold mb-4"
          >
            SliqueProductions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            Capturing moments that tell timeless stories — Weddings, Engagements
            & Beyond.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: Services (Improved with stagger animations) */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Weddings",
                desc: "Elegant wedding photography capturing your most precious day.",
              },
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Engagements",
                desc: "Celebrate love with timeless engagement photos.",
              },
              {
                img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
                alt: "Wedding Photography",
                title: "Events",
                desc: "From birthdays to parties, we capture it all beautifully.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 hover:shadow-pink-200 transition"
              >
                <div className="mb-6">
                  <img src={item.img} alt={item.alt} />
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Gallery Slider */}
      <section className="py-16 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Our Gallery</h2>
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

      {/* SECTION 4: About Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop"
            alt="About Us"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold">SliqueProductions</span>, we
              believe in telling love stories through our lens. With years of
              experience in weddings, engagements, and event photography, we
              ensure every moment is captured with perfection and creativity.
            </p>
            <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-800 mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                transition={{ delay: idx * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <FaQuoteLeft className="text-pink-500 text-3xl mb-4 mx-auto" />
                <p className="text-gray-600 italic mb-4">"{testi.feedback}"</p>
                <h4 className="text-lg font-semibold">{testi.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-pink-500 mr-2 text-xl" />
                    <h4 className="text-lg font-semibold">{faq.q}</h4>
                  </div>
                  <span className="text-pink-500 font-bold text-xl">
                    {openIndex === idx ? "-" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.p
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 mt-2 overflow-hidden"
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


      {/* <section className="py-16 bg-gradient-to-r from-gray-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-6">
            {[
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
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center mb-2">
                  <FaQuestionCircle className="text-pink-500 mr-2 text-xl" />
                  <h4 className="text-lg font-semibold">{faq.q}</h4>
                </div>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
