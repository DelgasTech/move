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
      "Crossfit (Rui Barbosa)",
      "Bike Indoor (Central / Parque)",
      "Fisioterapia",
      "Aulas Fitness (Rondon / Rui Barbosa)",
      "Aulas reservadas pelo app",
    ],
    highlight: true,
  },
];

export type PricePeriod = "anual" | "semestral" | "mensal";