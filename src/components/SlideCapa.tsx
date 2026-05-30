import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface SlideCapaProps {
  onStart: () => void;
}

export const SlideCapa: React.FC<SlideCapaProps> = ({ onStart }) => {
  return (
    <div className="gloria-capa-layout">
      
      {/* LEFT COLUMN: COVER TEXT */}
      <div className="gloria-capa-content">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="gloria-kicker"
        >
          <span className="kicker-dot" />
          <span>Apresentação Comercial</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gloria-capa-title"
        >
          O Ciclo da Desorganização Financeira
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gloria-capa-subtitle"
        >
          Uma leitura real, prática, legal e espiritual dos desafios que muitas igrejas enfrentam antes de adotarem uma gestão centralizada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="gloria-capa-statement"
        >
          <span className="statement-text">
            "Antes de apresentar uma solução, precisamos compreender as forças que enfraquecem a clareza, a confiança e a tomada de decisão."
          </span>
        </motion.div>

        {/* Start Button CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={onStart}
          className="gloria-btn-primary"
        >
          <span>Iniciar Diagnóstico</span>
          <Play size={15} fill="#fff" />
        </motion.button>
      </div>

      {/* RIGHT COLUMN: COVER PREMIUM ILLUSTRATION */}
      <div className="gloria-capa-visual">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="visual-card"
        >
          <svg viewBox="0 0 500 420" className="visual-svg" aria-label="Apresentação Comercial Glória Finance">
            {/* Background glowing gradients */}
            <circle cx="250" cy="210" r="160" fill="var(--gloria-soft-purple)" />
            <circle cx="360" cy="280" r="80" fill="var(--gloria-soft-green)" />

            {/* Sutil background church outline vector */}
            <path 
              d="M180 280 L180 180 L250 120 L320 180 L320 280 Z" 
              fill="none" 
              stroke="var(--gloria-border)" 
              strokeWidth="2" 
              opacity="0.5" 
            />
            <line x1="250" y1="120" x2="250" y2="70" stroke="var(--gloria-border)" strokeWidth="2.5" opacity="0.6" />
            <line x1="236" y1="84" x2="264" y2="84" stroke="var(--gloria-border)" strokeWidth="2.5" opacity="0.6" />

            {/* Dashboard / Report grid overlapping */}
            <g transform="translate(110, 150)">
              {/* Card 1: Grid ledger */}
              <rect x="0" y="0" width="220" height="150" rx="16" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 10px 20px rgba(50,24,86,0.04))" }} />
              <rect x="0" y="0" width="220" height="34" rx="16" fill="var(--gloria-purple)" />
              <rect x="0" y="20" width="220" height="14" fill="var(--gloria-purple)" />
              <circle cx="20" cy="17" r="5" fill="var(--gloria-green)" />
              <rect x="34" y="13" width="70" height="8" rx="4" fill="#FFFFFF" opacity="0.9" />

              {/* Rows */}
              <line x1="16" y1="62" x2="204" y2="62" stroke="var(--gloria-border)" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="16" y="48" width="80" height="8" rx="4" fill="var(--gloria-border)" />
              <rect x="160" y="48" width="44" height="8" rx="4" fill="var(--gloria-soft-green)" />

              <line x1="16" y1="94" x2="204" y2="94" stroke="var(--gloria-border)" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="16" y="80" width="100" height="8" rx="4" fill="var(--gloria-border)" />
              <rect x="160" y="80" width="44" height="8" rx="4" fill="var(--gloria-soft-orange)" />

              <line x1="16" y1="126" x2="204" y2="126" stroke="var(--gloria-border)" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="16" y="112" width="60" height="8" rx="4" fill="var(--gloria-border)" />
              <rect x="160" y="112" width="44" height="8" rx="4" fill="var(--gloria-border)" />
            </g>

            {/* Small floating checklist card */}
            <motion.g 
              transform="translate(260, 240)"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <rect x="0" y="0" width="110" height="90" rx="14" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 15px 30px rgba(50,24,86,0.1))" }} />
              <circle cx="28" cy="28" r="10" fill="var(--gloria-soft-green)" />
              <path d="M25 28 l2 2 l4 -4" stroke="var(--gloria-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="46" y="24" width="46" height="8" rx="4" fill="var(--gloria-dark-gray)" opacity="0.8" />
              
              <circle cx="28" cy="58" r="10" fill="var(--gloria-soft-purple)" />
              <path d="M25 58 l2 2 l4 -4" stroke="var(--gloria-purple)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <rect x="46" y="54" width="34" height="8" rx="4" fill="var(--gloria-border)" />
            </motion.g>

            {/* Small currency circle badge */}
            <motion.g 
              transform="translate(80, 230)"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            >
              <circle cx="26" cy="26" r="26" fill="var(--gloria-orange)" style={{ filter: "drop-shadow(0 8px 16px rgba(255,161,0,0.2))" }} />
              <text x="26" y="34" fill="#FFFFFF" fontSize="22" fontWeight="800" textAnchor="middle" fontFamily="Outfit">$</text>
            </motion.g>
          </svg>
        </motion.div>
      </div>

    </div>
  );
};
