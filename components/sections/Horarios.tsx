"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { scheduleData, days } from "@/data/schedule";

const professorColors: Record<string, { bg: string; text: string }> = {
  "Erica": { bg: "bg-violet-100", text: "text-violet-700" },
  "Biel":  { bg: "bg-orange-100", text: "text-orange-700" },
  "Heidy": { bg: "bg-teal-100",   text: "text-teal-700"   },
};


function getProfColor(modality: string) {
  for (const [prof, style] of Object.entries(professorColors)) {
    if (modality.includes(prof)) return style;
  }
  return { bg: "bg-gray-100", text: "text-gray-600" };
}

export default function Horarios() {
  const [selectedUnit, setSelectedUnit] = useState(scheduleData[0].unit);
  const currentSchedule = scheduleData.find((u) => u.unit === selectedUnit)!;

  return (
    <section id="horarios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Planeje seu treino
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
            Grade de Horários
          </h2>
          <p className="text-gray-500 mt-4">
            Selecione a unidade para ver os horários disponíveis.
          </p>
        </motion.div>

        {/* Unit tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scheduleData.map((unit) => (
            <button
              key={unit.unit}
              onClick={() => setSelectedUnit(unit.unit)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                selectedUnit === unit.unit
                  ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                  : "bg-gray-100 text-charcoal hover:bg-gray-200"
              }`}
            >
              {unit.unit}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {Object.entries(professorColors).map(([prof, style]) => (
            <span
              key={prof}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
            >
              <span className={`w-2 h-2 rounded-full ${style.bg.replace("100","500")} border border-current`} />
              Prof. {prof}
            </span>
          ))}
        </div>

        {/* Table */}
        <motion.div
          key={selectedUnit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
        >
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="px-5 py-4 text-left font-semibold min-w-[200px] rounded-tl-2xl">
                  Modalidade
                </th>
                {days.map((day, i) => (
                  <th
                    key={day}
                    className={`px-3 py-4 text-center font-semibold min-w-[100px] ${
                      i === days.length - 1 ? "rounded-tr-2xl" : ""
                    }`}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentSchedule.schedule.map((row, i) => {
                const color = getProfColor(row.modality);
                const [name, prof] = row.modality.split(" — ");
                return (
                  <tr
                    key={row.modality}
                    className={`border-t border-gray-100 transition-colors hover:bg-gray-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/40"
                    }`}
                  >
                    <td className="px-5 py-3">
                      <span className="font-bold text-charcoal">{name}</span>
                      {prof && (
                        <span className={`ml-2 text-xs font-medium px-2 py-0.5 rounded-full ${color.bg} ${color.text}`}>
                          {prof}
                        </span>
                      )}
                    </td>
                    {days.map((day) => {
                      const val = row.times[day];
                      const isEmpty = !val || val === "—";
                      return (
                        <td key={day} className="px-3 py-3 text-center">
                          {isEmpty ? (
                            <span className="text-gray-200 select-none">—</span>
                          ) : (
                            <div className="flex flex-col gap-1">
                              {val!.split(" / ").map((t) => (
                                <span
                                  key={t}
                                  className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap ${color.bg} ${color.text}`}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-4">
          Aulas de 50 minutos · Grade sujeita a alterações · A partir de 13 anos
        </p>
      </div>
    </section>
  );
}
