"use client";

import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";

type HorarioItem = {
  dias: string;
  horario: string;
};

type UnidadeHorario = {
  nome: string;
  horarios: HorarioItem[];
};

const unidades: UnidadeHorario[] = [
  {
    nome: "Sete de Setembro",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 22h00" },
      { dias: "Sábados e Feriados", horario: "07h00 às 12h00" },
      { dias: "Domingo", horario: "Fechado" },
    ],
  },
  {
    nome: "Central Parque",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 00h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
  },
  {
    nome: "Rondon",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 00h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
  },
  {
    nome: "Rui Barbosa",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 01h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
  },
];

export default function HorariosFuncionamento() {
  return (
    <section id="horarios" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Quando treinar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Horários de Funcionamento
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Consulte os horários de cada unidade e planeje seu treino.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {unidades.map((unidade, i) => (
            <motion.div
              key={unidade.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FiClock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-white font-bold text-base leading-tight">{unidade.nome}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {unidade.horarios.map((h) => (
                  <div key={h.dias} className="border-t border-white/10 pt-3 first:border-0 first:pt-0">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{h.dias}</p>
                    <p
                      className={`font-semibold text-sm ${
                        h.horario === "Fechado" ? "text-gray-500" : "text-white"
                      }`}
                    >
                      {h.horario}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
