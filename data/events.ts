export interface EventScheduleItem {
  time: string;
  activity: string;
  instructor?: string;
}

export interface EventDay {
  date: string;
  label: string;
  items: EventScheduleItem[];
}

export interface Sponsor {
  name: string;
  tier: "diamante" | "ouro" | "prata" | "bronze";
  logo?: string;
}

export interface SponsorshipTier {
  name: string;
  tier: "diamante" | "ouro" | "prata" | "bronze";
  price: number;
  benefits: string[];
  color: string;
}

export const eventSchedule: EventDay[] = [
  {
    date: "08/11/2025",
    label: "Sábado",
    items: [
      { time: "09h00", activity: "Funcional", instructor: "Alane" },
      { time: "10h00 – 12h00", activity: "Aulão Especial", instructor: "Gabriel & Heidy" },
      { time: "16h00", activity: "Apresentações de Dança", instructor: "Cia dos Crias & DCA" },
      { time: "17h00", activity: "Kids Chiqueto & Faces Oculta" },
      { time: "18h00", activity: "Banda Move" },
      { time: "19h00", activity: "Sunset DJ Zotte" },
    ],
  },
  {
    date: "09/11/2025",
    label: "Domingo",
    items: [
      { time: "07h00", activity: "Corrida / Caminhada" },
      { time: "09h00", activity: "DJ Fidelis" },
      { time: "10h00 – 11h00", activity: "Banda Ashline" },
    ],
  },
];

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    name: "Diamante",
    tier: "diamante",
    price: 10000,
    color: "#B9F2FF",
    benefits: [
      "Logo de destaque em toda comunicação",
      "Palco e banner principal",
      "30 ingressos VIP",
      "Ativação de marca no evento",
      "Menção em todas as mídias sociais",
    ],
  },
  {
    name: "Ouro",
    tier: "ouro",
    price: 5000,
    color: "#FFD700",
    benefits: [
      "Logo em materiais do evento",
      "Banner lateral",
      "15 ingressos VIP",
      "Menção nas mídias sociais",
    ],
  },
  {
    name: "Prata",
    tier: "prata",
    price: 3000,
    color: "#C0C0C0",
    benefits: [
      "Logo nos materiais impressos",
      "8 ingressos",
      "Menção nas redes sociais",
    ],
  },
  {
    name: "Bronze",
    tier: "bronze",
    price: 1500,
    color: "#CD7F32",
    benefits: [
      "Logo no site do evento",
      "4 ingressos",
      "Agradecimento nas redes",
    ],
  },
];

export const eventSponsors: Sponsor[] = [
  { name: "FILA", tier: "diamante" },
  { name: "Matrix", tier: "ouro" },
  { name: "TNT Sport Drink", tier: "ouro" },
  { name: "Ágil Internet", tier: "prata" },
  { name: "Axgard", tier: "prata" },
  { name: "DA Beauty", tier: "bronze" },
  { name: "Prefeitura de Salto", tier: "bronze" },
];