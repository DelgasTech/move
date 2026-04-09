export interface Modality {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const modalities: Modality[] = [
  {
    id: "musculacao",
    name: "Move Musculação",
    icon: "dumbbell",
    description: "Força, resistência e hipertrofia com equipamentos de última geração.",
  },
  {
    id: "bike",
    name: "Move Bike",
    icon: "bike",
    description: "Bike indoor com sistema israelense para máxima performance.",
  },
  {
    id: "running",
    name: "Move Running",
    icon: "running",
    description: "Corridas e treinos no Estádio Municipal com assessoria especializada.",
  },
  {
    id: "cross",
    name: "Cross Team Move",
    icon: "cross",
    description: "Cross Training funcional em equipe para desafiar seus limites.",
  },
  {
    id: "fitness",
    name: "Sala Fitness",
    icon: "music",
    description: "Jump, Ritbox, Step, Fitdance e Kids em aulas animadas e dinâmicas.",
  },
  {
    id: "pilates",
    name: "Move Pilates",
    icon: "pilates",
    description: "Melhore sua postura e qualidade de vida com o método Pilates.",
  },
  {
    id: "terapeutico",
    name: "Move Fortalecimento Terapêutico",
    icon: "heart",
    description: "Atividades essenciais para o dia a dia com foco em saúde e bem-estar.",
  },
  {
    id: "fisioterapia",
    name: "Move Fisioterapia",
    icon: "firstaid",
    description: "Reabilitação e recuperação com profissionais qualificados.",
  },
  {
    id: "supervisionada",
    name: "Musculação Supervisionada",
    icon: "user",
    description: "Acompanhamento individual de personal trainer para resultados acelerados.",
  },
];