import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SlideProps {
  children: React.ReactNode;
  isActive: boolean;
  direction: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

const variants = {
  enter: (direction: number) => ({
    scale: 1.1,
    opacity: 0,
    filter: "blur(20px)",
    y: direction > 0 ? "5%" : "-5%",
  }),
  center: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    scale: 0.9,
    opacity: 0,
    filter: "blur(20px)",
    y: direction < 0 ? "5%" : "-5%",
    zIndex: 0,
  }),
};

export const Slide = ({ children, isActive, direction, onSwipeLeft, onSwipeRight }: SlideProps) => {
  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, { offset, velocity }) => {
        const swipe = offset.x * velocity.x;
        const swipeThreshold = 500;
        if (swipe < -swipeThreshold) {
          onSwipeLeft?.();
        } else if (swipe > swipeThreshold) {
          onSwipeRight?.();
        }
      }}
      transition={{
        opacity: { duration: 0.6, ease: "easeInOut" },
        scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        filter: { duration: 0.6 },
        y: { type: "spring", stiffness: 200, damping: 25 },
      }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      style={{ perspective: "2000px" }}
    >
      {children}
    </motion.div>
  );
};
