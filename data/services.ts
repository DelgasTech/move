export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  highlight?: boolean;
}

export const services: Service[] = [
  {
    id: "nutri",
    name: "Nutricionista",
    description: "Avaliação nutricional completa e plano alimentar personalizado para seus objetivos.",
    price: 114.9,
  },
  {
    id: "consultoria",
    name: "Consultoria Física",
    description: "Avaliação física detalhada e prescrição de treino individual.",
    price: 59.9,
  },
  {
    id: "combo",
    name: "Pacote Completo",
    description: "Nutricionista + Consultoria Física com 15% de desconto. A combinação perfeita para resultados.",
    price: 149.9,
    highlight: true,
  },
];