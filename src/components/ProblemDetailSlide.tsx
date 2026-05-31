import React from "react";
import { motion } from "framer-motion";
import type { ProblemSlide } from "../data/problemSlides";
import { HelpCircle } from "lucide-react";
import { ProblemVisual } from "./visuals/ProblemVisual";

interface ProblemDetailSlideProps {
  slide: ProblemSlide;
}

export const ProblemDetailSlide: React.FC<ProblemDetailSlideProps> = ({ slide }) => {
  const accent = `var(--gloria-${slide.accentColor})`;
  const softBg = `var(--gloria-soft-${slide.accentColor})`;

  // Framer Motion variants
  const elementVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div className="gloria-detail-layout">
      {/* LEFT COLUMN: TEXT CONTENT */}
      <div className="gloria-detail-text">
        
        {/* Kicker Pill */}
        <motion.div 
          variants={elementVariants}
          className="gloria-kicker"
          style={{ 
            color: accent, 
            borderColor: accent,
            backgroundColor: softBg 
          }}
        >
          <span className="kicker-dot" style={{ backgroundColor: accent }} />
          <span>Cenário {String(slide.number).padStart(2, "0")} — {slide.shortTitle}</span>
        </motion.div>

        {/* Slide Title */}
        <motion.h2 
          variants={elementVariants}
          className="gloria-detail-title"
        >
          {slide.title}
        </motion.h2>

        {/* Slide Paragraph Description */}
        <motion.p 
          variants={elementVariants}
          className="gloria-detail-desc"
        >
          {slide.description}
        </motion.p>

        {/* Impact Quote callout */}
        <motion.div 
          variants={elementVariants}
          className="gloria-detail-impact-card"
          style={{ borderLeft: `6px solid ${accent}` }}
        >
          <div className="impact-kicker">
            Frase de Impacto
          </div>
          <span className="impact-text">
            “{slide.impact}”
          </span>
        </motion.div>

        {/* Bullet points cascaded entry */}
        {slide.bullets && slide.bullets.length > 0 && (
          <motion.div 
            variants={listVariants}
            className="gloria-detail-bullets-block"
          >
            <div className="bullets-header">
              <HelpCircle size={14} style={{ color: accent }} />
              <span>Pontos de Reflexão</span>
            </div>
            {slide.bullets.map((bullet, i) => (
              <motion.div 
                key={i}
                variants={elementVariants}
                className="bullet-row"
              >
                <span 
                  className="bullet-dot" 
                  style={{ backgroundColor: accent }} 
                />
                <span>{bullet}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* RIGHT COLUMN: VISUAL ILLUSTRATION */}
      <div className="gloria-detail-visual">
        <motion.div 
          variants={elementVariants}
          className="visual-container-card"
        >
          <ProblemVisual type={slide.visualType} />
        </motion.div>
      </div>
    </div>
  );
};
