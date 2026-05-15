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
    name: "Bike Indoor",
    description: "Bikes integradas com sistema israelense que apresenta gráfico de performance e ranking mundial.",
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
    name: "Aulas Fitness",
    description: "Jump, Ritbox, Step, Fitdance e Ritmos em aulas animadas e dinâmicas.",
    units: ["Rondon", "Rui Barbosa"],
  },
  {
    id: "aulas-kids",
    name: "Aulas Kids",
    description: "Um ambiente dedicado onde as crianças podem se exercitar e interagir brincando, desenvolver coordenação motora, criatividade e confiança de forma leve, divertida e cheia de energia.",
    units: ["Rui Barbosa", "SmashMove"],
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
    id: "personal-trainer",
    name: "Personal Trainer",
    description: "Acompanhamento individual de personal trainer com atenção exclusiva durante a aula para resultados acelerados.",
    units: ["Central Parque", "Rondon", "Rui Barbosa", "Sete de Setembro"],
  },
  {
    id: "supervisionada",
    name: "Musculação Supervisionada",
    description: "A musculação supervisionada é realizada em dupla, com acompanhamento de personal trainer e treinos desenvolvidos de acordo com os objetivos de cada aluno, garantindo motivação, segurança e melhores resultados juntos.",
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
    units: ["SmashMove"],
  },
  {
    id: "foot-volei",
    name: "Futevôlei",
    description: "Um esporte praticado na areia que combina futebol e vôlei, unindo técnica, habilidade e agilidade.",
    units: ["SmashMove"],
  },
  {
    id: "volei-areia",
    name: "Vôlei de Areia",
    description: "Treinamento e prática de vôlei de praia em quadras profissionais.",
    units: ["SmashMove"],
  },
];
