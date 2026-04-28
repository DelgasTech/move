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

export interface ExtraPricing {
  label: string;
  price: number;
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
    includes: [
      "Musculação ilimitada",
      "Spinning (Central Parque)",
      "Aulas Fitness (Rondon / Rui Barbosa)",
      "Aulas reservadas pelo app",
    ],
    highlight: true,
  },
];

export const extraPricing: ExtraPricing[] = [
  { label: "Diária Musculação", price: 30 },
  { label: "Diária Aulas Coletivas", price: 40 },
  { label: "Semanal", price: 80 },
  { label: "Quinzenal", price: 110 },
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
    includes: [],
  },
  {
    name: "Wellhub",
    tier: "SILVER +",
    units: "Moutonnée Move",
    includes: ["Cross Training", "Hyrox", "Recovery"],
    obs: "1 check-in por dia, válido para uma modalidade",
  },
  {
    name: "Totalpass",
    tier: "TP 2",
    units: "Moutonnée Move",
    includes: [],
  },
];

export type PricePeriod = "anual" | "semestral" | "mensal";
