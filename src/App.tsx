import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandHeader } from "./components/BrandHeader";
import { NavigationControls } from "./components/NavigationControls";
import {
  CommercialClosing,
  CommercialCover,
  CommercialFeatures,
  CommercialFlow,
  CommercialMember,
  CommercialOutcomes,
  CommercialProblem,
} from "./components/CommercialSlides";
import "./commercial.css";

const TOTAL_SLIDES = 7;

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const goToSlide = (slide: number) => {
    if (slide < 0 || slide >= TOTAL_SLIDES || slide === currentSlide) return;
    setDirection(slide > currentSlide ? "forward" : "backward");
    setCurrentSlide(slide);
  };

  const handleNext = () => goToSlide(currentSlide + 1);
  const handlePrev = () => goToSlide(currentSlide - 1);
  const handleGoHome = () => goToSlide(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        if (currentSlide < TOTAL_SLIDES - 1) {
          setDirection("forward");
          setCurrentSlide((slide) => slide + 1);
        }
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentSlide > 0) {
          setDirection("backward");
          setCurrentSlide((slide) => slide - 1);
        }
      } else if (event.key === "Escape" && currentSlide !== 0) {
        setDirection("backward");
        setCurrentSlide(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return <CommercialCover onStart={() => goToSlide(1)} />;
      case 1:
        return <CommercialProblem />;
      case 2:
        return <CommercialFeatures />;
      case 3:
        return <CommercialFlow />;
      case 4:
        return <CommercialMember />;
      case 5:
        return <CommercialOutcomes />;
      case 6:
        return <CommercialClosing />;
      default:
        return null;
    }
  };

  const slideVariants = {
    enter: (slideDirection: "forward" | "backward") => ({
      x: slideDirection === "forward" ? 140 : -140,
      opacity: 0,
      scale: 0.985,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 230, damping: 26 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    },
    exit: (slideDirection: "forward" | "backward") => ({
      x: slideDirection === "forward" ? -140 : 140,
      opacity: 0,
      scale: 0.985,
      transition: { duration: 0.17 },
    }),
  };

  return (
    <div className="presentation-viewport">
      <div className="presentation-container">
        <div className="brand-bar" />

        <BrandHeader
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onGoHome={handleGoHome}
        />

        <main className="gloria-main-content">
          <div className="hidden lg:block w-full h-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="gloria-slide-wrapper"
              >
                {renderSlideContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:hidden gloria-slide-wrapper">
            {renderSlideContent()}
          </div>
        </main>

        <NavigationControls
          currentSlide={currentSlide}
          totalSlides={TOTAL_SLIDES}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default App;
