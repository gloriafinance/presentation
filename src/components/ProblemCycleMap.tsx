import React from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface ProblemCycleMapProps {
  onSelectNode: (index: number) => void;
  activeNodeId?: string;
}

// Grouped 8 Nodes representing the simplified scenario for supreme legibility
interface OctagonNode {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  slideIndex: number; // The target slide index in the main App (0-based)
  accentColor: "green" | "orange" | "purple";
  x: number; // exact mathematical percentage left
  y: number; // exact mathematical percentage top
}

// Mathematically perfect octagon coordinates with a wide 40% radius
const octagonNodes: OctagonNode[] = [
  {
    id: "administracao",
    number: 1,
    title: "Administração",
    subtitle: "Sem processos claros",
    slideIndex: 2, // Slide 3
    accentColor: "green",
    x: 50,
    y: 10
  },
  {
    id: "rotina-complexa",
    number: 2,
    title: "Rotina Financeira",
    subtitle: "Fluxo complexo",
    slideIndex: 3, // Slide 4
    accentColor: "purple",
    x: 78.3,
    y: 21.7
  },
  {
    id: "dados-espalhados",
    number: 3,
    title: "Informações",
    subtitle: "Dados espalhados",
    slideIndex: 4, // Slide 5
    accentColor: "orange",
    x: 90,
    y: 50
  },
  {
    id: "rastreabilidade",
    number: 4,
    title: "Rastreabilidade",
    subtitle: "Sem histórico",
    slideIndex: 5, // Slide 6
    accentColor: "purple",
    x: 78.3,
    y: 78.3
  },
  {
    id: "confianca",
    number: 5,
    title: "Confiança",
    subtitle: "Prestação de contas",
    slideIndex: 6, // Slide 7
    accentColor: "green",
    x: 50,
    y: 90
  },
  {
    id: "responsabilidade",
    number: 6,
    title: "Responsabilidade",
    subtitle: "Legal e espiritual",
    slideIndex: 7, // Slide 8
    accentColor: "orange",
    x: 21.7,
    y: 78.3
  },
  {
    id: "continuidade",
    number: 7,
    title: "Continuidade",
    subtitle: "Memória institucional",
    slideIndex: 9, // Slide 10
    accentColor: "green",
    x: 10,
    y: 50
  },
  {
    id: "decisao",
    number: 8,
    title: "Decisão",
    subtitle: "Sem visão de dados",
    slideIndex: 11, // Slide 12
    accentColor: "purple",
    x: 21.7,
    y: 21.7
  }
];

export const ProblemCycleMap: React.FC<ProblemCycleMapProps> = ({
  onSelectNode,
  activeNodeId,
}) => {
  const getAccentColor = (colorName: "green" | "orange" | "purple") => {
    switch (colorName) {
      case "green": return "var(--gloria-green)";
      case "orange": return "var(--gloria-orange)";
      case "purple": return "var(--gloria-purple)";
    }
  };

  const getSoftAccentBg = (colorName: "green" | "orange" | "purple") => {
    switch (colorName) {
      case "green": return "var(--gloria-soft-green)";
      case "orange": return "var(--gloria-soft-orange)";
      case "purple": return "var(--gloria-soft-purple)";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 150, damping: 16 }
    }
  };

  return (
    <div className="gloria-map-layout">
      {/* Header section - compact and premium */}
      <div className="map-header">
        <span className="map-kicker">
          Diagnóstico do Cenário Atual
        </span>
        <h2 className="map-title">
          O Ciclo da Desorganização Financeira
        </h2>
        <p className="map-subtitle">
          Como controles manuais, dados espalhados e falta de rastreabilidade afetam a confiança, a prestação de contas e a tomada de decisão da igreja.
        </p>
      </div>

      {/* Main Canvas Container */}
      <div className="map-canvas-container">
        
        {/* DESKTOP CIRCULAR MINDMAP */}
        <div className="map-circular-canvas">
          
          {/* Animated Dashed Connecting Ring (aligned to 40% radius) */}
          <svg className="map-connecting-ring">
            <motion.circle
              cx="50%"
              cy="50%"
              r="40%"
              fill="none"
              stroke="#D2CADC"
              strokeWidth="2"
              strokeDasharray="10 8"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1, rotate: 270 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Central Orb Statement Card (centered geometrically at 50% left, 50% top) */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring" as const, stiffness: 100, damping: 16 }}
            className="map-center-orb"
            style={{ 
              boxShadow: "0 12px 35px rgba(50, 24, 86, 0.25)",
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%"
            }}
          >
            <div className="orb-icon-box">
              <AlertCircle size={22} className="pulse-animation" />
            </div>
            <strong className="orb-title">
              Gestão Fragmentada
            </strong>
            <span className="orb-description">
              Quando os controles são manuais e isolados, a igreja perde clareza administrativa e segurança de decisão.
            </span>
            <div className="orb-hint">
              Clique para aprofundar
            </div>
          </motion.div>

          {/* Render 8 Grouped Nodes Symmetrically via Manual Octagon Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="map-nodes-layer"
          >
            {octagonNodes.map((node) => {
              const accent = getAccentColor(node.accentColor);
              const softBg = getSoftAccentBg(node.accentColor);
              const isActive = activeNodeId === node.id;

              return (
                <motion.div
                  key={node.id}
                  variants={nodeVariants}
                  onClick={() => onSelectNode(node.slideIndex)}
                  className="map-node"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    x: "-50%",
                    y: "-50%",
                    borderColor: isActive ? accent : "var(--gloria-border)",
                    borderWidth: isActive ? "2px" : "1px",
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: accent
                  }}
                >
                  {/* Left accent bar */}
                  <div 
                    className="node-accent-bar"
                    style={{ backgroundColor: accent }}
                  />

                  {/* Node Content */}
                  <div className="node-content">
                    <div className="node-title-group">
                      <span 
                        className="node-num"
                        style={{ backgroundColor: softBg, color: accent }}
                      >
                        {String(node.number).padStart(2, "0")}
                      </span>
                      <strong className="node-main-title">
                        {node.title}
                      </strong>
                    </div>
                    <span className="node-subtitle">
                      {node.subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* MOBILE GRID TIMELINE FALLBACK */}
        <div className="map-mobile-list">
          
          {/* Mobile statement banner */}
          <div className="mobile-statement-banner">
            <AlertCircle size={18} className="banner-icon" />
            <p className="banner-text">
              Quando os controles são manuais e isolados, a igreja perde clareza administrativa e segurança de decisão.
            </p>
          </div>

          {/* List of nodes */}
          <div className="mobile-nodes-grid">
            {octagonNodes.map((node) => {
              const accent = getAccentColor(node.accentColor);
              const softBg = getSoftAccentBg(node.accentColor);

              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node.slideIndex)}
                  className="mobile-node-card"
                  style={{ borderLeft: `5px solid ${accent}` }}
                >
                  <span 
                    className="mobile-node-num"
                    style={{ backgroundColor: softBg, color: accent }}
                  >
                    {node.number}
                  </span>
                  <div className="mobile-node-text">
                    <strong className="mobile-node-title">
                      {node.title}
                    </strong>
                    <span className="mobile-node-subtitle">
                      {node.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom helper prompt */}
      <div className="map-footer-prompt">
        Passe o mouse para destacar e clique nos pontos para aprofundar cada dor do ciclo.
      </div>
    </div>
  );
};
