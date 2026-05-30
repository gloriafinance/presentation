export interface ProblemSlide {
  id: string;
  number: number;
  title: string;
  shortTitle: string;
  subtitle?: string;
  description: string;
  impact: string;
  bullets?: string[];
  accentColor: "green" | "orange" | "purple";
  visualType:
    | "administration"
    | "complexity"
    | "scattered-data"
    | "fragility"
    | "trust"
    | "legal"
    | "stewardship"
    | "continuity"
    | "patrimony"
    | "decision";
}

export const problemSlides: ProblemSlide[] = [
  {
    id: "administracao",
    number: 3,
    title: "A igreja também precisa de boa administração.",
    shortTitle: "Administração",
    subtitle: "Rotina complexa",
    description: "Toda igreja lida com entradas, saídas, compromissos, fornecedores, patrimônio e responsabilidades diante da liderança, da membresia e da sociedade.\n\nQuando esses processos não são bem organizados, a igreja começa a depender de memória, planilhas soltas, conversas de WhatsApp, recibos perdidos e controles manuais.",
    impact: "Boa intenção não substitui processos claros.",
    accentColor: "green",
    visualType: "administration",
    bullets: [
      "Entradas, saídas e compromissos precisam de visibilidade contínua.",
      "A dependência de planilhas isoladas gera ruídos na prestação de contas.",
      "A liderança exige relatórios que transmitam segurança e zelo administrativo."
    ]
  },
  {
    id: "rotina-complexa",
    number: 4,
    title: "A rotina financeira da igreja é mais complexa do que parece.",
    shortTitle: "Rotina complexa",
    subtitle: "Muitos eventos",
    description: "Em uma única semana, a igreja lida com dízimos, pagamentos, campanhas, departamentos e patrimônio. O problema aparece quando tudo isso acontece ao mesmo tempo, de forma dispersa.",
    impact: "Quando tudo fica disperso, ninguém enxerga o todo.",
    accentColor: "purple",
    visualType: "complexity"
  },
  {
    id: "dados-espalhados",
    number: 5,
    title: "Quando a informação está espalhada, a gestão fica vulnerável.",
    shortTitle: "Dados espalhados",
    subtitle: "Planilhas e WhatsApp",
    description: "Muitas igrejas possuem informações importantes divididas entre planilhas, cadernos, conversas de WhatsApp, comprovantes no celular, recibos físicos e pastas antigas.",
    impact: "O risco não está apenas em perder dinheiro. Está em perder clareza.",
    accentColor: "orange",
    visualType: "scattered-data"
  },
  {
    id: "fragilidade-administrativa",
    number: 6,
    title: "Sem padrão, histórico e rastreabilidade, a gestão fica frágil.",
    shortTitle: "Fragilidade",
    subtitle: "Falta de padrão",
    description: "Quando não existe um processo claro, cada pessoa registra de um jeito. Alguns pagamentos têm comprovante, outros não. Algumas decisões têm histórico, outras ficam em conversas.",
    impact: "A fragilidade quase sempre aparece quando alguém precisa conferir o passado.",
    accentColor: "purple",
    visualType: "fragility"
  },
  {
    id: "confianca",
    number: 7,
    title: "A confiança da membresia precisa ser sustentada por processos claros.",
    shortTitle: "Confiança",
    subtitle: "Zelo e prestação",
    description: "A igreja administra recursos entregues com fé e sacrifício. Por isso, a prestação de contas precisa transmitir zelo, clareza e segurança real, além de meras planilhas.",
    impact: "A transparência não deve depender da memória de alguém.",
    accentColor: "green",
    visualType: "trust"
  },
  {
    id: "legal-documental",
    number: 8,
    title: "Boa intenção não substitui organização documental.",
    shortTitle: "Legal e documental",
    subtitle: "Responsabilidade fiscal",
    description: "Mesmo sendo uma instituição religiosa, a igreja possui responsabilidades administrativas, fiscais, contábeis e documentais que exigem históricos consistentes.",
    impact: "O problema jurídico-administrativo normalmente aparece tarde: quando alguém precisa comprovar.",
    accentColor: "orange",
    visualType: "legal"
  },
  {
    id: "mordomia",
    number: 9,
    title: "Administrar bem também é uma forma de mordomia.",
    shortTitle: "Mordomia",
    subtitle: "Cuidado espiritual",
    description: "A gestão financeira de uma igreja carrega uma dimensão espiritual. Cada contribuição representa confiança sagrada, e cada relatório deve ajudar a liderança a decidir com clareza.",
    impact: "Onde há recursos consagrados, deve haver cuidado redobrado.",
    accentColor: "purple",
    visualType: "stewardship"
  },
  {
    id: "continuidade",
    number: 10,
    title: "A igreja não pode depender apenas da memória de quem administra hoje.",
    shortTitle: "Continuidade",
    subtitle: "Sem depender de pessoas",
    description: "Um dos maiores riscos é a concentração do conhecimento financeiro. Se o tesoureiro muda ou perde o celular, a igreja perde contexto, histórico e rastreabilidade.",
    impact: "A gestão precisa sobreviver à troca de pessoas.",
    accentColor: "green",
    visualType: "continuity"
  },
  {
    id: "patrimonio",
    number: 11,
    title: "Patrimônio sem controle vira perda silenciosa.",
    shortTitle: "Patrimônio",
    subtitle: "Bens sem controle",
    description: "Equipamentos, instrumentos, caixas de som e computadores são frutos de contribuições. Sem inventário claro, a igreja perde a rastreabilidade sobre bens comprados e doados.",
    impact: "O patrimônio da igreja também é fruto de ofertas sagradas. Por isso, exige zelo.",
    accentColor: "orange",
    visualType: "patrimony"
  },
  {
    id: "decisao",
    number: 12,
    title: "Sem visão financeira clara, a liderança decide com sensação, não com dados.",
    shortTitle: "Decisão",
    subtitle: "Informação vs. Sensação",
    description: "A liderança precisa tomar decisões: assumir compromissos, investir em novos ministérios, analisar saldos. Sem dados organizados, a decisão depende apenas da urgência.",
    impact: "A igreja precisa de fé para avançar, mas também precisa de informação para administrar.",
    accentColor: "purple",
    visualType: "decision"
  }
];

export interface PresentationData {
  title: string;
  subtitle: string;
  coverNote: string;
  mindmapTitle: string;
  mindmapSubtitle: string;
  mindmapCenter: string;
}

export const presentationTexts: PresentationData = {
  title: "O Ciclo da Desorganização Financeira",
  subtitle: "Uma leitura real, prática, legal e espiritual dos desafios que muitas igrejas enfrentam antes de adotarem uma gestão centralizada.",
  coverNote: "Antes de apresentar uma solução, precisamos entender o ciclo que enfraquece a clareza, a confiança e a tomada de decisão.",
  mindmapTitle: "O Ciclo da Desorganização Financeira",
  mindmapSubtitle: "Como controles manuais, dados espalhados e falta de rastreabilidade afetam a confiança, a prestação de contas e a tomada de decisão da igreja.",
  mindmapCenter: "Quando a gestão não é centralizada, a igreja perde clareza, confiança e capacidade de decisão."
};
