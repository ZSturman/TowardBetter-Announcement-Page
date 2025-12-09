'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import * as animations from './animations'

export default function AnimationShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <div ref={containerRef} className="min-h-screen p-8 space-y-16">
      <motion.h1
        className="text-4xl font-bold text-center"
        variants={animations.fadeIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Animation Showcase
      </motion.h1>

      <motion.div
        className="p-4 bg-blue-100 rounded-lg"
        variants={animations.slideIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Slide In Animation
      </motion.div>

      <motion.div
        className="p-4 bg-green-100 rounded-lg"
        variants={animations.scaleIn}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Scale In Animation
      </motion.div>


      <motion.div
        className="p-4 bg-indigo-100 rounded-lg"
        style={{ y: parallaxY }}
      >
        Parallax Scroll
      </motion.div>

      <motion.div
        variants={animations.staggerChildren}
        initial="initial"
        animate="animate"
        className="space-y-4"
      >
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            className="p-4 bg-pink-100 rounded-lg"
            variants={animations.onViewFadeIn}
          >
            Staggered Child {item}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="p-4 bg-orange-100 rounded-lg"
        variants={animations.onViewFadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        Fade In On View
      </motion.div>

      <motion.div
        className="p-4 bg-teal-100 rounded-lg"
        variants={animations.onScrollScale}
        initial="initial"
        style={{ scale: scaleProgress, opacity: scrollYProgress }}
      >
        Scale On Scroll
      </motion.div>
    </div>
  )
}