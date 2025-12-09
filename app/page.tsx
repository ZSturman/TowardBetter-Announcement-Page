"use client";
import React, { useState } from "react";
import FAQs from "@/components/sections/FAQs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import { logo } from "@/site/media";
import WhySam from "@/components/sections/WhySam";
import WhyNow from "@/components/sections/WhyNow";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SignupCardContainer from "@/components/containers/SignupCardContainer";
import EmailForm from "@/components/forms/EmailForm";
import ExpertSignupForm from "@/components/forms/ExpertSignupForm";
import Link from "next/link";

export default function Home() {
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1, // Trigger when 10% of the Hero section is visible
  });

  // Use Intersection Observer for the WhySam section
  const { ref: whySamRef, inView: whySamInView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <div className="bg-samBlush w-screen relative font-samPlayfair">
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50"
        style={{ pointerEvents: "none" }}
      >
        <AnimatePresence>
          {heroInView && (
            <motion.div
              className="fixed top-8 left-0 md:left-8 scale-50 md:scale-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={1}
            >
              <Image
                src={logo.green.src}
                alt={logo.green.alt}
                width={150}
                height={150}
              />
            </motion.div>
          )}
          {whySamInView && !heroInView && (
            <motion.div
            className="fixed top-8 left-0 md:left-8 scale-50 md:scale-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={2}
            >
              <Image
                src={logo.blush.src}
                alt={logo.blush.alt}
                width={150}
                height={150}
              />
            </motion.div>
          )}
          {!whySamInView &&  !heroInView && (
            <motion.div
              className="fixed top-8 left-8 hidden md:block scale-50 md:scale-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={3}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logo.green.src}
                alt={logo.green.alt}
                width={150}
                height={150}
              />
            </motion.div>
          )}

          
        </AnimatePresence>

        <AnimatePresence>
          <div>
            <motion.div
              className="fixed bottom-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="text-white text-opacity-80 text-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                Scroll to explore
              </motion.div>
            </motion.div>
          </div>
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="w-full h-screen" id={"home"}>
        <Hero
          joinedWaitlist={joinedWaitlist}
          setJoinedWaitlist={setJoinedWaitlist}
        />
      </section>

      {/* Animated Sections */}
      <section ref={whySamRef} className="w-full">
        <WhySam />
      </section>

      <section className="w-full">
        <WhyNow />
      </section>

      <section className="w-full">
        <Features />
      </section>

      <section className="w-full">
        <FAQs />
      </section>

      <section className="space-y-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SignupCardContainer
            title="Early Access"
            content="Be the first to meet Sam and receive exclusive perks by signing up for our early access."
            triggerText="Join Our Waitlist"
            formTitle={`${
              joinedWaitlist
                ? " Thank you for joining our waitlist! "
                : "Join the Sam Waitlist"
            }`}
            formDescription={`${
              joinedWaitlist ? " " : "Enter your email to join our waitlist"
            }`}
            invert={true}
          >
            {joinedWaitlist ? (
              <div className="text-xl text-black">
                We&apos;ll be in touch soon.
              </div>
            ) : (
              <EmailForm
                joinedWaitlist={joinedWaitlist}
                setJoinedWaitlist={setJoinedWaitlist}
              />
            )}
          </SignupCardContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <SignupCardContainer
            title="The Sam Community"
            description="We are now accepting Professionals to join our Waitlist."
            content="Join our team and be a part of a movement that champions connection and community."
            triggerText="Join Our Team"
            formTitle="Apply as a Professional"
            formDescription="Fill out the form to apply as a professional on our platform."
            invert={false}
          >
            <ExpertSignupForm setSignedUp={setSignedUp} signedUp={signedUp} />
          </SignupCardContainer>
        </motion.div>
      </section>

      <section className="w-full pt-20 pb-10 bg-samGreenDark text-samBlush px-10">
        <p className="text-xl text-center mb-8 font-samPlayfair">
          For media inquiries or to request a press kit, please contact us at hello [at] example.com (demo)
        </p>

        <Link href="/terms-of-service" className="text-samBlush">
          Terms of Service
        </Link>
      </section>
    </div>
  );
}
