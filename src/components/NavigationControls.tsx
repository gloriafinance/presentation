import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const slideLabels = [
  "Glória Finance",
  "O desafio",
  "A plataforma",
  "Operação conectada",
  "Experiência do membro",
  "Resultados",
  "Demonstração",
];

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
      <div className="nav-brand-text">Glória Finance &middot; Gestão para igrejas</div>

      <div className="nav-controls-group">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`nav-arrow-btn ${isFirst ? "disabled" : ""}`}
          title="Slide anterior"
        >
          <ArrowLeft size={14} />
        </button>

        <div className="nav-progress-block">
          <div className="progress-labels">
            <span>{slideLabels[currentSlide] ?? "Apresentação"}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`nav-arrow-btn ${isLast ? "disabled" : ""}`}
          title="Próximo slide"
        >
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="nav-slide-indicator">
        Pág. {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
      </div>
    </div>
  );
};
