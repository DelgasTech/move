export interface Service {
  id: string;
  name: string;
  description: string;
  price?: number;
  ctaLabel?: string;
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "musculacao-supervisionada",
    name: "Musculação Supervisionada",
    description: "Acompanhamento de um profissional para 2 alunos. Mais segurança e técnica nos seus treinos.",
  },
  {
    id: "personal",
    name: "Personal Trainer",
    description: "Atendimento exclusivo 1 a 1 com um profissional dedicado ao seu objetivo.",
  },
  {
    id: "nutri",
    name: "Nutricionista",
    description: "Avaliação nutricional completa e plano alimentar personalizado para seus objetivos.",
  },
  {
    id: "massoterapia",
    name: "Massoterapia",
    description: "Sessões de massoterapia para alívio de tensões, recuperação muscular e bem-estar.",
  },
  {
    id: "recovery",
    name: "Recovery",
    description: "Técnicas de recuperação ativa para otimizar seu desempenho e prevenir lesões.",
  },
  {
    id: "avaliacao",
    name: "Avaliação Física",
    description: "Avaliação física completa com métricas detalhadas para acompanhar sua evolução.",
  },
];