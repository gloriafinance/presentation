import React from "react";
import { motion } from "framer-motion";
import type { ProblemSlide } from "../data/problemSlides";
import { HelpCircle } from "lucide-react";

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

  // Custom high-fidelity inline SVG illustrations based on slide.visualType
  const renderIllustration = () => {
    switch (slide.visualType) {
      case "administration":
        return (
          <svg viewBox="0 0 500 420" className="detail-visual-svg" aria-label="Ilustração de Administração">
            {/* Background elements */}
            <circle cx="250" cy="210" r="180" fill="var(--gloria-soft-green)" />
            <motion.circle 
              cx="250" 
              cy="210" 
              r="140" 
              fill="none" 
              stroke="var(--gloria-green)" 
              strokeWidth="1.5" 
              strokeDasharray="6 8"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            />

            {/* Gear representing processes/organization */}
            <motion.g 
              transform="translate(370, 110)"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            >
              <circle cx="0" cy="0" r="28" fill="var(--gloria-soft-purple)" stroke="var(--gloria-purple)" strokeWidth="2" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <rect 
                  key={angle}
                  x="-6" 
                  y="-34" 
                  width="12" 
                  height="14" 
                  rx="3" 
                  fill="var(--gloria-purple)"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="10" fill="#fff" />
            </motion.g>

            {/* Main Desk Ledger Board */}
            <g transform="translate(130, 110)">
              {/* Board Shadow */}
              <rect x="6" y="8" width="240" height="200" rx="16" fill="rgba(50, 24, 86, 0.05)" />
              {/* Board Body */}
              <rect x="0" y="0" width="240" height="200" rx="16" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" />
              {/* Header bar */}
              <rect x="0" y="0" width="240" height="42" rx="16" fill="var(--gloria-purple)" />
              <rect x="0" y="26" width="240" height="16" fill="var(--gloria-purple)" /> {/* cover rounded bottom corners */}
              
              <text x="24" y="25" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="Outfit">
                LIVRO RAZÃO DA IGREJA
              </text>

              {/* Rows inside the ledger */}
              {[62, 94, 126, 158].map((y, index) => (
                <g key={y}>
                  <line x1="20" y1={y} x2="220" y2={y} stroke="var(--gloria-border)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="30" cy={y - 6} r="4" fill={index % 2 === 0 ? "var(--gloria-green)" : "var(--gloria-orange)"} />
                  <rect x="46" y={y - 11} width={80 + (index % 3) * 20} height="8" rx="4" fill="#E2DEE8" />
                  <rect x="180" y={y - 11} width="34" height="8" rx="4" fill="var(--gloria-medium-gray)" opacity="0.6" />
                </g>
              ))}
            </g>

            {/* Checkmark Clip floating */}
            <motion.g 
              transform="translate(100, 260)"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="80" height="80" rx="20" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 8px 16px rgba(50,24,86,0.06))" }} />
              <circle cx="40" cy="40" r="24" fill="var(--gloria-soft-green)" />
              <path d="M32 40 l6 6 l10 -12" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </motion.g>

            {/* Loose unorganized spreadsheet symbol */}
            <motion.g 
              transform="translate(320, 240)"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="90" height="70" rx="12" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 8px 16px rgba(50,24,86,0.06))" }} />
              <rect x="12" y="14" width="66" height="8" rx="3" fill="var(--gloria-soft-purple)" />
              <rect x="12" y="30" width="40" height="6" rx="2" fill="var(--gloria-border)" />
              <rect x="12" y="44" width="54" height="6" rx="2" fill="var(--gloria-border)" />
            </motion.g>
          </svg>
        );

      default:
        const iconColor = accent;
        const iconBg = softBg;
        
        return (
          <svg viewBox="0 0 500 420" className="detail-visual-svg">
            <circle cx="250" cy="210" r="160" fill={iconBg} />
            <motion.circle 
              cx="250" 
              cy="210" 
              r="130" 
              fill="none" 
              stroke={iconColor} 
              strokeWidth="2" 
              strokeDasharray="5 5"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />
            {/* Elegant Central Shield representation of the challenge */}
            <g transform="translate(200, 160)">
              <rect x="0" y="0" width="100" height="100" rx="28" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="2" style={{ filter: "drop-shadow(0 12px 28px rgba(50,24,86,0.08))" }} />
              <circle cx="50" cy="50" r="30" fill={iconBg} />
              <path d="M42 50 l6 6 l12 -12" stroke={iconColor} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            
            {/* Visual labels indicating administrative tension */}
            <motion.g 
              transform="translate(100, 110)"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="100" height="34" rx="8" fill="#fff" stroke="var(--gloria-border)" strokeWidth="1" />
              <text x="50" y="21" fontSize="9" fontWeight="800" textAnchor="middle" fill="var(--gloria-dark-gray)">DESCENTRALIZADO</text>
            </motion.g>

            <motion.g 
              transform="translate(300, 270)"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="100" height="34" rx="8" fill="var(--gloria-dark-purple)" />
              <text x="50" y="21" fontSize="9" fontWeight="800" textAnchor="middle" fill="#fff">DADOS ESPALHADOS</text>
            </motion.g>
          </svg>
        );
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
          {renderIllustration()}
        </motion.div>
      </div>
    </div>
  );
};
