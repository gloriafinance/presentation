import React, { useEffect, useState } from "react";
import { Home, Maximize, Minimize } from "lucide-react";

interface BrandHeaderProps {
  currentSlide: number;
  totalSlides: number;
  onGoHome: () => void;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  currentSlide,
  totalSlides,
  onGoHome,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((error) => {
        console.error("Erro ao ativar tela cheia:", error);
      });
      return;
    }

    document.exitFullscreen();
  };

  return (
    <header className="gloria-header">
      <div className="header-branding">
        <img
          src="/logoHorizontal.png"
          alt="Glória Finance"
          className="header-logo"
          onClick={() => currentSlide !== 0 && onGoHome()}
        />
        {currentSlide > 0 && <div className="header-tag">Apresentação comercial</div>}
      </div>

      <div className="header-actions">
        {currentSlide > 0 && (
          <button onClick={onGoHome} className="btn-back-to-map">
            <Home size={14} />
            <span>Início</span>
          </button>
        )}

        <button
          onClick={toggleFullscreen}
          className="btn-fullscreen"
          title={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
        >
          {isFullscreen ? <Minimize size={15} /> : <Maximize size={15} />}
        </button>

        <div className="slide-counter">
          Slide {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </header>
  );
};
