"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { scheduleData, days } from "@/data/schedule";

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
          <p className="text-gray-500 mt-4">Selecione a unidade para ver os horários disponíveis.</p>
        </motion.div>

        {/* Unit filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {scheduleData.map((unit) => (
            <button
              key={unit.unit}
              onClick={() => setSelectedUnit(unit.unit)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                selectedUnit === unit.unit
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-charcoal hover:bg-gray-200"
              }`}
            >
              {unit.unit}
            </button>
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
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-bg text-white">
                <th className="px-4 py-4 text-left font-semibold min-w-[160px]">Modalidade</th>
                {days.map((day) => (
                  <th key={day} className="px-3 py-4 text-center font-semibold min-w-[90px]">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentSchedule.schedule.map((row, i) => (
                <tr
                  key={row.modality}
                  className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-3 font-semibold text-charcoal">{row.modality}</td>
                  {days.map((day) => (
                    <td key={day} className="px-3 py-3 text-center text-gray-600">
                      {row.times[day] === "—" || !row.times[day] ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="bg-primary-light text-primary font-medium px-2 py-1 rounded-lg text-xs whitespace-nowrap">
                          {row.times[day]}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <p className="text-center text-gray-400 text-xs mt-4">
          * Horários sujeitos a alteração. Confirme com a unidade.
        </p>
      </div>
    </section>
  );
}
