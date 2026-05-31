export interface BenefitSlide {
  id: string;
  problem: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
  impact: string;
  accentColor: "green" | "orange" | "purple";
  visualType: string;
}

export const benefitSlides: BenefitSlide[] = [
  {
    id: "gestao-centralizada",
    problem: "Administração sem processo",
    title: "Glória Finance centraliza a gestão financeira e administrativa da igreja.",
    shortTitle: "Gestão centralizada",
    description: "Quando a igreja depende de planilhas, mensagens, recibos soltos e memória humana, a gestão se torna frágil.\n\nO Glória Finance organiza a rotina em um único ambiente, conectando registros financeiros, contas a pagar, contas a receber, contribuições, compras, bancos, centros de custo, relatórios, patrimônio e permissões de acesso.",
    benefits: [
      "Reduz a dependência de controles paralelos.",
      "Organiza a rotina em módulos claros.",
      "Mantém informações importantes em uma base única.",
      "Facilita acompanhamento, revisão e prestação de contas."
    ],
    impact: "Menos improviso. Mais controle. Mais confiança.",
    accentColor: "green",
    visualType: "centralized-management"
  }
];
