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
    scale: 1.05,
    opacity: 0,
    y: direction > 0 ? "2%" : "-2%",
  }),
  center: {
    scale: 1,
    opacity: 1,
    y: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    scale: 0.95,
    opacity: 0,
    y: direction < 0 ? "2%" : "-2%",
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
      dragElastic={0.1}
      onDragEnd={(_, { offset, velocity }) => {
        const swipeThreshold = 50;
        const velocityThreshold = 500;
        
        if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
          onSwipeLeft?.();
        } else if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
          onSwipeRight?.();
        }
      }}
      transition={{
        opacity: { duration: 0.4, ease: "easeInOut" },
        scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        y: { type: "spring", stiffness: 300, damping: 30 },
      }}
      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      style={{ perspective: "2000px", touchAction: "none" }}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
