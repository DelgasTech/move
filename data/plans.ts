export interface PlanPartner {
  name: string;
  tier: string;
  units: string;
  includes: string[];
  obs?: string;
}

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  prices: {
    anual: number;
    semestral: number;
    mensal: number;
  };
  includes: string[];
  highlight: boolean;
}

export interface ExtraPricingGroup {
  title: string;
  subtitle?: string;
  items: { label: string; price: number; obs?: string }[];
}

export const plans: Plan[] = [
  {
    id: "start",
    name: "START",
    prices: {
      anual: 115,
      semestral: 130,
      mensal: 145,
    },
    includes: [
      "Musculação - acesso ilimitado em todas as unidades",
      "Aulas Fitness (Rondon / Rui Barbosa)",
      "Fisioterapia (Sete de Setembro)",
    ],
    highlight: false,
  },
  {
    id: "plus",
    name: "PLUS",
    badge: "Mais Popular",
    prices: {
      anual: 165,
      semestral: 180,
      mensal: 195,
    },
    includes: [
      "Musculação - acesso ilimitado em todas as unidades",
      "Spinning (Central Parque)",
      "Aulas Fitness (Rondon / Rui Barbosa)",
      "Aulas reservadas pelo app",
    ],
    highlight: true,
  },
];

export const extraPricing: ExtraPricingGroup[] = [
  {
    title: "Musculação",
    items: [
      { label: "Diária", price: 30 },
      { label: "Semanal", price: 80, obs: "7 dias corridos" },
      { label: "Quinzenal", price: 110, obs: "15 dias corridos" },
    ],
  },
  {
    title: "Aulas Coletivas",
    subtitle: "Sala Fitness, Aulas Kids e Bike Indoor",
    items: [
      { label: "Diária", price: 40 },
    ],
  },
  {
    title: "Cross Moutonne",
    subtitle: "Cross Training ou Hyrox",
    items: [
      { label: "Diária", price: 50 },
    ],
  },
];

export const partners: PlanPartner[] = [
  {
    name: "Wellhub",
    tier: "SILVER +",
    units: "Sete de Setembro",
    includes: ["Pilates", "Fortalecimento Terapêutico", "Musculação", "Fisioterapia"],
    obs: "1 check-in por dia, válido para uma modalidade (exceto aulas de corrida e musculação supervisionada)",
  },
  {
    name: "Wellhub",
    tier: "BASIC +",
    units: "Central Parque, Rondon e Rui Barbosa",
    includes: ["Spinning", "Musculação", "Aulas Fitness"],
    obs: "1 check-in por dia, válido para uma modalidade (exceto aulas de corrida e musculação supervisionada)",
  },
  {
    name: "Totalpass",
    tier: "TP 1+",
    units: "Rui Barbosa, Central Parque e Rondon",
    includes: ["Musculação"],
  },
  {
    name: "Wellhub",
    tier: "SILVER +",
    units: "Moutonnée Move",
    includes: ["Cross Training", "Hyrox"],
    obs: "1 check-in por dia, válido para uma modalidade",
  },
  {
    name: "Totalpass",
    tier: "TP 2",
    units: "Moutonnée Move",
    includes: ["Cross Training", "Hyrox"],
  },
];

export type PricePeriod = "anual" | "semestral" | "mensal";
