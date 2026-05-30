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

  // Dynamic high-fidelity 3D illustrations mapping
  const imageMapping: Record<string, string> = {
    administration: "/images/administracao.png",
    complexity: "/images/rotina-complexa.png",
    "scattered-data": "/images/dados-espalhados.png",
    fragility: "/images/fragilidade-administrativa.png",
    trust: "/images/confianca.png",
    legal: "/images/legal-documental.png",
    stewardship: "/images/mordomia.png",
    continuity: "/images/continuidade.png",
    patrimony: "/images/patrimonio.png",
    decision: "/images/rotina-complexa.png" // beautiful purple fallback representing networks and charts
  };

  const renderIllustration = () => {
    const imageSrc = imageMapping[slide.visualType];
    if (imageSrc) {
      return (
        <img 
          src={imageSrc} 
          alt={`Ilustração representando: ${slide.shortTitle}`} 
          className="detail-visual-svg"
          style={{ borderRadius: "12px", width: "100%", height: "auto", display: "block" }}
        />
      );
    }

    // Default premium fallback shield if no image is defined
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
