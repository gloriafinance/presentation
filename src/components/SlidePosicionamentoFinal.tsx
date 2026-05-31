import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Landmark, CheckSquare, Layers, Lock } from "lucide-react";

export const SlidePosicionamentoFinal: React.FC = () => {
  const benefits = [
    { icon: <CheckSquare size={20} color="var(--gloria-green)" />, text: "Mais ordem administrativa" },
    { icon: <ShieldCheck size={20} color="var(--gloria-green)" />, text: "Mais transparência" },
    { icon: <FileCheck size={20} color="var(--gloria-green)" />, text: "Segurança documental" },
    { icon: <Landmark size={20} color="var(--gloria-green)" />, text: "Controle patrimonial" },
    { icon: <Layers size={20} color="var(--gloria-green)" />, text: "Continuidade operacional" },
    { icon: <Lock size={20} color="var(--gloria-green)" />, text: "Clareza para liderança" }
  ];

  return (
    <div className="gloria-final-layout">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="final-title"
      >
        Glória Finance é uma plataforma de mordomia, transparência e governança financeira para igrejas.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="final-desc"
      >
        Mais do que um sistema financeiro, o Glória Finance ajuda a igreja a organizar processos, preservar histórico, cuidar dos recursos, fortalecer a prestação de contas e apoiar decisões com mais clareza.
      </motion.p>

      <div className="final-benefits-grid">
        {benefits.map((b, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            className="final-benefit-item"
          >
            {b.icon}
            <span>{b.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="mt-8 flex flex-col items-center gap-6"
      >
        <div className="text-[16px] font-bold text-[var(--gloria-medium-gray)]">
          Organizar as finanças da igreja é também cuidar da confiança que sustenta a missão.
        </div>
        
        <button className="final-cta">
          Próximo passo: conhecer o Glória Finance na prática
        </button>
      </motion.div>
    </div>
  );
};
