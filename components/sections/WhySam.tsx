"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { womenStatText } from "@/site/media";
import { imageLoader } from "@/lib/imageLoader";

const WhySam = () => {
  const emphasisVariants = {
    initial: { color: "#ffffff" }, // Initial color (white)
    animate: {
      color: "#ffd700", // Change to yellow
      transition: {
        duration: 6, // Smooth transition duration
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 50 }, // Start invisible and slightly below
    animate: {
      opacity: 1,
      y: 0, // Move into position
      transition: {
        duration: 1, // Duration of animation
        ease: "easeOut", // Smooth easing
      },
    },
  };

  return (
    <div className="relative w-full py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        loader={imageLoader}
        src={womenStatText.src}
        alt={womenStatText.alt}
        fill
        className="z-0"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-5 bg-gradient-radial"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 60%,  rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center text-white  space-y-20"
      
      >
        <motion.div className="md:text-5xl text-3xl md:px-32 lg:px-64"   variants={contentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }} >
          Only{" "}
          <motion.span
            className="inline-block font-bold"
            variants={emphasisVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
          >
            28% of women
          </motion.span>{" "}
          reported having a network they can rely on.
        </motion.div>

        <motion.div className="text-xl md:text-2xl lg:text-3xl md:px-20 lg:px-48 font-samPlayfair"   variants={contentVariants}         initial="initial"
        whileInView="animate"
        transition={{ delay: 1 }}
        viewport={{ once: true, amount: 1 }} >
          Life&rsquo;s biggest transitions demand more than just advice — they
          require personalized, expert guidance, tailored to you. Sam&apos;s
          approach, rooted in social science, pairs practical solutions with
          essential self-care. As women, we often lose sight of our own
          well-being in challenging times, and that&rsquo;s where we get stuck.
          <br/>
          <br/>
          We&rsquo;re here to change that.
        </motion.div>
      </div>
    </div>
  );
};

export default WhySam;