import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface SlideCapaProps {
  onStart: () => void;
}

export const SlideCapa: React.FC<SlideCapaProps> = ({ onStart }) => {
  return (
    <div className="gloria-capa-layout">
      <div className="gloria-capa-bg-glow" />

      {/* LEFT: Message */}
      <div className="gloria-capa-content">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="gloria-kicker"
        >
          <span className="kicker-dot" />
          <span>APRESENTAÇÃO COMERCIAL</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gloria-capa-title"
        >
          O Ciclo da Desorganização Financeira
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="gloria-capa-subtitle"
        >
          Como controles manuais, dados espalhados e falta de rastreabilidade podem enfraquecer a clareza, a confiança e a tomada de decisão da igreja.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="gloria-capa-statement"
        >
          <span className="statement-text">
            "Antes de apresentar uma solução, precisamos entender o ciclo que enfraquece a gestão."
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3.0 }}
          onClick={onStart}
          className="gloria-btn-primary"
        >
          <span>Iniciar diagnóstico da gestão</span>
          <Play size={15} fill="#fff" />
        </motion.button>
      </div>

      {/* RIGHT: Pain Board */}
      <div className="gloria-capa-visual">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="capa-pain-board"
        >
          <div className="capa-pain-board-bg" />

          {/* Title badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pain-title-badge"
          >
            Gestão fragmentada
          </motion.div>

          {/* SVG Scene */}
          <svg viewBox="0 0 480 520" className="capa-pain-svg" preserveAspectRatio="xMidYMid meet">
            
            {/* ═══ CENTRO: Dashboard Incompleto ═══ */}
            <motion.g
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
              transform="translate(140, 170)"
            >
              <rect width="200" height="180" rx="16" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" style={{ filter: "drop-shadow(0 12px 30px rgba(50,24,86,0.08))" }} />
              {/* Header bar */}
              <rect width="200" height="36" rx="16" fill="var(--gloria-dark-purple)" opacity="0.15" />
              <rect x="0" y="22" width="200" height="14" fill="var(--gloria-dark-purple)" opacity="0.15" />
              <rect x="14" y="10" width="60" height="8" rx="4" fill="var(--gloria-purple)" opacity="0.5" />
              <circle cx="180" cy="18" r="6" fill="var(--gloria-orange)" opacity="0.6" />
              {/* Mini chart area — incomplete */}
              <rect x="14" y="50" width="80" height="60" rx="8" fill="var(--gloria-soft-purple)" />
              <rect x="108" y="50" width="78" height="60" rx="8" fill="var(--gloria-soft-purple)" />
              {/* Bar chart skeleton */}
              <rect x="24" y="90" width="12" height="16" rx="2" fill="var(--gloria-purple)" opacity="0.3" />
              <rect x="42" y="80" width="12" height="26" rx="2" fill="var(--gloria-purple)" opacity="0.3" />
              <rect x="60" y="85" width="12" height="21" rx="2" fill="var(--gloria-purple)" opacity="0.3" />
              {/* Missing data indicators */}
              <rect x="118" y="65" width="58" height="6" rx="3" fill="var(--gloria-border)" />
              <rect x="118" y="78" width="40" height="6" rx="3" fill="var(--gloria-border)" />
              <rect x="118" y="91" width="48" height="6" rx="3" fill="var(--gloria-border)" />
              {/* Bottom row — empty */}
              <rect x="14" y="125" width="172" height="40" rx="8" fill="var(--gloria-soft-purple)" opacity="0.5" />
              <rect x="24" y="138" width="80" height="6" rx="3" fill="var(--gloria-border)" />
              <rect x="24" y="150" width="50" height="6" rx="3" fill="var(--gloria-border)" />
              {/* "?" mark */}
              <text x="160" y="150" fill="var(--gloria-orange)" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="Outfit" opacity="0.7">?</text>
            </motion.g>

            {/* ═══ PLANILHA (Top-Left) ═══ */}
            <motion.g
              initial={{ opacity: 0, x: -30, rotate: -18 }}
              animate={{ opacity: 1, x: 0, rotate: -10 }}
              transition={{ delay: 0.9, duration: 0.7, type: "spring" }}
              transform="translate(20, 55)"
              style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.08))" }}
            >
              <rect width="130" height="95" rx="10" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" />
              <rect width="130" height="22" rx="10" fill="#21A366" />
              <rect x="0" y="14" width="130" height="8" fill="#21A366" />
              {/* Grid lines */}
              <line x1="8" y1="36" x2="122" y2="36" stroke="var(--gloria-border)" strokeWidth="1" />
              <line x1="8" y1="50" x2="122" y2="50" stroke="var(--gloria-border)" strokeWidth="1" />
              <line x1="8" y1="64" x2="122" y2="64" stroke="var(--gloria-border)" strokeWidth="1" />
              <line x1="8" y1="78" x2="122" y2="78" stroke="var(--gloria-border)" strokeWidth="1" />
              <line x1="42" y1="22" x2="42" y2="95" stroke="var(--gloria-border)" strokeWidth="1" />
              <line x1="82" y1="22" x2="82" y2="95" stroke="var(--gloria-border)" strokeWidth="1" />
              {/* Cell data */}
              <rect x="10" y="26" width="26" height="6" rx="3" fill="var(--gloria-dark-gray)" opacity="0.3" />
              <rect x="46" y="26" width="30" height="6" rx="3" fill="var(--gloria-dark-gray)" opacity="0.3" />
              <rect x="86" y="26" width="28" height="6" rx="3" fill="var(--gloria-dark-gray)" opacity="0.3" />
            </motion.g>

            {/* ═══ WHATSAPP (Top-Right) ═══ */}
            <motion.g
              initial={{ opacity: 0, x: 30, rotate: 18 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ delay: 1.0, duration: 0.7, type: "spring" }}
              transform="translate(340, 30)"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))" }}
            >
              <rect width="120" height="155" rx="14" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" />
              <rect width="120" height="34" rx="14" fill="#128C7E" />
              <rect x="0" y="20" width="120" height="14" fill="#128C7E" />
              {/* Title */}
              <rect x="12" y="10" width="50" height="7" rx="3.5" fill="#FFFFFF" opacity="0.8" />
              {/* Chat bubbles */}
              <rect x="10" y="46" width="70" height="20" rx="10" fill="#E2E8F0" />
              <rect x="40" y="74" width="70" height="20" rx="10" fill="#DCF8C6" />
              <rect x="10" y="102" width="55" height="20" rx="10" fill="#E2E8F0" />
              <rect x="50" y="128" width="60" height="16" rx="8" fill="#DCF8C6" opacity="0.7" />
            </motion.g>

            {/* ═══ COMPROVANTE (Bottom-Right) ═══ */}
            <motion.g
              initial={{ opacity: 0, y: 30, rotate: 20 }}
              animate={{ opacity: 1, y: 0, rotate: 14 }}
              transition={{ delay: 1.2, duration: 0.7, type: "spring" }}
              transform="translate(360, 330)"
              style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.08))" }}
            >
              <path d="M 0 0 L 100 0 L 100 145 L 88 135 L 75 145 L 62 135 L 50 145 L 38 135 L 25 145 L 12 135 L 0 145 Z" fill="#FFFEF8" stroke="var(--gloria-border)" strokeWidth="1.5" />
              {/* Content */}
              <rect x="14" y="16" width="72" height="6" rx="3" fill="var(--gloria-dark-gray)" opacity="0.4" />
              <line x1="14" y1="34" x2="86" y2="34" stroke="var(--gloria-border)" strokeDasharray="3 3" />
              <rect x="14" y="44" width="50" height="5" rx="2.5" fill="var(--gloria-border)" />
              <rect x="14" y="56" width="60" height="5" rx="2.5" fill="var(--gloria-border)" />
              <rect x="14" y="68" width="40" height="5" rx="2.5" fill="var(--gloria-border)" />
              {/* Total */}
              <rect x="14" y="90" width="72" height="16" rx="4" fill="var(--gloria-purple)" opacity="0.12" />
              <rect x="20" y="95" width="40" height="6" rx="3" fill="var(--gloria-purple)" opacity="0.4" />
            </motion.g>

            {/* ═══ DOCUMENTO (Bottom-Left) ═══ */}
            <motion.g
              initial={{ opacity: 0, y: 25, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ delay: 1.1, duration: 0.7, type: "spring" }}
              transform="translate(15, 310)"
              style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.08))" }}
            >
              <path d="M 0 0 L 85 0 L 115 30 L 115 150 L 0 150 Z" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" />
              <path d="M 85 0 L 85 30 L 115 30" fill="none" stroke="var(--gloria-border)" strokeWidth="1.5" />
              {/* Content lines */}
              <rect x="14" y="45" width="86" height="5" rx="2.5" fill="var(--gloria-border)" />
              <rect x="14" y="58" width="86" height="5" rx="2.5" fill="var(--gloria-border)" />
              <rect x="14" y="71" width="60" height="5" rx="2.5" fill="var(--gloria-border)" />
              <rect x="14" y="84" width="74" height="5" rx="2.5" fill="var(--gloria-border)" />
              {/* Signature area */}
              <line x1="14" y1="115" x2="100" y2="115" stroke="var(--gloria-dark-gray)" strokeWidth="1" opacity="0.3" />
              <rect x="14" y="122" width="50" height="4" rx="2" fill="var(--gloria-border)" opacity="0.5" />
              {/* Alert circle */}
              <circle cx="100" cy="135" r="12" fill="var(--gloria-orange)" />
              <text x="100" y="140" fill="#FFF" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">!</text>
            </motion.g>

            {/* ═══ GRÁFICO SOLTO (Top-Center) ═══ */}
            <motion.g
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, type: "spring" }}
              transform="translate(175, 55)"
              style={{ filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.06))" }}
            >
              <rect width="130" height="85" rx="12" fill="#FFFFFF" stroke="var(--gloria-border)" strokeWidth="1.5" />
              <path d="M 15 70 L 35 50 L 55 58 L 75 35 L 95 42 L 115 25" fill="none" stroke="var(--gloria-orange)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="75" cy="35" r="4" fill="var(--gloria-orange)" />
              <circle cx="115" cy="25" r="4" fill="var(--gloria-orange)" />
              {/* Alert badge */}
              <circle cx="120" cy="12" r="10" fill="var(--gloria-orange)" opacity="0.2" />
              <text x="120" y="16" fill="var(--gloria-orange)" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">!</text>
            </motion.g>

            {/* ═══ CONEXIONES PUNTEADAS (appear after elements) ═══ */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 2.0, duration: 1 }}
              fill="none"
              stroke="var(--gloria-orange)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            >
              {/* Planilha → Centro */}
              <path d="M 130 110 Q 180 160 200 200" />
              {/* WhatsApp → Centro */}
              <path d="M 360 170 Q 330 200 310 220" />
              {/* Gráfico → Centro */}
              <path d="M 240 135 L 240 175" />
              {/* Documento → Centro */}
              <path d="M 115 370 Q 160 340 195 310" />
              {/* Comprovante → Centro */}
              <path d="M 375 350 Q 340 330 305 310" />
            </motion.g>

            {/* ═══ ALERT BADGES ═══ */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              {/* sem histórico */}
              <g transform="translate(100, 225)">
                <rect width="80" height="18" rx="9" fill="var(--gloria-orange)" opacity="0.15" />
                <text x="40" y="13" fill="var(--gloria-orange)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">sem histórico</text>
              </g>
              {/* sem padrão */}
              <g transform="translate(310, 200)">
                <rect width="70" height="18" rx="9" fill="var(--gloria-orange)" opacity="0.15" />
                <text x="35" y="13" fill="var(--gloria-orange)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">sem padrão</text>
              </g>
              {/* sem comprovante */}
              <g transform="translate(175, 370)">
                <rect width="100" height="18" rx="9" fill="var(--gloria-orange)" opacity="0.15" />
                <text x="50" y="13" fill="var(--gloria-orange)" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="Inter, sans-serif">sem comprovante</text>
              </g>
            </motion.g>

          </svg>

          {/* ═══ FLOATING LABELS (HTML over SVG) ═══ */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="pain-label pain-label-orange" style={{ top: "9%", left: "4%" }}>
            Planilha
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
            className="pain-label pain-label-orange" style={{ top: "5%", right: "4%" }}>
            WhatsApp
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="pain-label pain-label-orange" style={{ bottom: "22%", left: "4%" }}>
            Documento
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="pain-label pain-label-orange" style={{ bottom: "18%", right: "4%" }}>
            Comprovante
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="pain-label pain-label-orange" style={{ top: "9%", left: "38%" }}>
            Relatório
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
            className="pain-label pain-label-purple" style={{ top: "32%", left: "50%", transform: "translateX(-50%)" }}>
            Visão incompleta
          </motion.div>

          {/* Bottom phrase */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="pain-bottom-phrase"
          >
            Dados existem, mas <span style={{ color: "var(--gloria-orange)", fontWeight: 800 }}>não conversam entre si.</span>
          </motion.div>

        </motion.div>
      </div>

    </div>
  );
};
