import React from "react";
import { motion } from "framer-motion";
import { Clipboard, Shield, Heart, Compass, TrendingUp } from "lucide-react";

export const SlideConclusao: React.FC = () => {
  const dimensions = [
    {
      title: "Administrativo",
      desc: "Retrabalho constante, perda silenciosa de comprovantes e ausência de fluxos padronizados.",
      icon: <Clipboard size={20} className="icon-purple" />,
      color: "var(--gloria-purple)"
    },
    {
      title: "Financeiro",
      desc: "Dificuldade em prever saldos futuros, acompanhar saídas e unificar contas departamentais.",
      icon: <TrendingUp size={20} className="icon-green" />,
      color: "var(--gloria-green)"
    },
    {
      title: "Jurídico-Documental",
      desc: "Fragilidade para comprovar decisões contábeis antigas ou apoiar trocas de gestão.",
      icon: <Shield size={20} className="icon-orange" />,
      color: "var(--gloria-orange)"
    },
    {
      title: "Espiritual (Zelo)",
      desc: "Risco de desgastar a confiança sobre contribuições ofertadas com sacrifício e propósito.",
      icon: <Heart size={20} className="icon-red" />,
      color: "var(--gloria-purple)"
    },
    {
      title: "Estratégico",
      desc: "Liderança forçada a decidir com base em sentimentos imediatos, sem relatórios confiáveis.",
      icon: <Compass size={20} className="icon-blue" />,
      color: "var(--gloria-green)"
    }
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="gloria-conclusao-layout">
      
      {/* Slide Header */}
      <div className="conclusao-header">
        <span className="conclusao-kicker">
          Diagnóstico e Conclusão
        </span>
        <h2 className="conclusao-title">
          O problema não é apenas financeiro.
        </h2>
        <p className="conclusao-subtitle">
          É um ciclo administrativo, jurídico, pastoral e estratégico que afeta a clareza da igreja.
        </p>
      </div>

      {/* Grid of 5 Dimensions */}
      <motion.div 
        variants={cardContainerVariants}
        initial="hidden"
        animate="visible"
        className="conclusao-grid"
      >
        {dimensions.map((dim, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="conclusao-card"
            style={{ borderColor: "var(--gloria-border)" }}
            whileHover={{ 
              y: -4, 
              borderColor: dim.color
            }}
          >
            {/* Top Bar Accent */}
            <div 
              className="card-top-accent" 
              style={{ backgroundColor: dim.color }}
            />
            
            <div className="card-top-block">
              <div className="card-icon-box">
                {dim.icon}
              </div>
              <h3 className="card-title">
                {dim.title}
              </h3>
            </div>
            <p className="card-description">
              {dim.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Consultative Bottom Transition Callout */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" as const, stiffness: 90 }}
        className="conclusao-cta-panel"
      >
        <p className="cta-statement">
          "É aqui que a igreja precisa deixar de apenas registrar movimentações isoladas e passar a ter uma gestão financeira organizada, rastreável e madura."
        </p>

        {/* Consultative Call-to-action */}
        <div className="cta-branding-group">
          <div className="cta-kicker-badge">
            <span className="badge-dot" />
            <span>Cenário Comercial Consultivo</span>
          </div>

          <div className="cta-pitch-capsule">
            <span className="pitch-label">
              É aqui que entra o
            </span>
            <img 
              src="/logoHorizontal.png" 
              alt="Glória Finance" 
              className="pitch-logo"
            />
          </div>
        </div>
      </motion.div>

    </div>
  );
};
