import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const AboutUs = () => {
  const { theme } = useTheme();

  return (
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
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: theme.accent }}
          >
            About Us
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: theme.text }}>
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
              color: theme.text,
              border: `2px solid ${theme.accent}`,
              letterSpacing: "1.2px",
              fontSize: "1rem",
            }}
          >
            <Link to="/about">Learn More</Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
