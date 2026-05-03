import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Slide } from "./components/Slide";
import { HeroSlide } from "./components/slides/HeroSlide";
import { VisionSlide } from "./components/slides/VisionSlide";
import { VisionSlide2 } from "./components/slides/VisionSlide2";
import { VisionSlide3 } from "./components/slides/VisionSlide3";
import { TimelineSlide } from "./components/slides/TimelineSlide";
import { ComposersSlide } from "./components/slides/ComposersSlide";
import { ComposersSlide2 } from "./components/slides/ComposersSlide2";
import { EducationSlide } from "./components/slides/EducationSlide";
import { FocusSlide } from "./components/slides/FocusSlide";
import { FocusSlide2 } from "./components/slides/FocusSlide2";
import { MediaSlide } from "./components/slides/MediaSlide";
import { LegacySlide } from "./components/slides/LegacySlide";
import { ChevronLeft, ChevronRight, Presentation, Maximize, Minimize } from "lucide-react";

const slides = [
  { id: "hero", component: HeroSlide },
  { id: "vision", component: VisionSlide },
  { id: "vision2", component: VisionSlide2 },
  { id: "vision3", component: VisionSlide3 },
  { id: "timeline", component: TimelineSlide },
  { id: "composers1", component: ComposersSlide },
  { id: "composers2", component: ComposersSlide2 },
  { id: "education", component: EducationSlide },
  { id: "focus1", component: FocusSlide },
  { id: "focus2", component: FocusSlide2 },
  { id: "media", component: MediaSlide },
  { id: "legacy", component: LegacySlide },
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative font-sans">
      
      {/* Slides Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <Slide 
            key={slides[currentSlideIndex].id} 
            isActive={true} 
            direction={direction}
            onSwipeLeft={nextSlide}
            onSwipeRight={prevSlide}
          >
            {React.createElement(slides[currentSlideIndex].component)}
          </Slide>
        </AnimatePresence>
      </div>

      {/* Navigation Controls Overlay */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-8 z-50 pointer-events-none">
        
        {/* Progress Dots */}
        <div className="flex gap-4 pointer-events-auto bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlideIndex ? "bg-red-600 w-10" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Side Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-50 pointer-events-auto">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`p-6 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 transition-all ${currentSlideIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/40 hover:scale-110 active:scale-95'}`}
        >
          <ChevronLeft size={32} />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-50 pointer-events-auto">
        <button 
          onClick={nextSlide}
          disabled={currentSlideIndex === slides.length - 1}
          className={`p-6 rounded-full bg-black/20 backdrop-blur-md text-white border border-white/10 transition-all ${currentSlideIndex === slides.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/40 hover:scale-110 active:scale-95'}`}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Fullscreen Toggle Button */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        <button 
          onClick={toggleFullscreen}
          className="p-5 rounded-2xl bg-white/5 backdrop-blur-md text-white/50 border border-white/10 hover:bg-white/10 hover:text-white active:scale-95 transition-all duration-300"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize size={28} /> : <Maximize size={28} />}
        </button>
      </div>

      {/* Persistent Author Credit (Watermark) */}
      <div className="absolute right-8 bottom-6 z-50 pointer-events-none hidden md:block">
        <div className="flex items-center gap-3">
           <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-red-500/50"></div>
           <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-medium">
              Yusuf Selman Gülmez
           </p>
        </div>
      </div>
    </div>
  );
}
