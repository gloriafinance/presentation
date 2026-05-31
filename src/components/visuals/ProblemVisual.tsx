import React from "react";
import { motion } from "framer-motion";
import type { ProblemSlide } from "../../data/problemSlides";

interface ProblemVisualProps {
  type: ProblemSlide["visualType"];
}

const cardShadow = { filter: "drop-shadow(0 10px 18px rgba(50, 24, 86, 0.10))" };

const SceneLabel: React.FC<{ x: number; y: number; width: number; children: React.ReactNode }> = ({
  x,
  y,
  width,
  children,
}) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width={width} height="24" rx="12" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
    <text
      x={width / 2}
      y="15.5"
      fill="var(--gloria-dark-purple)"
      fontFamily="Inter, sans-serif"
      fontSize="9"
      fontWeight="700"
      textAnchor="middle"
    >
      {children}
    </text>
  </g>
);

const AdministrationVisual: React.FC = () => (
  <svg
    viewBox="0 0 520 420"
    className="detail-visual-svg narrative-svg"
    role="img"
    aria-label="Mesa administrativa da igreja com livro razão, painel de entradas e saídas, checklist, pasta de documentos, comprovantes e papéis soltos."
  >
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
    <path d="M35 340 H485" stroke="var(--gloria-dark-purple)" strokeWidth="10" strokeLinecap="round" opacity="0.16" />
    <path d="M64 345 V397 M456 345 V397" stroke="var(--gloria-dark-purple)" strokeWidth="8" strokeLinecap="round" opacity="0.13" />

    <motion.g initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={cardShadow}>
      <rect x="171" y="40" width="196" height="132" rx="15" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <rect x="171" y="40" width="196" height="29" rx="15" fill="var(--gloria-dark-purple)" />
      <rect x="171" y="57" width="196" height="12" fill="var(--gloria-dark-purple)" />
      <text x="188" y="59" fill="var(--gloria-white)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800">PAINEL FINANCEIRO</text>
      <rect x="188" y="83" width="72" height="34" rx="7" fill="var(--gloria-soft-green)" />
      <text x="198" y="97" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700">ENTRADAS</text>
      <text x="198" y="111" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="800">R$ 8.450</text>
      <rect x="272" y="83" width="77" height="34" rx="7" fill="var(--gloria-soft-orange)" />
      <text x="282" y="97" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700">SAÍDAS</text>
      <text x="282" y="111" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="800">R$ 5.180</text>
      <path d="M191 148 L214 136 L237 141 L261 126 L286 132 L312 119 L344 124" fill="none" stroke="var(--gloria-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="312" cy="119" r="4" fill="var(--gloria-green)" />
    </motion.g>

    <motion.g initial={{ opacity: 0, x: -18, rotate: -5 }} animate={{ opacity: 1, x: 0, rotate: -3 }} transition={{ delay: 0.28 }} style={cardShadow}>
      <rect x="38" y="103" width="123" height="175" rx="11" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <rect x="38" y="103" width="123" height="28" rx="11" fill="var(--gloria-purple)" opacity="0.92" />
      <rect x="38" y="119" width="123" height="12" fill="var(--gloria-purple)" opacity="0.92" />
      <text x="54" y="122" fill="var(--gloria-white)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800">LIVRO RAZÃO</text>
      <path d="M53 151 H146 M53 174 H146 M53 197 H146 M53 220 H146 M53 243 H146 M95 132 V263" stroke="var(--gloria-border)" />
      <text x="55" y="166" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="8">Dízimos</text>
      <text x="103" y="166" fill="var(--gloria-dark-gray)" fontFamily="Inter, sans-serif" fontSize="8">+ 4.210</text>
      <text x="55" y="189" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="8">Contas</text>
      <text x="103" y="189" fill="var(--gloria-dark-gray)" fontFamily="Inter, sans-serif" fontSize="8">- 1.380</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, x: 18, rotate: 5 }} animate={{ opacity: 1, x: 0, rotate: 3 }} transition={{ delay: 0.36 }} style={cardShadow}>
      <rect x="382" y="101" width="104" height="170" rx="11" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <text x="397" y="127" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="800">CHECKLIST</text>
      {[
        { y: 151, label: "Lançamentos", checked: true },
        { y: 177, label: "Comprovantes", checked: false },
        { y: 203, label: "Pagamentos", checked: true },
        { y: 229, label: "Relatório", checked: false },
      ].map(({ y, label, checked }) => (
        <g key={label}>
          <rect x="398" y={y - 10} width="15" height="15" rx="4" fill={checked ? "var(--gloria-soft-green)" : "var(--gloria-soft-orange)"} stroke={checked ? "var(--gloria-green)" : "var(--gloria-orange)"} />
          {checked ? (
            <path d={`M402 ${y - 2} L405 ${y + 1} L410 ${y - 5}`} fill="none" stroke="var(--gloria-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <text x="405.5" y={y + 2} fill="var(--gloria-orange)" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="900" textAnchor="middle">!</text>
          )}
          <text x="421" y={y + 1} fill="var(--gloria-dark-gray)" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="700">{label}</text>
        </g>
      ))}
    </motion.g>

    <motion.g initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }} style={cardShadow}>
      <path d="M202 233 H271 L283 245 H345 V327 H202 Z" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <path d="M202 254 H345" stroke="var(--gloria-green)" strokeWidth="4" opacity="0.7" />
      <text x="221" y="282" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="14" fontWeight="800">DOCUMENTOS</text>
      <text x="221" y="302" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700">CONTRATOS · NOTAS · RECIBOS</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: 18, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -5 }} transition={{ delay: 0.58 }} style={cardShadow}>
      <path d="M100 293 H177 V381 L168 374 L159 381 L150 374 L141 381 L132 374 L123 381 L114 374 L100 381 Z" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <text x="112" y="315" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800">COMPROVANTE</text>
      <path d="M112 330 H163 M112 343 H154 M112 356 H164" stroke="var(--gloria-border)" strokeWidth="3" strokeLinecap="round" />
    </motion.g>

    <motion.g initial={{ opacity: 0, y: 15, rotate: 7 }} animate={{ opacity: 1, y: 0, rotate: 4 }} transition={{ delay: 0.65 }} style={cardShadow}>
      <rect x="367" y="304" width="82" height="57" rx="7" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <path d="M379 321 H436 M379 334 H428 M379 347 H437" stroke="var(--gloria-border)" strokeWidth="3" strokeLinecap="round" />
    </motion.g>

    <path d="M56 389 H468" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" />
    <circle cx="468" cy="389" r="7" fill="var(--gloria-green)" />
    <text x="262" y="411" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">
      BOA INTENÇÃO PRECISA DE PROCESSO
    </text>
  </svg>
);

