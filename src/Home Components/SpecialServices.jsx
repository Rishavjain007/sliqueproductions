import { motion } from "framer-motion";
import { FaHeart, FaRing, FaCameraRetro } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const SpecialServices = () => {
  const { theme } = useTheme();
  const services = [
    {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
      alt: "Wedding Photography",
      title: "Weddings",
      desc: "Elegant wedding photography capturing your most precious day.",
      icon: <FaHeart size={30} color="#B18652" />,
    },
    {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
      alt: "Engagement Photography",
      title: "Engagements",
      desc: "Celebrate love with timeless engagement photos.",
      icon: <FaRing size={30} color="#B18652" />,
    },
    {
      img: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
      alt: "Event Photography",
      title: "Events",
      desc: "From birthdays to parties, we capture it all beautifully.",
      icon: <FaCameraRetro size={30} color="#B18652" />,
    },
  ];

  return (
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
          style={{ color: theme.accent }}
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
          {services.map((item, idx) => (
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
  );
};

export default SpecialServices;
