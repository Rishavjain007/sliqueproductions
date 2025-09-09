import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const FAQ = () => {
  const { theme } = useTheme();
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
      a: "We typically deliver edited photos within 2-4 weeks after the event.",
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
          style={{ color: theme.accent }}
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
  );
};

export default FAQ;
