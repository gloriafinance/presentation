import React, { useState, useEffect } from "react";
import { Maximize, Minimize, Map } from "lucide-react";

interface BrandHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onGoToMap: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  currentSlide,
  totalSlides,
  onGoToMap,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Erro ao ativar tela cheia:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="gloria-header">
      <div className="header-branding">
        <img 
          src="/logoHorizontal.png" 
          alt="Glória Finance Logo" 
          className="header-logo"
          onClick={() => { if(currentSlide !== 0) onGoToMap(); }}
        />
        {currentSlide > 1 && (
          <div className="header-tag">
            Diagnóstico
          </div>
        )}
      </div>

      <div className="header-actions">
        {/* "Voltar ao Ciclo" Shortcut */}
        {currentSlide > 1 && (
          <button onClick={onGoToMap} className="btn-back-to-map">
            <Map size={14} />
            <span>Voltar ao Ciclo</span>
          </button>
        )}

        {/* Fullscreen Button */}
        <button
          onClick={toggleFullscreen}
          className="btn-fullscreen"
          title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
        </button>

        {/* Slide Counter */}
        <div className="slide-counter">
          Slide {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </header>
  );
};
