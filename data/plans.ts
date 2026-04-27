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
  diaria: number;
  includes: string[];
  highlight: boolean;
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
    diaria: 30,
    includes: [
      "Musculação ilimitada",
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
    diaria: 40,
    includes: [
      "Musculação ilimitada",
      "Crossfit (Rui Barbosa)",
      "Bike Indoor (Central / Parque)",
      "Fisioterapia",
      "Aulas Fitness (Rondon / Rui Barbosa)",
      "Aulas reservadas pelo app",
    ],
    highlight: true,
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
    includes: ["Bike", "Musculação", "Aulas Fitness"],
    obs: "1 check-in por dia, válido para uma modalidade (exceto aulas de corrida e musculação supervisionada)",
  },
  {
    name: "Totalpass",
    tier: "TP 1+",
    units: "Rui Barbosa, Central Parque e Rondon",
    includes: [],
  },
];

export type PricePeriod = "anual" | "semestral" | "mensal";