const ComplexityVisual: React.FC = () => {
  const operations = [
    { label: "DÍZIMOS", x: 46, y: 52, width: 86 },
    { label: "OFERTAS", x: 218, y: 28, width: 82 },
    { label: "CONTAS", x: 384, y: 60, width: 78 },
    { label: "COMPRAS", x: 412, y: 174, width: 82 },
    { label: "FORNECEDORES", x: 376, y: 294, width: 112 },
    { label: "CAMPANHAS", x: 202, y: 346, width: 98 },
    { label: "DEPARTAMENTOS", x: 28, y: 302, width: 118 },
    { label: "PATRIMÔNIO", x: 4, y: 178, width: 98 },
    { label: "RELATÓRIOS", x: 62, y: 110, width: 94 },
  ];

  return (
    <svg
      viewBox="0 0 520 420"
      className="detail-visual-svg narrative-svg"
      role="img"
      aria-label="Núcleo administrativo da igreja conectado a dízimos, ofertas, contas, compras, fornecedores, campanhas, departamentos, patrimônio e relatórios."
    >
      <circle cx="260" cy="210" r="154" fill="var(--gloria-soft-purple)" />
      <circle cx="260" cy="210" r="134" fill="none" stroke="var(--gloria-border)" strokeDasharray="4 7" />

      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}>
        {operations.map(({ x, y, width }, index) => {
          const startX = x + width / 2;
          const startY = y + 12;
          return (
            <motion.path
              key={`${x}-${y}`}
              d={`M ${startX} ${startY} Q ${(startX + 260) / 2} ${(startY + 210) / 2 - (index % 2 ? 14 : -12)} 260 210`}
              fill="none"
              stroke={index % 3 === 0 ? "var(--gloria-orange)" : "var(--gloria-purple)"}
              strokeWidth="1.6"
              strokeDasharray={index % 3 === 0 ? "4 5" : undefined}
              opacity={index % 3 === 0 ? 0.5 : 0.32}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.35 + index * 0.07, duration: 0.6 }}
            />
          );
        })}
      </motion.g>

      {operations.map(({ label, x, y, width }, index) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + index * 0.07, duration: 0.35 }}
          style={cardShadow}
        >
          <SceneLabel x={x} y={y} width={width}>{label}</SceneLabel>
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 120, damping: 16 }}
        style={cardShadow}
      >
        <circle cx="260" cy="210" r="74" fill="var(--gloria-dark-purple)" />
        <circle cx="260" cy="210" r="57" fill="none" stroke="var(--gloria-green)" strokeWidth="1.5" opacity="0.42" />
        <path d="M229 205 L260 180 L291 205 V241 H229 Z" fill="var(--gloria-white)" opacity="0.96" />
        <rect x="242" y="213" width="15" height="28" rx="3" fill="var(--gloria-purple)" opacity="0.35" />
        <rect x="266" y="213" width="15" height="28" rx="3" fill="var(--gloria-purple)" opacity="0.35" />
        <text x="260" y="267" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="800" textAnchor="middle">
          TESOURARIA
        </text>
      </motion.g>

      <g>
        <rect x="143" y="383" width="234" height="28" rx="14" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
        <text x="260" y="401" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">
          MUITAS FRENTES, UMA SÓ TESOURARIA
        </text>
      </g>
    </svg>
  );
};

