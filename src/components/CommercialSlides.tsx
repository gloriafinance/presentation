import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  BookOpenText,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  FileBarChart,
  FileCheck2,
  HeartHandshake,
  Landmark,
  Layers3,
  LockKeyhole,
  MessageCircleMore,
  PackageCheck,
  QrCode,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

interface CommercialCoverProps {
  onStart: () => void;
}

export const CommercialCover: React.FC<CommercialCoverProps> = ({ onStart }) => (
  <div className="commercial-cover">
    <motion.div className="commercial-cover-copy" variants={stagger} initial="initial" animate="animate">
      <motion.div variants={fadeUp} className="commercial-kicker">
        <span className="commercial-kicker-dot" />
        APRESENTAÇÃO COMERCIAL
      </motion.div>

      <motion.h1 variants={fadeUp} className="commercial-cover-title">
        Gestão financeira da igreja com <span>clareza, controle e transparência.</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="commercial-cover-subtitle">
        Glória Finance centraliza finanças, patrimônio, membros e processos administrativos em uma única plataforma.
      </motion.p>

      <motion.div variants={fadeUp} className="commercial-cover-tags">
        <span>Menos planilhas</span>
        <span>Mais controle</span>
        <span>Mais transparência</span>
      </motion.div>

      <motion.button variants={fadeUp} onClick={onStart} className="commercial-primary-button">
        Conhecer o Glória Finance <ArrowRight size={17} />
      </motion.button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.96, x: 18 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="commercial-product-preview"
    >
      <div className="commercial-preview-window">
        <div className="commercial-preview-sidebar">
          <div className="commercial-preview-mark">G</div>
          {[WalletCards, ReceiptText, BarChart3, Users, Building2].map((Icon, index) => (
            <div className={`commercial-preview-nav ${index === 0 ? "active" : ""}`} key={index}>
              <Icon size={15} />
            </div>
          ))}
        </div>
        <div className="commercial-preview-main">
          <div className="commercial-preview-topbar">
            <div>
              <strong>Visão financeira</strong>
              <small>Resumo da sua igreja</small>
            </div>
            <div className="commercial-preview-avatar">AB</div>
          </div>
          <div className="commercial-preview-metrics">
            <div><small>Saldo disponível</small><strong>R$ 48.320</strong><span>+ 8,4% no mês</span></div>
            <div><small>Contribuições</small><strong>R$ 31.540</strong><span>156 registros</span></div>
            <div><small>Contas a pagar</small><strong>R$ 9.870</strong><span>12 pendentes</span></div>
          </div>
          <div className="commercial-preview-content">
            <div className="commercial-preview-chart">
              <div className="commercial-preview-chart-head"><span>Movimentação mensal</span><small>Últimos 6 meses</small></div>
              <div className="commercial-bars">
                {[42, 62, 51, 74, 68, 86].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              </div>
            </div>
            <div className="commercial-preview-list">
              <strong>Últimos registros</strong>
              {["Dízimos e ofertas", "Pagamento fornecedor", "Oferta missionária"].map((item, index) => (
                <div key={item}><span className={index === 1 ? "out" : "in"}>{index === 1 ? "−" : "+"}</span><small>{item}</small><b>{index === 1 ? "R$ 1.240" : index === 0 ? "R$ 4.850" : "R$ 980"}</b></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="commercial-preview-badge"><Sparkles size={15} /> Uma plataforma construída para igrejas</div>
    </motion.div>
  </div>
);

const problems = [
  {
    icon: Layers3,
    title: "Controles dispersos",
    text: "Planilhas, WhatsApp, recibos e informações importantes em lugares diferentes.",
  },
  {
    icon: ClipboardCheck,
    title: "Pouca rastreabilidade",
    text: "Difícil saber o que aconteceu, quem registrou e onde está o comprovante.",
  },
  {
    icon: TrendingUp,
    title: "Decisões sem visão",
    text: "A liderança decide sem uma visão financeira consolidada e atualizada.",
  },
];

export const CommercialProblem: React.FC = () => (
  <div className="commercial-standard-slide commercial-problem-slide">
    <motion.div {...fadeUp} className="commercial-section-heading centered">
      <span className="commercial-section-kicker">O DESAFIO</span>
      <h2>Quando a gestão está espalhada, <span>a igreja perde visibilidade.</span></h2>
      <p>O problema não é falta de zelo. É administrar uma operação cada vez mais complexa com ferramentas desconectadas.</p>
    </motion.div>

    <motion.div variants={stagger} initial="initial" animate="animate" className="commercial-problem-grid">
      {problems.map(({ icon: Icon, title, text }, index) => (
        <motion.div variants={fadeUp} className="commercial-problem-card" key={title}>
          <div className={`commercial-icon-box tone-${index + 1}`}><Icon size={23} /></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="commercial-statement">
      Quanto mais a igreja cresce, mais difícil é administrar dessa forma.
    </motion.div>
  </div>
);

const featureGroups = [
  {
    icon: WalletCards,
    title: "Financeiro",
    subtitle: "Controle da operação diária",
    items: ["Registros financeiros", "Contas a pagar e receber", "Compras e fornecedores", "Bancos e transferências"],
  },
  {
    icon: HeartHandshake,
    title: "Contribuições",
    subtitle: "Jornada de dízimos e ofertas",
    items: ["Dízimos e ofertas", "PIX e boleto", "Histórico de contribuições", "Compromissos de membros"],
  },
  {
    icon: FileBarChart,
    title: "Relatórios",
    subtitle: "Informação para prestar contas",
    items: ["DRE", "Fluxo de caixa", "Demonstrativo de resultados", "Relatório mensal de dízimos"],
  },
  {
    icon: ShieldCheck,
    title: "Governança",
    subtitle: "Estrutura, acesso e patrimônio",
    items: ["Patrimônio", "Centros de custo", "Contas e conceitos financeiros", "Usuários e permissões"],
  },
];

export const CommercialFeatures: React.FC = () => (
  <div className="commercial-standard-slide commercial-features-slide">
    <motion.div {...fadeUp} className="commercial-section-heading compact">
      <span className="commercial-section-kicker">A PLATAFORMA</span>
      <h2>Tudo o que sua igreja precisa para <span>administrar com clareza.</span></h2>
      <p>Uma base única para organizar a rotina financeira, acompanhar contribuições e fortalecer a governança.</p>
    </motion.div>

    <motion.div variants={stagger} initial="initial" animate="animate" className="commercial-feature-grid">
      {featureGroups.map(({ icon: Icon, title, subtitle, items }) => (
        <motion.div variants={fadeUp} className="commercial-feature-card" key={title}>
          <div className="commercial-feature-head">
            <div className="commercial-feature-icon"><Icon size={22} /></div>
            <div><h3>{title}</h3><small>{subtitle}</small></div>
          </div>
          <ul>
            {items.map((item) => <li key={item}><CheckCircle2 size={14} /> {item}</li>)}
          </ul>
        </motion.div>
      ))}
    </motion.div>

    <motion.div {...fadeUp} transition={{ delay: 0.35 }} className="commercial-more-features">
      <span><Users size={15} /> Gestão de membros</span>
      <span><CalendarDays size={15} /> Agenda</span>
      <span><BookOpenText size={15} /> Devocionais</span>
      <span><MessageCircleMore size={15} /> Assistente Glória</span>
      <span><Landmark size={15} /> Integrações</span>
    </motion.div>
  </div>
);

const flowSteps = [
  { icon: HeartHandshake, label: "Contribuições", detail: "Dízimos, ofertas e compromissos" },
  { icon: WalletCards, label: "Financeiro", detail: "Registros e movimentações" },
  { icon: ReceiptText, label: "Contas & compras", detail: "Pagamentos e fornecedores" },
  { icon: Landmark, label: "Bancos", detail: "Extratos e conciliação" },
  { icon: FileBarChart, label: "Relatórios", detail: "DRE, caixa e resultados" },
  { icon: FileCheck2, label: "Prestação de contas", detail: "Clareza para a liderança" },
];

export const CommercialFlow: React.FC = () => (
  <div className="commercial-standard-slide commercial-flow-slide">
    <motion.div {...fadeUp} className="commercial-section-heading centered compact">
      <span className="commercial-section-kicker">OPERAÇÃO CONECTADA</span>
      <h2>Do primeiro registro à prestação de contas, <span>tudo conectado.</span></h2>
      <p>Glória organiza o fluxo financeiro para que a informação não precise ser reconstruída no fim do mês.</p>
    </motion.div>

    <motion.div variants={stagger} initial="initial" animate="animate" className="commercial-flow-row">
      {flowSteps.map(({ icon: Icon, label, detail }, index) => (
        <React.Fragment key={label}>
          <motion.div variants={fadeUp} className="commercial-flow-step">
            <div className="commercial-flow-icon"><Icon size={22} /></div>
            <strong>{label}</strong>
            <small>{detail}</small>
          </motion.div>
          {index < flowSteps.length - 1 && <ChevronRight className="commercial-flow-arrow" size={19} />}
        </React.Fragment>
      ))}
    </motion.div>

    <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="commercial-cross-layer">
      <span><Building2 size={15} /> Centros de custo</span>
      <span><PackageCheck size={15} /> Patrimônio</span>
      <span><LockKeyhole size={15} /> Permissões</span>
      <span><ClipboardCheck size={15} /> Histórico e rastreabilidade</span>
      <span><FileCheck2 size={15} /> Documentos</span>
    </motion.div>
  </div>
);

export const CommercialMember: React.FC = () => (
  <div className="commercial-member-slide">
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      className="commercial-phone-area"
    >
      <div className="commercial-phone">
        <div className="commercial-phone-notch" />
        <div className="commercial-phone-screen">
          <div className="commercial-phone-brand">Glória <b>Finance</b></div>
          <div className="commercial-phone-greeting"><small>Olá, membro 👋</small><strong>Minha igreja</strong></div>
          <div className="commercial-phone-card">
            <small>Contribuições em 2026</small><strong>R$ 4.820,00</strong><span>Ver histórico</span>
          </div>
          <div className="commercial-phone-actions">
            <div><QrCode size={20} /><span>PIX</span></div>
            <div><CreditCard size={20} /><span>Boleto</span></div>
            <div><CalendarDays size={20} /><span>Agenda</span></div>
          </div>
          <div className="commercial-phone-devotional">
            <BookOpenText size={19} />
            <div><small>Devocional de hoje</small><strong>Fidelidade nas pequenas coisas</strong></div>
          </div>
        </div>
      </div>
      <div className="commercial-floating-pill"><Smartphone size={15} /> Experiência do membro</div>
    </motion.div>

    <motion.div variants={stagger} initial="initial" animate="animate" className="commercial-member-copy">
      <motion.span variants={fadeUp} className="commercial-section-kicker">ALÉM DA TESOURARIA</motion.span>
      <motion.h2 variants={fadeUp}>A gestão melhora para a igreja — <span>e para o membro também.</span></motion.h2>
      <motion.p variants={fadeUp}>Uma experiência digital que aproxima o membro da vida financeira e administrativa da igreja.</motion.p>
      <motion.div variants={fadeUp} className="commercial-member-list">
        <div><QrCode size={19} /><span><strong>Contribua com PIX ou boleto</strong><small>Uma jornada simples para dízimos e ofertas.</small></span></div>
        <div><ReceiptText size={19} /><span><strong>Acompanhe seu histórico</strong><small>Contribuições organizadas e acessíveis.</small></span></div>
        <div><ClipboardCheck size={19} /><span><strong>Consulte compromissos</strong><small>Mais clareza sobre compromissos e contribuições.</small></span></div>
        <div><CalendarDays size={19} /><span><strong>Agenda e conteúdos</strong><small>Informações e devocionais no mesmo ambiente.</small></span></div>
      </motion.div>
    </motion.div>
  </div>
);

const outcomes = [
  { icon: ShieldCheck, title: "Transparência", text: "Informações organizadas para prestação de contas." },
  { icon: ClipboardCheck, title: "Controle", text: "Saiba o que entrou, saiu, está pendente e por quê." },
  { icon: Layers3, title: "Continuidade", text: "O histórico pertence à igreja, não à memória de uma pessoa." },
  { icon: BarChart3, title: "Decisão", text: "Dados claros para a liderança planejar com responsabilidade." },
];

export const CommercialOutcomes: React.FC = () => (
  <div className="commercial-standard-slide commercial-outcomes-slide">
    <motion.div {...fadeUp} className="commercial-section-heading centered">
      <span className="commercial-section-kicker">O RESULTADO</span>
      <h2>Mais do que controlar dinheiro. <span>Administrar com confiança.</span></h2>
      <p>Glória Finance transforma rotina financeira em processos claros, históricos preservados e informação para decidir.</p>
    </motion.div>

    <motion.div variants={stagger} initial="initial" animate="animate" className="commercial-outcome-grid">
      {outcomes.map(({ icon: Icon, title, text }) => (
        <motion.div variants={fadeUp} className="commercial-outcome-card" key={title}>
          <div><Icon size={23} /></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </motion.div>
      ))}
    </motion.div>

    <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="commercial-positioning">
      <Sparkles size={17} />
      <strong>Glória Finance</strong> é uma plataforma de mordomia, transparência e governança financeira para igrejas.
    </motion.div>
  </div>
);

export const CommercialClosing: React.FC = () => (
  <div className="commercial-closing-slide">
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="commercial-closing-card">
      <div className="commercial-closing-logo">Glória <strong>Finance</strong></div>
      <span className="commercial-section-kicker light">PRÓXIMO PASSO</span>
      <h2>Sua igreja pode <span>administrar melhor.</span></h2>
      <p>Conheça o Glória Finance funcionando na prática e veja como centralizar a gestão da sua igreja.</p>
      <a href="https://gloriafinance.com.br" target="_blank" rel="noreferrer" className="commercial-closing-button">
        Agendar uma demonstração <ArrowRight size={18} />
      </a>
      <div className="commercial-closing-trust">
        <span><CheckCircle2 size={14} /> Feito para igrejas</span>
        <span><ShieldCheck size={14} /> Gestão com transparência</span>
        <span><Banknote size={14} /> Financeiro em um só lugar</span>
      </div>
      <small className="commercial-closing-url">gloriafinance.com.br</small>
    </motion.div>
  </div>
);
