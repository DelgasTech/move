export const tvMoveStats = {
  alunosDia: 1635,
  mulheres: 46,
  homens: 54,
  faixaEtaria: [
    { faixa: "20–29 anos", percentual: 19.6 },
    { faixa: "30–39 anos", percentual: 24.8 },
    { faixa: "40–49 anos", percentual: 18.0 },
    { faixa: "50–59 anos", percentual: 15.1 },
    { faixa: "60+ anos", percentual: 15.7 },
  ],
};

export type TvUnidade = {
  nome: string;
  horarios: { dias: string; horario: string }[];
  exibicao30s: number;
  exibicao15s: number;
  minutosDia: number;
  horasMes: number;
};

export const tvUnidades: TvUnidade[] = [
  {
    nome: "Rui Barbosa",
    horarios: [
      { dias: "Segunda à Sexta", horario: "05h às 01h" },
      { dias: "Sábado e Domingo", horario: "07h às 16h" },
      { dias: "Feriados", horario: "07h às 12h" },
    ],
    exibicao30s: 102,
    exibicao15s: 204,
    minutosDia: 31,
    horasMes: 15,
  },
  {
    nome: "Rondon",
    horarios: [
      { dias: "Segunda à Sexta", horario: "05h às 23h" },
      { dias: "Sábado e Domingo", horario: "07h às 16h" },
      { dias: "Feriados", horario: "07h às 12h" },
    ],
    exibicao30s: 114,
    exibicao15s: 228,
    minutosDia: 34,
    horasMes: 17,
  },
  {
    nome: "Central Parque",
    horarios: [
      { dias: "Segunda à Sexta", horario: "05h às 00h" },
      { dias: "Sábado e Domingo", horario: "07h às 16h" },
      { dias: "Feriados", horario: "07h às 12h" },
    ],
    exibicao30s: 108,
    exibicao15s: 216,
    minutosDia: 32,
    horasMes: 16,
  },
  {
    nome: "Sete de Setembro",
    horarios: [
      { dias: "Segunda à Sexta", horario: "05h às 22h" },
      { dias: "Sábado", horario: "07h às 12h" },
      { dias: "Feriados", horario: "07h às 12h" },
    ],
    exibicao30s: 120,
    exibicao15s: 240,
    minutosDia: 36,
    horasMes: 18,
  },
];