const FragilityVisual: React.FC = () => {
  const events = [
    { label: "LANÇAMENTO", state: "done", y: 83 },
    { label: "PAGAMENTO", state: "done", y: 139 },
    { label: "COMPROVANTE", state: "alert", y: 195 },
    { label: "APROVAÇÃO", state: "empty", y: 251 },
    { label: "REVISÃO", state: "alert", y: 307 },
  ];

  return (
    <svg
      viewBox="0 0 520 420"
      className="detail-visual-svg narrative-svg"
      role="img"
      aria-label="Linha do tempo administrativa interrompida com lançamentos, pagamento, comprovante ausente, aprovação sem registro e revisão do histórico."
    >
      <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
      <text x="48" y="48" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="800">
        HISTÓRICO FINANCEIRO
      </text>
      <text x="48" y="65" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700">
        RASTREABILIDADE DA OPERAÇÃO
      </text>

      <path d="M102 92 V183 M102 211 V239 M102 267 V295 M102 323 V354" stroke="var(--gloria-purple)" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
      <motion.path
        d="M102 92 V183"
        stroke="var(--gloria-green)"
        strokeWidth="4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      />

      {events.map(({ label, state, y }, index) => (
        <motion.g
          key={label}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16 + index * 0.1 }}
        >
          <circle
            cx="102"
            cy={y}
            r="16"
            fill={state === "done" ? "var(--gloria-soft-green)" : state === "alert" ? "var(--gloria-soft-orange)" : "var(--gloria-white)"}
            stroke={state === "done" ? "var(--gloria-green)" : state === "alert" ? "var(--gloria-orange)" : "var(--gloria-border)"}
            strokeWidth="2"
          />
          {state === "done" ? (
            <path d={`M94 ${y} L99 ${y + 5} L110 ${y - 7}`} fill="none" stroke="var(--gloria-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          ) : state === "alert" ? (
            <text x="102" y={y + 5} fill="var(--gloria-orange)" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" textAnchor="middle">!</text>
          ) : (
            <text x="102" y={y + 4} fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="900" textAnchor="middle">?</text>
          )}
          <rect x="133" y={y - 17} width="142" height="34" rx="9" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
          <text x="149" y={y - 2} fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800">{label}</text>
          <text x="149" y={y + 11} fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="700">
            {state === "done" ? "REGISTRO CONFIRMADO" : state === "alert" ? "REGISTRO INCOMPLETO" : "SEM REGISTRO"}
          </text>
        </motion.g>
      ))}

      <motion.g initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.58 }} style={cardShadow}>
        <rect x="313" y="69" width="162" height="114" rx="14" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
        <text x="332" y="94" fill="var(--gloria-orange)" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="800">ONDE ESTÁ O</text>
        <text x="332" y="111" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="17" fontWeight="900">COMPROVANTE?</text>
        <path d="M333 133 H452 M333 148 H432 M333 163 H442" stroke="var(--gloria-border)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="451" cy="157" r="15" fill="var(--gloria-soft-orange)" stroke="var(--gloria-orange)" />
        <text x="451" y="162" fill="var(--gloria-orange)" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="900" textAnchor="middle">!</text>
      </motion.g>

      <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.78, type: "spring" }} style={cardShadow}>
        <circle cx="385" cy="271" r="52" fill="var(--gloria-white)" stroke="var(--gloria-purple)" strokeWidth="5" />
        <circle cx="385" cy="271" r="37" fill="var(--gloria-soft-purple)" stroke="var(--gloria-border)" />
        <path d="M420 307 L458 345" stroke="var(--gloria-dark-purple)" strokeWidth="13" strokeLinecap="round" />
        <path d="M420 307 L458 345" stroke="var(--gloria-purple)" strokeWidth="7" strokeLinecap="round" />
        <path d="M361 260 H406 M361 273 H398 M361 286 H406" stroke="var(--gloria-purple)" strokeWidth="3" strokeLinecap="round" opacity="0.48" />
      </motion.g>

      <g>
        <rect x="302" y="366" width="182" height="28" rx="14" fill="var(--gloria-dark-purple)" />
        <text x="393" y="384" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">
          O PASSADO PRECISA DE REGISTRO
        </text>
      </g>
    </svg>
  );
};

