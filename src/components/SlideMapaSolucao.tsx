import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export const SlideMapaSolucao: React.FC = () => {
  const dores = [
    "Administração sem processo",
    "Dados espalhados",
    "Falta de rastreabilidade",
    "Prestação de contas frágil",
    "Patrimônio sem controle",
    "Decisão sem dados"
  ];

  const respostas = [
    "Fluxos estruturados e módulos financeiros",
    "Registros centralizados com comprovantes",
    "Histórico, reversões e atualização de saldos",
    "Relatórios, DRE, PDF e CSV",
    "Inventário, anexos e auditoria",
    "Indicadores para liderança decidir melhor"
  ];

  const chips = [
    "Registros", "Contas", "Contribuições", "Patrimônio", "Relatórios", "Permissões"
  ];

  return (
    <div className="gloria-matriz-layout">
      {/* Header */}
      <div className="matriz-header">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="matriz-title"
        >
          Glória Finance transforma dores administrativas em processos organizados
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="matriz-subtitle"
        >
          A plataforma conecta registros, fluxos, relatórios e responsabilidades para que a igreja deixe de depender de controles dispersos.
        </motion.p>
      </div>

      {/* 3 Zones Grid */}
      <div className="matriz-conversion-grid">
        {/* Left Column: Dores */}
        <div className="matriz-col-side">
          {dores.map((dor, idx) => (
            <motion.div
              key={`dor-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="matriz-card dor-card"
            >
              <AlertCircle size={16} className="dor-icon" />
              <span>{dor}</span>
              {/* Connecting line to center */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                className="dor-line"
              />
            </motion.div>
          ))}
        </div>

        {/* Center Column: Gloria Finance Core */}
        <div className="matriz-col-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="matriz-core"
          >
            <div className="core-logo">Glória Finance</div>
            <div className="core-tagline">Uma plataforma para organizar a gestão financeira da igreja</div>
            
            <div className="core-chips">
              {chips.map((chip, idx) => (
                <motion.div 
                  key={`chip-${idx}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.05 }}
                  className="core-chip"
                >
                  {chip}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Respostas */}
        <div className="matriz-col-side">
          {respostas.map((res, idx) => (
            <motion.div
              key={`res-${idx}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 + idx * 0.1 }}
              className="matriz-card res-card"
            >
              {/* Connecting line from center */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5 + idx * 0.1, duration: 0.5 }}
                className="res-line"
              />
              <CheckCircle2 size={16} className="res-icon" />
              <span>{res}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="matriz-banner"
      >
        Menos improviso. Mais rastreabilidade, transparência e clareza para decidir.
      </motion.div>
    </div>
  );
};
