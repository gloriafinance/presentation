import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandHeader } from "./components/BrandHeader";
import { NavigationControls } from "./components/NavigationControls";
import { SlideCapa } from "./components/SlideCapa";
import { ProblemCycleMap } from "./components/ProblemCycleMap";
import { ProblemDetailSlide } from "./components/ProblemDetailSlide";
import { SlideConclusao } from "./components/SlideConclusao";
import { problemSlides } from "./data/problemSlides";

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const totalSlides = 13; // Slide 1 (Capa), Slide 2 (Mapa), Slides 3-12 (Dores), Slide 13 (Conclusão)

  // Navigation handlers
  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setDirection("forward");
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setDirection("backward");
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleGoToMap = () => {
    if (currentSlide !== 1) {
      setDirection(currentSlide > 1 ? "backward" : "forward");
      setCurrentSlide(1);
    }
  };

  const handleSelectNode = (slideIndex: number) => {
    setDirection("forward");
    setCurrentSlide(slideIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Escape") {
        handleGoToMap();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  // Framer Motion spring variants
  const slideVariants = {
    enter: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? 200 : -200,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 220, damping: 24 },
        opacity: { duration: 0.22 },
        scale: { duration: 0.22 },
      },
    },
    exit: (dir: "forward" | "backward") => ({
      x: dir === "forward" ? -200 : 200,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring" as const, stiffness: 220, damping: 24 },
        opacity: { duration: 0.18 },
      },
    }),
  };

  // Render proper slide content based on current index
  const renderSlideContent = () => {
    if (currentSlide === 0) {
      return <SlideCapa onStart={() => handleSelectNode(1)} />;
    }
    if (currentSlide === 1) {
      return (
        <ProblemCycleMap
          onSelectNode={handleSelectNode}
          activeNodeId={undefined}
        />
      );
    }
    if (currentSlide === 12) {
      return <SlideConclusao />;
    }

    // Detail slides correspond to index 2 through 11
    const slideDataIndex = currentSlide - 2;
    const currentSlideData = problemSlides[slideDataIndex];
    if (currentSlideData) {
      return <ProblemDetailSlide slide={currentSlideData} />;
    }

    return null;
  };

  return (
    <div className="presentation-viewport">
      <div className="presentation-container">
        
        {/* Brand visual top line */}
        <div className="brand-bar" />

        {/* Global Branding Header */}
        <BrandHeader
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onGoToMap={handleGoToMap}
        />

        {/* Main Content Area with directional Slide transition */}
        <main className="gloria-main-content">
          
          {/* DESKTOP ANIMATED TRANSITION VIEW */}
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

          {/* MOBILE STATIC ADAPTIVE VIEW (Vertical Cards) */}
          <div className="lg:hidden gloria-slide-wrapper">
            {renderSlideContent()}
          </div>

        </main>

        {/* Bottom Navigation Controls */}
        <NavigationControls
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </div>
  );
};

export default App;
