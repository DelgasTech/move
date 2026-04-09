"use client";

import { motion } from "framer-motion";
import { eventSchedule } from "@/data/events";

export default function EventoProgramacao() {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Agenda completa
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Programação
          </h2>
        </motion.div>

        <div className="space-y-12">
          {eventSchedule.map((day, dayIndex) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-white font-black px-4 py-2 rounded-xl text-sm">
                  {day.date}
                </div>
                <span className="text-gray-400 font-medium">{day.label}</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="space-y-3">
                {day.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex gap-4 items-start bg-charcoal/30 border border-white/5 rounded-xl px-5 py-4"
                  >
                    <span className="text-primary font-bold text-sm min-w-[110px] shrink-0">
                      {item.time}
                    </span>
                    <div>
                      <p className="text-white font-semibold">{item.activity}</p>
                      {item.instructor && (
                        <p className="text-gray-400 text-sm mt-0.5">{item.instructor}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
