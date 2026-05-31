import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}) => {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="gloria-nav-bar">
      {/* Left side brand indicator */}
      <div className="nav-brand-text">
        Glória Finance &middot; Diagnóstico de Gestão
      </div>

      {/* Center navigation controls */}
      <div className="nav-controls-group">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`nav-arrow-btn ${isFirst ? "disabled" : ""}`}
          title="Slide Anterior (Seta Esquerda)"
        >
          <ArrowLeft size={14} />
        </button>

        <div className="nav-progress-block">
          <div className="progress-labels">
            <span>
              {currentSlide === 0 ? "Apresentação" : 
               currentSlide === 1 ? "O Ciclo" : 
               currentSlide <= 11 ? "Análise da Dor" : 
               currentSlide === 12 ? "Diagnóstico" :
               currentSlide === 13 ? "A Solução" :
               currentSlide === 14 ? "Benefícios" :
               currentSlide === 15 ? "Matriz de Solução" :
               "Conclusão Final"}
            </span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`nav-arrow-btn ${isLast ? "disabled" : ""}`}
          title="Próximo Slide (Seta Direita)"
        >
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Right side slide indicator */}
      <div className="nav-slide-indicator">
        Pág. {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </div>
  );
};