const TrustVisual: React.FC = () => (
  <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Relatório financeiro claro com entradas, saídas, saldo e pendências apresentado à liderança da igreja.">
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
    <motion.g initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={cardShadow}>
      <rect x="101" y="48" width="318" height="245" rx="16" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <rect x="101" y="48" width="318" height="35" rx="16" fill="var(--gloria-dark-purple)" />
      <rect x="101" y="68" width="318" height="15" fill="var(--gloria-dark-purple)" />
      <text x="121" y="70" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="13" fontWeight="800">PRESTAÇÃO DE CONTAS</text>
      <text x="389" y="70" fill="var(--gloria-white)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" textAnchor="end">PERÍODO MENSAL</text>
      {[
        { x: 120, label: "ENTRADAS", value: "R$ 18.450", color: "var(--gloria-green)" },
        { x: 196, label: "SAÍDAS", value: "R$ 12.180", color: "var(--gloria-orange)" },
        { x: 272, label: "SALDO", value: "R$ 6.270", color: "var(--gloria-purple)" },
        { x: 348, label: "PENDÊNCIAS", value: "02", color: "var(--gloria-orange)" },
      ].map(({ x, label, value, color }) => (
        <g key={label}>
          <rect x={x} y="102" width="64" height="52" rx="8" fill="var(--gloria-light-bg)" />
          <rect x={x} y="102" width="64" height="4" rx="2" fill={color} />
          <text x={x + 8} y="123" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="800">{label}</text>
          <text x={x + 8} y="141" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="10.5" fontWeight="800">{value}</text>
        </g>
      ))}
      <path d="M126 243 L163 224 L199 231 L235 197 L271 208 L307 181 L344 190 L389 165" fill="none" stroke="var(--gloria-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M126 255 H391" stroke="var(--gloria-border)" />
      <circle cx="389" cy="165" r="5" fill="var(--gloria-green)" />
    </motion.g>
    <motion.g initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.65, type: "spring" }}>
      <circle cx="405" cy="284" r="28" fill="var(--gloria-green)" />
      <path d="M392 284 L401 293 L419 274" fill="none" stroke="var(--gloria-white)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.g>
    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.72 }}>
      {[
        { x: 68, text: "QUANTO ENTROU?" },
        { x: 176, text: "QUANTO SAIU?" },
        { x: 284, text: "O QUE FOI PAGO?" },
        { x: 392, text: "HÁ COMPROVANTE?" },
      ].map(({ x, text }) => (
        <g key={text}>
          <circle cx={x + 28} cy="343" r="22" fill="var(--gloria-soft-purple)" stroke="var(--gloria-border)" />
          <path d={`M${x + 18} 340 Q${x + 28} 329 ${x + 38} 340`} fill="none" stroke="var(--gloria-purple)" strokeWidth="3" strokeLinecap="round" />
          <circle cx={x + 28} cy="334" r="6" fill="var(--gloria-purple)" opacity="0.55" />
          <text x={x + 28} y="383" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="800" textAnchor="middle">{text}</text>
        </g>
      ))}
    </motion.g>
  </svg>
);

const LegalVisual: React.FC = () => (
  <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Arquivo documental organizado com comprovante, contrato PDF, checklist, período financeiro e selo registrado.">
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
    <motion.g initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} style={cardShadow}>
      <path d="M103 125 H203 L220 143 H372 V327 H103 Z" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <path d="M103 154 H372" stroke="var(--gloria-orange)" strokeWidth="5" opacity="0.72" />
      <text x="127" y="191" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="18" fontWeight="800">ARQUIVO DOCUMENTAL</text>
      <text x="127" y="213" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700">REGISTROS · CONTRATOS · COMPROVANTES</text>
    </motion.g>
    {[
      { x: 56, y: 56, title: "COMPROVANTE", accent: "var(--gloria-green)" },
      { x: 199, y: 42, title: "CONTRATO PDF", accent: "var(--gloria-purple)" },
      { x: 350, y: 69, title: "CHECKLIST", accent: "var(--gloria-orange)" },
    ].map(({ x, y, title, accent }, index) => (
      <motion.g key={title} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 + index * 0.12 }} style={cardShadow}>
        <rect x={x} y={y} width="116" height="146" rx="10" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
        <rect x={x} y={y} width="116" height="8" rx="4" fill={accent} />
        <text x={x + 16} y={y + 34} fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800">{title}</text>
        <path d={`M${x + 16} ${y + 58} H${x + 99} M${x + 16} ${y + 75} H${x + 91} M${x + 16} ${y + 92} H${x + 100} M${x + 16} ${y + 109} H${x + 76}`} stroke="var(--gloria-border)" strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    ))}
    <motion.g initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.76, type: "spring" }}>
      <circle cx="386" cy="293" r="56" fill="var(--gloria-soft-green)" stroke="var(--gloria-green)" strokeWidth="3" />
      <text x="386" y="288" fill="var(--gloria-green)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">REGISTRADO</text>
      <text x="386" y="307" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" textAnchor="middle">PERÍODO 05/2026</text>
    </motion.g>
    <g>
      <rect x="115" y="357" width="270" height="31" rx="15.5" fill="var(--gloria-dark-purple)" />
      <text x="250" y="377" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">EVIDÊNCIAS ORGANIZADAS PROTEGEM A IGREJA</text>
    </g>
  </svg>
);

const StewardshipVisual: React.FC = () => {
  const purposes = [
    { label: "MISSÕES", x: 31, y: 77 },
    { label: "MANUTENÇÃO", x: 357, y: 77 },
    { label: "ENSINO", x: 19, y: 284 },
    { label: "MÚSICA", x: 379, y: 284 },
    { label: "AÇÃO SOCIAL", x: 197, y: 347 },
  ];
  return (
    <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Recursos da igreja classificados com zelo e ordem entre missões, manutenção, ensino, música e ação social.">
      <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
      <circle cx="260" cy="211" r="141" fill="var(--gloria-soft-green)" />
      <circle cx="260" cy="211" r="113" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      {purposes.map(({ label, x, y }, index) => (
        <motion.g key={label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + index * 0.1 }}>
          <path d={`M${x + 55} ${y + 15} Q260 211 260 211`} fill="none" stroke="var(--gloria-green)" strokeWidth="2" strokeDasharray="4 6" opacity="0.55" />
          <rect x={x} y={y} width="110" height="31" rx="15.5" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
          <text x={x + 55} y={y + 20} fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" textAnchor="middle">{label}</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.65, type: "spring" }}>
        <circle cx="260" cy="211" r="77" fill="var(--gloria-dark-purple)" />
        <path d="M218 231 Q260 273 302 231" fill="none" stroke="var(--gloria-green)" strokeWidth="6" strokeLinecap="round" />
        <path d="M228 205 Q260 176 292 205" fill="none" stroke="var(--gloria-white)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="260" cy="185" r="12" fill="var(--gloria-green)" />
        <text x="260" y="246" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="14" fontWeight="800" textAnchor="middle">ZELO E ORDEM</text>
      </motion.g>
      <text x="260" y="401" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">CUIDAR DOS RECURSOS É CUIDAR DA MISSÃO</text>
    </svg>
  );
};

const ContinuityVisual: React.FC = () => (
  <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Transição segura entre tesouraria atual e próxima gestão com memória institucional, documentos, registros e acessos preservados.">
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
    {[
      { x: 53, title: "TESOURARIA ATUAL", accent: "var(--gloria-purple)" },
      { x: 355, title: "PRÓXIMA GESTÃO", accent: "var(--gloria-green)" },
    ].map(({ x, title, accent }, index) => (
      <motion.g key={title} initial={{ opacity: 0, x: index ? 16 : -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
        <circle cx={x + 55} cy="136" r="43" fill="var(--gloria-white)" stroke={accent} strokeWidth="2" />
        <circle cx={x + 55} cy="123" r="14" fill={accent} opacity="0.55" />
        <path d={`M${x + 29} 159 Q${x + 55} 135 ${x + 81} 159`} fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        <text x={x + 55} y="205" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800" textAnchor="middle">{title}</text>
      </motion.g>
    ))}
    <motion.path d="M166 140 H351" fill="none" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.45, duration: 0.8 }} />
    <path d="M335 127 L352 140 L335 153" fill="none" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.58, type: "spring" }} style={cardShadow}>
      <rect x="174" y="79" width="172" height="184" rx="15" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <rect x="174" y="79" width="172" height="34" rx="15" fill="var(--gloria-dark-purple)" />
      <rect x="174" y="98" width="172" height="15" fill="var(--gloria-dark-purple)" />
      <text x="260" y="101" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="800" textAnchor="middle">MEMÓRIA INSTITUCIONAL</text>
      {["HISTÓRICOS", "DOCUMENTOS", "REGISTROS", "ACESSOS"].map((label, index) => (
        <g key={label}>
          <rect x="192" y={132 + index * 27} width="136" height="18" rx="9" fill="var(--gloria-light-bg)" />
          <circle cx="205" cy={141 + index * 27} r="5" fill="var(--gloria-green)" />
          <path d={`M202 ${141 + index * 27} L204 ${143 + index * 27} L208 ${138 + index * 27}`} fill="none" stroke="var(--gloria-white)" strokeWidth="1.5" strokeLinecap="round" />
          <text x="217" y={144 + index * 27} fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="8.5" fontWeight="800">{label}</text>
        </g>
      ))}
    </motion.g>
    <g>
      <rect x="156" y="302" width="208" height="72" rx="14" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <path d="M240 333 V323 A20 20 0 0 1 280 323 V333" fill="none" stroke="var(--gloria-purple)" strokeWidth="5" />
      <rect x="233" y="331" width="54" height="30" rx="8" fill="var(--gloria-purple)" />
      <circle cx="260" cy="344" r="5" fill="var(--gloria-white)" />
      <text x="260" y="292" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">INFORMAÇÃO PRESERVADA</text>
    </g>
  </svg>
);

const PatrimonyVisual: React.FC = () => {
  const assets = [
    { code: "PAT-001", name: "TECLADO", x: 45, y: 82, icon: "▤" },
    { code: "PAT-014", name: "CAIXA DE SOM", x: 202, y: 82, icon: "◉" },
    { code: "PAT-027", name: "COMPUTADOR", x: 359, y: 82, icon: "▣" },
    { code: "PAT-036", name: "CADEIRAS", x: 45, y: 225, icon: "▥" },
    { code: "PAT-041", name: "DOCUMENTOS", x: 202, y: 225, icon: "≡" },
  ];
  return (
    <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Inventário patrimonial da igreja com teclado, caixa de som, computador, cadeiras, documentos e etiquetas patrimoniais.">
      <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
      <text x="44" y="47" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="16" fontWeight="800">INVENTÁRIO DA IGREJA</text>
      <text x="44" y="65" fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700">IDENTIFICAÇÃO · RESPONSÁVEL · LOCALIZAÇÃO · ESTADO</text>
      {assets.map(({ code, name, x, y, icon }, index) => (
        <motion.g key={code} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.16 + index * 0.1 }} style={cardShadow}>
          <rect x={x} y={y} width="133" height="112" rx="13" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
          <text x={x + 18} y={y + 44} fill="var(--gloria-purple)" fontFamily="Outfit, sans-serif" fontSize="30" fontWeight="800">{icon}</text>
          <rect x={x + 67} y={y + 17} width="53" height="20" rx="10" fill="var(--gloria-soft-green)" stroke="var(--gloria-green)" />
          <text x={x + 93.5} y={y + 30} fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="800" textAnchor="middle">{code}</text>
          <text x={x + 16} y={y + 70} fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="800">{name}</text>
          <text x={x + 16} y={y + 89} fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="7.5" fontWeight="700">SALÃO PRINCIPAL · BOM</text>
        </motion.g>
      ))}
      <g>
        <rect x="359" y="225" width="133" height="112" rx="13" fill="var(--gloria-dark-purple)" />
        <text x="425.5" y="258" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="800" textAnchor="middle">INVENTÁRIO</text>
        <text x="425.5" y="290" fill="var(--gloria-green)" fontFamily="Outfit, sans-serif" fontSize="34" fontWeight="900" textAnchor="middle">✓</text>
        <text x="425.5" y="316" fill="var(--gloria-white)" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" textAnchor="middle">BENS IDENTIFICADOS</text>
      </g>
      <text x="260" y="383" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">PATRIMÔNIO TAMBÉM É PRESTAÇÃO DE CONTAS</text>
    </svg>
  );
};

