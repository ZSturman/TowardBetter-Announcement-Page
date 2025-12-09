"use client";
import { motion } from "framer-motion";
import { whyNowContent } from "@/site/whyNow";

const WhyNow = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="py-20 px-4 md:px-0 text-lg"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: .2 }} // Trigger when 20% of the section is in view
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Now?</h2>
        <p className="text-2xl text-gray-600 mb-12">
          Today&apos;s women face unprecedented challenges:
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
        >
          {whyNowContent.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-2xl font-bold">{item.header}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyNow;