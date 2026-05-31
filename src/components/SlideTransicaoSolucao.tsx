import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Server, FileText, PieChart } from "lucide-react";

export const SlideTransicaoSolucao: React.FC = () => {
  return (
    <div className="gloria-transicao-layout">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="transicao-kicker"
      >
        Se o problema é um ciclo de desorganização...
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="transicao-title"
      >
        ...a solução precisa ser uma plataforma de organização.
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="transicao-subtitle"
      >
        Depois de entender que o problema não é apenas financeiro, fica claro que a igreja precisa de algo além de planilhas ou registros isolados. Ela precisa de uma plataforma que organize a rotina, preserve o histórico, fortaleça a prestação de contas e ajude a liderança a decidir com mais clareza.
      </motion.p>

      <div className="transicao-visual-box">
        {/* Animated disconnected items coming together */}
        <motion.div 
          className="flex items-center justify-center relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* Icons simulating data coming together */}
          <motion.div
            initial={{ x: -150, y: -50, opacity: 0 }}
            animate={{ x: -60, y: -10, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            style={{ position: 'absolute', color: 'var(--gloria-medium-gray)' }}
          >
            <Server size={32} />
          </motion.div>
          
          <motion.div
            initial={{ x: 150, y: -50, opacity: 0 }}
            animate={{ x: 60, y: -10, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, type: "spring" }}
            style={{ position: 'absolute', color: 'var(--gloria-medium-gray)' }}
          >
            <FileText size={32} />
          </motion.div>

          <motion.div
            initial={{ x: -100, y: 80, opacity: 0 }}
            animate={{ x: -40, y: 20, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            style={{ position: 'absolute', color: 'var(--gloria-medium-gray)' }}
          >
            <PieChart size={32} />
          </motion.div>

          <motion.div
            initial={{ x: 100, y: 80, opacity: 0 }}
            animate={{ x: 40, y: 20, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            style={{ position: 'absolute', color: 'var(--gloria-medium-gray)' }}
          >
            <CheckCircle2 size={32} />
          </motion.div>

          {/* Central Core */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 120 }}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'var(--gloria-dark-purple)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: '16px',
              boxShadow: '0 10px 25px rgba(70, 35, 113, 0.3)',
              position: 'relative',
              zIndex: 10
            }}
          >
            Glória<br/>Finance
          </motion.div>

          {/* Connecting lines SVG could be added here in a real SVG setup */}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="transicao-impact"
      >
        A igreja deixa de apenas registrar movimentações e passa a gerir com clareza, histórico e responsabilidade.
      </motion.div>
    </div>
  );
};
