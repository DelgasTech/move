export interface Modality {
  id: string;
  name: string;
  description: string;
  units: string[];
}

export const modalities: Modality[] = [
  {
    id: "musculacao",
    name: "Musculação",
    description: "Força, resistência e hipertrofia com equipamentos de última geração.",
    units: ["Central Parque", "Rondon", "Rui Barbosa", "Sete de Setembro"],
  },
  {
    id: "spinning",
    name: "Spinning",
    description: "Bike indoor com sistema israelense para máxima performance.",
    units: ["Central Parque"],
  },
  {
    id: "running",
    name: "Running",
    description: "Corridas e treinos no Estádio Municipal com assessoria especializada.",
    units: [],
  },
  {
    id: "fitness",
    name: "Sala Fitness",
    description: "Jump, Ritbox, Step, Fitdance e Aulas Kids em aulas animadas e dinâmicas.",
    units: ["Central Parque", "Rondon", "Rui Barbosa"],
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Melhore sua postura e qualidade de vida com o método Pilates.",
    units: ["Sete de Setembro"],
  },
  {
    id: "terapeutico",
    name: "Fortalecimento Terapêutico",
    description: "Atividades essenciais para o dia a dia com foco em saúde e bem-estar.",
    units: ["Sete de Setembro"],
  },
  {
    id: "supervisionada",
    name: "Musculação Supervisionada",
    description: "Acompanhamento individual de personal trainer para resultados acelerados.",
    units: ["Central Parque", "Rondon", "Rui Barbosa", "Sete de Setembro"],
  },
  {
    id: "cross-training",
    name: "Cross Training",
    description: "Treino funcional de alta intensidade com programação diária variada.",
    units: ["Moutonnée Move"],
  },
  {
    id: "hyrox",
    name: "Hyrox",
    description: "Prepare-se para a maior competição de fitness do mundo com treinos específicos.",
    units: ["Moutonnée Move"],
  },
  {
    id: "beach-tennis",
    name: "Beach Tennis",
    description: "Esporte de raquete na areia com ritmo dinâmico e muita diversão.",
    units: ["Smash Move"],
  },
  {
    id: "foot-volei",
    name: "Futevôlei",
    description: "Vôlei com os pés — técnica, habilidade e agilidade na areia.",
    units: ["Smash Move"],
  },
  {
    id: "volei-areia",
    name: "Vôlei de Areia",
    description: "Treinamento e prática de vôlei de praia em quadras profissionais.",
    units: ["Smash Move"],
  },
];
