import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandHeader } from "./components/BrandHeader";
import { NavigationControls } from "./components/NavigationControls";
import { SlideCapa } from "./components/SlideCapa";
import { ProblemCycleMap } from "./components/ProblemCycleMap";
import { ProblemDetailSlide } from "./components/ProblemDetailSlide";
import { SlideConclusao } from "./components/SlideConclusao";
import { SlideTransicaoSolucao } from "./components/SlideTransicaoSolucao";
import { BenefitDetailSlide } from "./components/BenefitDetailSlide";
import { SlideMapaSolucao } from "./components/SlideMapaSolucao";
import { SlidePosicionamentoFinal } from "./components/SlidePosicionamentoFinal";
import { problemSlides } from "./data/problemSlides";
import { benefitSlides } from "./data/benefitSlides";

export const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const totalSlides = 17; // 1(Capa) + 1(Mapa) + 10(Dores) + 1(Conclusão) + 1(Transição) + 1(Benefício Modelo) + 1(Mapa Solução) + 1(Posicionamento)

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
    if (currentSlide === 0) return <SlideCapa onStart={() => handleSelectNode(1)} />;
    if (currentSlide === 1) return <ProblemCycleMap onSelectNode={handleSelectNode} activeNodeId={undefined} />;
    
    // Problem Detail Slides (indices 2 through 11)
    if (currentSlide >= 2 && currentSlide <= 11) {
      const slideDataIndex = currentSlide - 2;
      return <ProblemDetailSlide slide={problemSlides[slideDataIndex]} />;
    }
    
    if (currentSlide === 12) return <SlideConclusao />;
    
    // New Benefit Phase
    if (currentSlide === 13) return <SlideTransicaoSolucao />;
    
    // Benefit Detail Slides (index 14 - currently only 1 model slide)
    if (currentSlide === 14) {
      return <BenefitDetailSlide slide={benefitSlides[0]} />;
    }
    
    if (currentSlide === 15) return <SlideMapaSolucao />;
    if (currentSlide === 16) return <SlidePosicionamentoFinal />;

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
