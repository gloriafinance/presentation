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
    subtitle: "Boa gestão também é cuidado",
    description: "Toda igreja lida com dízimos, ofertas, despesas, fornecedores, patrimônio e responsabilidades diante da liderança, da membresia e da sociedade.\n\nQuando esses processos não são bem organizados, a igreja começa a depender de memória, planilhas soltas, conversas de WhatsApp, recibos perdidos e controles manuais. O problema não é falta de zelo; é tentar administrar uma realidade complexa com ferramentas frágeis.",
    impact: "Boa intenção não substitui processos claros.",
    accentColor: "green",
    visualType: "administration",
    bullets: [
      "Entradas, saídas e compromissos precisam de visibilidade contínua.",
      "A dependência de planilhas isoladas gera ruídos na prestação de contas.",
      "A liderança precisa de informações organizadas para decidir com segurança.",
      "Administrar bem também é uma forma de proteger a confiança da igreja."
    ]
  },
  {
    id: "rotina-complexa",
    number: 4,
    title: "A rotina financeira da igreja é mais complexa do que parece.",
    shortTitle: "Rotina complexa",
    subtitle: "Muitas frentes ao mesmo tempo",
    description: "Em uma única semana, a igreja pode lidar com dízimos, ofertas, pagamentos, dízimos de departamentos, compras, fornecedores, eventos e compromissos futuros.\n\nO desafio aparece quando todas essas frentes acontecem ao mesmo tempo, mas o controle continua dividido entre pessoas, planilhas soltas e registros manuais.",
    impact: "Quando tudo fica disperso, ninguém enxerga o todo.",
    accentColor: "purple",
    visualType: "complexity",
    bullets: [
      "O financeiro da igreja não é apenas entrada e saída de dinheiro.",
      "Cada ministério, compra, campanha ou compromisso gera informação administrativa.",
      "Sem centralização, a equipe perde tempo tentando reconstruir o cenário real.",
      "Quanto mais a igreja cresce, mais frágil fica o controle manual."
    ]
  },
  {
    id: "dados-espalhados",
    number: 5,
    title: "Quando a informação está espalhada, a gestão fica vulnerável.",
    shortTitle: "Dados espalhados",
    subtitle: "Planilhas, WhatsApp e recibos",
    description: "Muitas igrejas possuem informações importantes, mas elas estão divididas entre planilhas, cadernos, conversas de WhatsApp, comprovantes no celular, recibos físicos e pastas antigas.\n\nA igreja até pode ter os dados, mas não tem uma visão única, organizada, auditável e confiável. Isso dificulta relatórios, prestação de contas e continuidade administrativa.",
    impact: "O risco não está apenas em perder dinheiro. Está em perder clareza.",
    accentColor: "orange",
    visualType: "scattered-data",
    bullets: [
      "Comprovantes em celulares pessoais podem se perder facilmente.",
      "Conversas de WhatsApp não substituem histórico administrativo.",
      "Planilhas diferentes podem gerar versões diferentes da mesma realidade.",
      "Dados espalhados tornam a prestação de contas mais lenta e insegura."
    ]
  },
  {
    id: "fragilidade-administrativa",
    number: 6,
    title: "Sem padrão, histórico e rastreabilidade, a gestão fica frágil.",
    shortTitle: "Fragilidade",
    subtitle: "Falta de padrão e histórico",
    description: "Quando não existe um processo claro, cada pessoa registra de um jeito. Algumas informações ficam completas, outras incompletas. Alguns pagamentos têm comprovante, outros não. Algumas decisões têm histórico, outras ficam apenas em conversas.\n\nEssa fragilidade quase nunca aparece no momento da operação. Ela aparece depois, quando alguém precisa revisar, explicar, comprovar ou reconstruir o que aconteceu.",
    impact: "A fragilidade administrativa aparece quando alguém precisa conferir o passado.",
    accentColor: "purple",
    visualType: "fragility",
    bullets: [
      "Sem padrão, a qualidade da informação depende de quem registrou.",
      "Sem histórico, a igreja perde capacidade de auditoria interna.",
      "Sem rastreabilidade, decisões importantes ficam difíceis de explicar.",
      "A gestão se torna vulnerável em mudanças de liderança ou tesouraria."
    ]
  },
  {
    id: "confianca",
    number: 7,
    title: "A confiança da membresia precisa ser sustentada por processos claros.",
    shortTitle: "Confiança",
    subtitle: "Prestação de contas e clareza",
    description: "A igreja administra recursos entregues com fé, sacrifício e propósito. Por isso, a prestação de contas precisa transmitir zelo, clareza e segurança real.\n\nQuando não há processos bem definidos, surgem perguntas difíceis: quanto entrou, quanto saiu, o que foi pago, o que está pendente, quem aprovou, onde está o comprovante e como isso será apresentado.",
    impact: "A transparência não deve depender da memória de alguém.",
    accentColor: "green",
    visualType: "trust",
    bullets: [
      "Recursos entregues com propósito exigem cuidado administrativo.",
      "A membresia precisa perceber clareza, não improviso.",
      "Prestação de contas não deve ser um esforço de última hora.",
      "Processos claros fortalecem confiança entre liderança, tesouraria e igreja."
    ]
  },
  {
    id: "legal-documental",
    number: 8,
    title: "Boa intenção não substitui organização documental.",
    shortTitle: "Legal e documental",
    subtitle: "Registros, comprovação e responsabilidade",
    description: "Mesmo sendo uma instituição religiosa, a igreja possui responsabilidades administrativas, fiscais, contábeis e documentais. Ela precisa manter registros coerentes, comprovações, históricos e controles internos que demonstrem boa gestão.\n\nSem organização, a dificuldade aparece em momentos sensíveis: prestação de contas, troca de liderança, revisão contábel, auditoria interna, comprovação de pagamentos ou questionamentos de membros e diretoria.",
    impact: "O problema jurídico-administrativo normalmente aparece tarde: quando alguém precisa comprovar.",
    accentColor: "orange",
    visualType: "legal",
    bullets: [
      "Boa gestão precisa deixar evidências organizadas.",
      "Comprovantes e históricos protegem a instituição.",
      "Trocas de liderança exigem continuidade documental.",
      "A igreja precisa estar preparada para responder com clareza e responsabilidade."
    ]
  },
  {
    id: "mordomia",
    number: 9,
    title: "Administrar bem também é uma forma de mordomia.",
    shortTitle: "Mordomia",
    subtitle: "Zelo espiritual e responsabilidade",
    description: "A gestão financeira de uma igreja não é apenas uma tarefa operacional. Ela carrega uma dimensão espiritual, porque cada contribuição representa confiança, sacrifício e propósito.\n\nCada pagamento precisa refletir responsabilidade. Cada bem adquirido deve ser cuidado. Cada relatório deve ajudar a liderança a decidir melhor. Administrar com ordem também é uma forma de honrar aquilo que foi confiado à igreja.",
    impact: "Onde há recursos consagrados, deve haver cuidado redobrado.",
    accentColor: "purple",
    visualType: "stewardship",
    bullets: [
      "Mordomia envolve zelo com aquilo que foi confiado à igreja.",
      "Organização financeira não é burocracia; é responsabilidade.",
      "Cuidar dos recursos também é cuidar da missão.",
      "A boa administração fortalece o testemunho de seriedade da igreja."
    ]
  },
  {
    id: "continuidade",
    number: 10,
    title: "A igreja não pode depender apenas da memória de quem administra hoje.",
    shortTitle: "Continuidade",
    subtitle: "Memória institucional",
    description: "Um dos maiores riscos administrativos é quando o conhecimento financeiro fica concentrado em poucas pessoas. Se o tesoureiro muda, se um líder sai, se alguém perde acesso ao celular ou se uma planilha é apagada, a igreja pode perder contexto, histórico e rastreabilidade.\n\nProcessos saudáveis protegem a memória institucional e permitem que a gestão continue mesmo quando pessoas mudam de função.",
    impact: "A gestão precisa sobreviver à troca de pessoas.",
    accentColor: "green",
    visualType: "continuity",
    bullets: [
      "O histórico financeiro não deve morar na memória de uma pessoa.",
      "Mudanças de tesouraria precisam acontecer sem perda de informação.",
      "A igreja precisa preservar contexto, decisões e comprovantes.",
      "Continuidade administrativa protege a estabilidade da gestão."
    ]
  },
  {
    id: "patrimonio",
    number: 11,
    title: "Patrimônio sem controle vira perda silenciosa.",
    shortTitle: "Patrimônio",
    subtitle: "Bens, inventário e responsabilidade",
    description: "Instrumentos, caixas de som, computadores, cadeiras, móveis, veículos, equipamentos e documentos fazem parte do patrimônio da igreja.\n\nQuando não há inventário claro, a igreja pode não saber quais bens possui, onde estão, quem é o responsável, qual o valor aproximado, se foram doados, comprados, perdidos, vendidos ou danificados.",
    impact: "O patrimônio da igreja também é fruto de contribuições. Por isso, exige zelo e rastreabilidade.",
    accentColor: "orange",
    visualType: "patrimony",
    bullets: [
      "Bens comprados com recursos da igreja precisam ser identificados.",
      "Sem inventário, perdas podem acontecer de forma silenciosa.",
      "Localização, responsável e histórico ajudam na prestação de contas.",
      "Patrimônio também faz parte da mordomia administrativa."
    ]
  },
  {
    id: "decisao",
    number: 12,
    title: "Sem visão financeira clara, a liderança decide com sensação, não com dados.",
    shortTitle: "Decisão",
    subtitle: "Informação para liderar melhor",
    description: "A liderança precisa tomar decisões constantemente: assumir compromissos, investir em ministérios, acompanhar custos, avaliar campanhas, entender saldos e planejar os próximos meses.\n\nQuando os dados não estão organizados, a decisão depende de percepção, urgência ou opinião. Isso aumenta o risco de compromissos mal avaliados e reduz a clareza estratégica da igreja.",
    impact: "A igreja precisa de fé para avançar, mas também precisa de informação para administrar bem.",
    accentColor: "purple",
    visualType: "decision",
    bullets: [
      "Decisões financeiras exigem visão real do presente.",
      "Sem dados, a liderança trabalha com sensação e urgência.",
      "Relatórios claros ajudam a planejar com responsabilidade.",
      "Informação organizada transforma gestão em direção estratégica."
    ]
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