const DecisionVisual: React.FC = () => (
  <svg viewBox="0 0 520 420" className="detail-visual-svg narrative-svg" role="img" aria-label="Dashboard financeiro que passa de dados confusos para visão clara e apoia uma decisão da liderança.">
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />
    <text x="43" y="48" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="800">VISÃO PARA DECIDIR</text>
    <motion.g initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.14 }} style={cardShadow}>
      <rect x="41" y="80" width="189" height="231" rx="15" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <text x="60" y="108" fill="var(--gloria-orange)" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="800">PERCEPÇÃO</text>
      <path d="M62 153 L91 139 L117 168 L145 132 L172 176 L207 144" fill="none" stroke="var(--gloria-orange)" strokeWidth="3" strokeDasharray="5 6" />
      <path d="M61 205 H202 M61 228 H184 M61 251 H197 M61 274 H172" stroke="var(--gloria-border)" strokeWidth="7" strokeLinecap="round" />
      <text x="136" y="300" fill="var(--gloria-orange)" fontFamily="Outfit, sans-serif" fontSize="32" fontWeight="900" textAnchor="middle">?</text>
    </motion.g>
    <motion.path d="M242 193 H279" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.55, duration: 0.5 }} />
    <path d="M267 181 L280 193 L267 205" fill="none" stroke="var(--gloria-green)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <motion.g initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }} style={cardShadow}>
      <rect x="292" y="80" width="188" height="231" rx="15" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <text x="311" y="108" fill="var(--gloria-green)" fontFamily="Outfit, sans-serif" fontSize="12" fontWeight="800">DIREÇÃO</text>
      {[
        { x: 311, y: 126, title: "RECEITA", value: "18.450" },
        { x: 390, y: 126, title: "DESPESA", value: "12.180" },
        { x: 311, y: 173, title: "RESULTADO", value: "6.270" },
        { x: 390, y: 173, title: "SALDO", value: "9.840" },
      ].map(({ x, y, title, value }) => (
        <g key={title}>
          <rect x={x} y={y} width="70" height="36" rx="7" fill="var(--gloria-light-bg)" />
          <text x={x + 8} y={y + 14} fill="var(--gloria-medium-gray)" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="800">{title}</text>
          <text x={x + 8} y={y + 28} fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800">{value}</text>
        </g>
      ))}
      <path d="M314 278 L344 257 L373 264 L402 238 L431 245 L459 217" fill="none" stroke="var(--gloria-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="459" cy="217" r="5" fill="var(--gloria-green)" />
    </motion.g>
    <g>
      <rect x="90" y="342" width="340" height="37" rx="18.5" fill="var(--gloria-dark-purple)" />
      <text x="260" y="357" fill="var(--gloria-white)" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700" textAnchor="middle">PODEMOS ASSUMIR ESTE COMPROMISSO?</text>
      <text x="260" y="371" fill="var(--gloria-green)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">INFORMAÇÃO TRANSFORMA PERCEPÇÃO EM DIREÇÃO</text>
    </g>
  </svg>
);

