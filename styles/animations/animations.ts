import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};

export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};


export const parallax: Variants = {
  initial: { y: 0 },
  animate: (custom: number) => ({
    y: custom * 10,
    transition: { type: "spring", stiffness: 100 },
  }),
};

export const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const onViewFadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const onScrollScale: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (custom: number) => ({
    scale: custom >= 1 ? 1 : 0.8 + 0.2 * custom,
    opacity: custom,
    transition: { duration: 0.4 },
  }),
};