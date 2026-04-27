export interface Modality {
  id: string;
  name: string;
  description: string;
}

export const modalities: Modality[] = [
  {
    id: "musculacao",
    name: "Musculação",
    description: "Força, resistência e hipertrofia com equipamentos de última geração.",
  },
  {
    id: "spinning",
    name: "Spinning",
    description: "Bike indoor com sistema israelense para máxima performance.",
  },
  {
    id: "running",
    name: "Running",
    description: "Corridas e treinos no Estádio Municipal com assessoria especializada.",
  },
  {
    id: "cross",
    name: "Cross Team",
    description: "Cross Training funcional em equipe para desafiar seus limites.",
  },
  {
    id: "fitness",
    name: "Sala Fitness",
    description: "Jump, Ritbox, Step, Fitdance e Kids em aulas animadas e dinâmicas.",
  },
  {
    id: "pilates",
    name: "Pilates",
    description: "Melhore sua postura e qualidade de vida com o método Pilates.",
  },
  {
    id: "terapeutico",
    name: "Fortalecimento Terapêutico",
    description: "Atividades essenciais para o dia a dia com foco em saúde e bem-estar.",
  },
  {
    id: "fisioterapia",
    name: "Fisioterapia",
    description: "Reabilitação e recuperação com profissionais qualificados.",
  },
  {
    id: "supervisionada",
    name: "Musculação Supervisionada",
    description: "Acompanhamento individual de personal trainer para resultados acelerados.",
  },
];