const ScatteredDataVisual: React.FC = () => (
  <svg
    viewBox="0 0 520 420"
    className="detail-visual-svg narrative-svg"
    role="img"
    aria-label="Planilha, WhatsApp, recibo, comprovante, caderno, pasta e celular desconectados ao redor de um dashboard incompleto."
  >
    <rect x="6" y="6" width="508" height="408" rx="28" fill="var(--gloria-light-bg)" />

    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.7 }}>
      <path d="M126 92 Q188 120 211 169" stroke="var(--gloria-orange)" strokeWidth="1.8" strokeDasharray="5 6" fill="none" opacity="0.62" />
      <path d="M399 94 Q340 118 309 168" stroke="var(--gloria-orange)" strokeWidth="1.8" strokeDasharray="5 6" fill="none" opacity="0.62" />
      <path d="M92 232 Q164 228 203 219" stroke="var(--gloria-purple)" strokeWidth="1.5" strokeDasharray="4 7" fill="none" opacity="0.38" />
      <path d="M425 236 Q353 228 316 220" stroke="var(--gloria-purple)" strokeWidth="1.5" strokeDasharray="4 7" fill="none" opacity="0.38" />
      <path d="M150 346 Q191 290 220 258" stroke="var(--gloria-orange)" strokeWidth="1.8" strokeDasharray="5 6" fill="none" opacity="0.62" />
      <path d="M384 347 Q335 290 302 258" stroke="var(--gloria-orange)" strokeWidth="1.8" strokeDasharray="5 6" fill="none" opacity="0.62" />
    </motion.g>

    <motion.g initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.75, type: "spring" }} style={cardShadow}>
      <rect x="190" y="147" width="140" height="122" rx="16" fill="var(--gloria-white)" stroke="var(--gloria-border)" strokeWidth="2" />
      <rect x="190" y="147" width="140" height="27" rx="16" fill="var(--gloria-dark-purple)" opacity="0.14" />
      <rect x="190" y="162" width="140" height="12" fill="var(--gloria-dark-purple)" opacity="0.14" />
      <rect x="206" y="188" width="42" height="27" rx="6" fill="var(--gloria-soft-purple)" />
      <rect x="257" y="188" width="55" height="27" rx="6" fill="var(--gloria-soft-orange)" />
      <rect x="206" y="226" width="106" height="22" rx="6" fill="var(--gloria-light-bg)" />
      <text x="260" y="239" fill="var(--gloria-orange)" fontFamily="Outfit, sans-serif" fontSize="24" fontWeight="900" textAnchor="middle">?</text>
      <text x="260" y="291" fill="var(--gloria-dark-purple)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">
        VISÃO INCOMPLETA
      </text>
    </motion.g>

    <motion.g initial={{ opacity: 0, x: -18, rotate: -8 }} animate={{ opacity: 1, x: 0, rotate: -5 }} transition={{ delay: 0.1 }} style={cardShadow}>
      <rect x="24" y="43" width="116" height="76" rx="11" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <rect x="24" y="43" width="116" height="20" rx="11" fill="var(--gloria-green)" opacity="0.82" />
      <path d="M35 78 H128 M35 92 H128 M62 64 V108 M95 64 V108" stroke="var(--gloria-border)" />
      <text x="82" y="135" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">PLANILHA</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, x: 18, rotate: 8 }} animate={{ opacity: 1, x: 0, rotate: 5 }} transition={{ delay: 0.18 }} style={cardShadow}>
      <rect x="389" y="34" width="86" height="112" rx="15" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <rect x="389" y="34" width="86" height="25" rx="15" fill="var(--gloria-green)" opacity="0.82" />
      <rect x="399" y="73" width="48" height="13" rx="7" fill="var(--gloria-light-bg)" />
      <rect x="416" y="94" width="49" height="13" rx="7" fill="var(--gloria-soft-green)" />
      <rect x="399" y="116" width="38" height="13" rx="7" fill="var(--gloria-light-bg)" />
      <text x="432" y="162" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">WHATSAPP</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }} style={cardShadow}>
      <rect x="30" y="185" width="94" height="92" rx="10" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <path d="M44 205 H110 M44 219 H104 M44 233 H112 M44 247 H91" stroke="var(--gloria-medium-gray)" strokeWidth="3" strokeLinecap="round" opacity="0.28" />
      <text x="77" y="295" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">RECIBO</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.34 }} style={cardShadow}>
      <rect x="400" y="190" width="82" height="98" rx="14" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <rect x="411" y="206" width="60" height="45" rx="7" fill="var(--gloria-soft-purple)" />
      <circle cx="441" cy="228" r="10" fill="var(--gloria-orange)" opacity="0.62" />
      <path d="M418 269 H464" stroke="var(--gloria-border)" strokeWidth="4" strokeLinecap="round" />
      <text x="441" y="305" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">CELULAR</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: 18, rotate: -6 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ delay: 0.42 }} style={cardShadow}>
      <path d="M75 329 H121 L132 342 H185 V393 H75 Z" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <path d="M75 346 H185" stroke="var(--gloria-purple)" strokeWidth="3" opacity="0.28" />
      <text x="130" y="410" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">PASTA</text>
    </motion.g>

    <motion.g initial={{ opacity: 0, y: 18, rotate: 6 }} animate={{ opacity: 1, y: 0, rotate: 3 }} transition={{ delay: 0.5 }} style={cardShadow}>
      <path d="M354 322 H442 V393 H354 Z" fill="var(--gloria-white)" stroke="var(--gloria-border)" />
      <path d="M367 341 H429 M367 354 H423 M367 367 H429" stroke="var(--gloria-medium-gray)" strokeWidth="3" strokeLinecap="round" opacity="0.26" />
      <text x="398" y="410" fill="var(--gloria-dark-purple)" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="800" textAnchor="middle">CADERNO</text>
    </motion.g>

    <g>
      <rect x="139" y="301" width="242" height="30" rx="15" fill="var(--gloria-dark-purple)" />
      <text x="260" y="320" fill="var(--gloria-white)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="800" textAnchor="middle">
        DADOS EXISTEM, MAS NÃO CONVERSAM
      </text>
    </g>
  </svg>
);

export const ProblemVisual: React.FC<ProblemVisualProps> = ({ type }) => {
  if (type === "administration") return <AdministrationVisual />;
  if (type === "complexity") return <ComplexityVisual />;
  if (type === "scattered-data") return <ScatteredDataVisual />;
  if (type === "fragility") return <FragilityVisual />;
  if (type === "trust") return <TrustVisual />;
  if (type === "legal") return <LegalVisual />;
  if (type === "stewardship") return <StewardshipVisual />;
  if (type === "continuity") return <ContinuityVisual />;
  if (type === "patrimony") return <PatrimonyVisual />;
  if (type === "decision") return <DecisionVisual />;
  return null;
};
