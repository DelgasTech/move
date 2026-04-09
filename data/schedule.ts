export type Day = "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sáb" | "Dom";

export const days: Day[] = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

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
        modality: "Musculação",
        times: {
          Seg: "06h–22h",
          Ter: "06h–22h",
          Qua: "06h–22h",
          Qui: "06h–22h",
          Sex: "06h–22h",
          Sáb: "08h–14h",
          Dom: "—",
        },
      },
      {
        modality: "Jump",
        times: {
          Seg: "07h / 19h",
          Ter: "—",
          Qua: "07h / 19h",
          Qui: "—",
          Sex: "07h / 19h",
          Sáb: "09h",
          Dom: "—",
        },
      },
      {
        modality: "Ritbox",
        times: {
          Seg: "—",
          Ter: "07h / 19h30",
          Qua: "—",
          Qui: "07h / 19h30",
          Sex: "—",
          Sáb: "10h",
          Dom: "—",
        },
      },
      {
        modality: "Step",
        times: {
          Seg: "18h",
          Ter: "—",
          Qua: "18h",
          Qui: "—",
          Sex: "18h",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Fitdance",
        times: {
          Seg: "—",
          Ter: "18h30",
          Qua: "—",
          Qui: "18h30",
          Sex: "—",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Kids",
        times: {
          Seg: "09h",
          Ter: "09h",
          Qua: "09h",
          Qui: "09h",
          Sex: "09h",
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
        modality: "Musculação",
        times: {
          Seg: "06h–22h",
          Ter: "06h–22h",
          Qua: "06h–22h",
          Qui: "06h–22h",
          Sex: "06h–22h",
          Sáb: "08h–13h",
          Dom: "—",
        },
      },
      {
        modality: "Cross Team Move",
        times: {
          Seg: "07h / 18h",
          Ter: "07h / 18h",
          Qua: "07h / 18h",
          Qui: "07h / 18h",
          Sex: "07h / 18h",
          Sáb: "09h",
          Dom: "—",
        },
      },
      {
        modality: "Jump",
        times: {
          Seg: "07h / 19h",
          Ter: "—",
          Qua: "07h / 19h",
          Qui: "—",
          Sex: "07h / 19h",
          Sáb: "09h",
          Dom: "—",
        },
      },
      {
        modality: "Pilates",
        times: {
          Seg: "08h / 17h",
          Ter: "08h / 17h",
          Qua: "08h / 17h",
          Qui: "08h / 17h",
          Sex: "08h",
          Sáb: "—",
          Dom: "—",
        },
      },
    ],
  },
  {
    unit: "Sete de Setembro",
    schedule: [
      {
        modality: "Musculação",
        times: {
          Seg: "06h–21h",
          Ter: "06h–21h",
          Qua: "06h–21h",
          Qui: "06h–21h",
          Sex: "06h–21h",
          Sáb: "08h–12h",
          Dom: "—",
        },
      },
      {
        modality: "Fisioterapia",
        times: {
          Seg: "07h–19h",
          Ter: "07h–19h",
          Qua: "07h–19h",
          Qui: "07h–19h",
          Sex: "07h–19h",
          Sáb: "—",
          Dom: "—",
        },
      },
      {
        modality: "Fortalecimento Terapêutico",
        times: {
          Seg: "08h / 16h",
          Ter: "08h / 16h",
          Qua: "08h / 16h",
          Qui: "08h / 16h",
          Sex: "08h",
          Sáb: "—",
          Dom: "—",
        },
      },
    ],
  },
  {
    unit: "Central / Parque",
    schedule: [
      {
        modality: "Musculação",
        times: {
          Seg: "06h–22h",
          Ter: "06h–22h",
          Qua: "06h–22h",
          Qui: "06h–22h",
          Sex: "06h–22h",
          Sáb: "08h–14h",
          Dom: "08h–12h",
        },
      },
      {
        modality: "Bike Indoor",
        times: {
          Seg: "07h / 18h30",
          Ter: "07h / 18h30",
          Qua: "07h / 18h30",
          Qui: "07h / 18h30",
          Sex: "07h / 18h30",
          Sáb: "09h",
          Dom: "—",
        },
      },
      {
        modality: "Running",
        times: {
          Seg: "—",
          Ter: "06h30 / 19h",
          Qua: "—",
          Qui: "06h30 / 19h",
          Sex: "—",
          Sáb: "07h",
          Dom: "07h",
        },
      },
      {
        modality: "Musculação Supervisionada",
        times: {
          Seg: "07h–20h",
          Ter: "07h–20h",
          Qua: "07h–20h",
          Qui: "07h–20h",
          Sex: "07h–20h",
          Sáb: "08h–12h",
          Dom: "—",
        },
      },
    ],
  },
];