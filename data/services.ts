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
    id: "avaliacao",
    name: "Avaliação Física",
    description: "Avaliação física completa com métricas detalhadas para acompanhar sua evolução.",
  },
];