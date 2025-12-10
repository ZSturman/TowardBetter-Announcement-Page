'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import digitalPitchDeckSlides from "@/site/digital-pitch-deck"
import Image from 'next/image'
import { imageLoader } from "@/lib/imageLoader"



export default function DigitalPitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % digitalPitchDeckSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + digitalPitchDeckSlides.length) % digitalPitchDeckSlides.length)

  return (
    <div >
      <div className="w-full max-w-4xl p-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        {digitalPitchDeckSlides[currentSlide].title}
        </motion.h1>
        

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-8"
            >
              <motion.h2 
                className="text-3xl font-semibold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {digitalPitchDeckSlides[currentSlide].title}
              </motion.h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                
                <motion.div
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Image loader={imageLoader} src={digitalPitchDeckSlides[currentSlide].image} alt={digitalPitchDeckSlides[currentSlide].title} width={800} height={600} />
                  </motion.div>
                <motion.div
                  className="text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {digitalPitchDeckSlides[currentSlide].content}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {digitalPitchDeckSlides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-500'
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}