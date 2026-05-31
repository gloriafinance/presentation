import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Server, Shield, PieChart, Users, FileCheck } from "lucide-react";
import type { BenefitSlide } from "../data/benefitSlides";

interface BenefitDetailSlideProps {
  slide: BenefitSlide;
}

export const BenefitDetailSlide: React.FC<BenefitDetailSlideProps> = ({ slide }) => {
  // Select an icon based on visual type
  const renderVisual = () => {
    switch (slide.visualType) {
      case "centralized-management":
        return <Server size={80} color="var(--gloria-green)" strokeWidth={1.5} />;
      case "traceability":
        return <Shield size={80} color="var(--gloria-green)" strokeWidth={1.5} />;
      case "reports":
      case "decision":
        return <PieChart size={80} color="var(--gloria-green)" strokeWidth={1.5} />;
      case "continuity":
        return <Users size={80} color="var(--gloria-green)" strokeWidth={1.5} />;
      default:
        return <FileCheck size={80} color="var(--gloria-green)" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="gloria-benefit-layout">
      {/* Left side: Text content */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="gloria-detail-text"
      >
        <span className="benefit-kicker">
          Solução para: {slide.problem}
        </span>
        
        <h2 className="benefit-title">
          {slide.title}
        </h2>
        
        <p className="benefit-desc">
          {slide.description}
        </p>

        {slide.benefits && slide.benefits.length > 0 && (
          <div className="benefit-bullets-block">
            {slide.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="benefit-bullet-row"
              >
                <CheckCircle2 size={16} color="var(--gloria-green)" className="flex-shrink-0 mt-[2px]" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="benefit-impact-card"
        >
          <div className="benefit-impact-text">
            {slide.impact}
          </div>
        </motion.div>
      </motion.div>

      {/* Right side: Clean visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="gloria-detail-visual"
      >
        <div className="visual-container-card" style={{ height: "100%", maxHeight: "360px", background: "radial-gradient(circle at 50% 50%, #FAF9FC 0%, #FFFFFF 100%)" }}>
          {/* Animated placeholder graphic */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center gap-6"
          >
            {renderVisual()}
            <div className="text-[14px] font-bold text-[#A299B0] tracking-widest uppercase text-center max-w-[200px]">
              {slide.shortTitle}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
