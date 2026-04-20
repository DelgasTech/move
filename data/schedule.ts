export type Day = "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sáb" | "Dom";

export const days: Day[] = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export interface ScheduleRow {
  modality: string;
  times: Partial<Record<Day, string>>;
}

export interface UnitSchedule {
  unit: string;
  schedule: ScheduleRow[];
}

export const scheduleData: UnitSchedule[] = [
  {
    unit: "Rondon",
    schedule: [
      {
        modality: "Ritbox — Prof. Erica",
        times: {
          Seg: "07h30 / 19h10",
          Ter: "—",
          Qua: "07h30 / 19h10",
          Qui: "—",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Jump — Prof. Erica",
        times: {
          Seg: "08h20 / 20h10",
          Ter: "20h30",
          Qua: "08h20 / 20h10",
          Qui: "—",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Alongamento — Prof. Erica",
        times: {
          Seg: "09h10",
          Ter: "—",
          Qua: "09h10",
          Qui: "20h30",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Circuito — Prof. Erica",
        times: {
          Seg: "10h00 / 18h10",
          Ter: "—",
          Qua: "10h00 / 18h10",
          Qui: "—",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "MoveDance — Prof. Biel",
        times: {
          Seg: "—",
          Ter: "08h00 / 19h20",
          Qua: "—",
          Qui: "08h00 / 19h20",
          Sex: "19h50",
          Sáb: "08h20",
          Dom: "—",
        },
      },
      {
        modality: "Step — Prof. Biel",
        times: {
          Seg: "—",
          Ter: "09h00 / 18h30",
          Qua: "—",
          Qui: "09h00 / 18h30",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Pump — Prof. Biel",
        times: {
          Seg: "—",
          Ter: "17h40",
          Qua: "—",
          Qui: "—",
          Sex: "07h30 / 18h10",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "G.A.P — Prof. Biel",
        times: {
          Seg: "—",
          Ter: "—",
          Qua: "—",
          Qui: "17h40",
          Sex: "08h20 / 19h00",
          Sáb: "—",
          Dom: "—",
        },
      },
    ],
  },
  {
    unit: "Rui Barbosa",
    schedule: [
      {
        modality: "Fitdance — Prof. Heidy",
        times: {
          Seg: "07h15",
          Ter: "19h50",
          Qua: "07h15",
          Qui: "—",
          Sex: "07h15 / 19h50",
          Sáb: "08h00",
          Dom: "—",
        },
      },
      {
        modality: "Ritmos — Prof. Heidy",
        times: {
          Seg: "08h10",
          Ter: "—",
          Qua: "08h10",
          Qui: "—",
          Sex: "08h10",
          Sáb: "—",
          Dom: "—",
        },
      },
    ],
  },
];