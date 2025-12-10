"use client";
import Image from "next/image";
import { allImages } from "@/site/media";
import { motion, useScroll, useTransform } from "framer-motion";
import EmailForm from "../forms/EmailForm";
import ShareSam from "../containers/ShareSam";
import { imageLoader } from "@/lib/imageLoader";

type HeroProps = {
  joinedWaitlist: boolean;
  setJoinedWaitlist: (joined: boolean) => void;
};

const Hero = ({ joinedWaitlist, setJoinedWaitlist }: HeroProps) => {
  // Scroll and transformation hooks
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 800]); // Adjust for parallax strength

  const bgImg = allImages[17];

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[120vh] opacity-70" // Extends the height beyond the viewport
        style={{ y }} // Apply the parallax effect
      >
        <Image
          loader={imageLoader}
          src={bgImg.src}
          alt={bgImg.alt}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className=" -scale-x-100"
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-center gap-12 md:pl-10 lg:pl-12 pr-10 text-samGreenDark px-4">
        <div className="mt-20">
          <div className="text-2xl">Hi, we are Sam.</div>
          <div className="scale-y-[170%]">

          <motion.p
            className="container  font-samPlayfair text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mt-8 text-wrap md:text-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            >
            WOMEN DESERVE BETTER SUPPORT.
          </motion.p>
            </div>
        </div>
        <div className=" mt-5 font-samSchibsted flex flex-col gap-4 text-xl">
          <div>We’re building it.</div>
          <div>Experts, Community, Navigators — all in one place.</div>
          <div>
            Our waitlist is open. Sign up now and get 15% off when we launch in
            2025.
          </div>

          <div className="max-w-[500px]">
            {joinedWaitlist ? (
              <ShareSam />
            ) : (
              <EmailForm
                joinedWaitlist={joinedWaitlist}
                setJoinedWaitlist={setJoinedWaitlist}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
