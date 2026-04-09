"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiUsers } from "react-icons/fi";

export default function EventoSobre() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O evento
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">
            Sobre o Virada 24h
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: <FiMapPin className="w-6 h-6" />, title: "Local", text: "Concha Acústica de Salto, SP" },
            { icon: <FiClock className="w-6 h-6" />, title: "Duração", text: "24 horas contínuas de atividades" },
            { icon: <FiUsers className="w-6 h-6" />, title: "Formato", text: "Desafio Wolf × Move — equipes de 24 atletas" },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-primary-light rounded-2xl p-6"
            >
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Uma celebração épica onde academia Wolf e academia Move se unem para criar 24 horas
          inesquecíveis de música ao vivo, aulões, dança e muita energia na Concha Acústica de Salto/SP.
        </motion.p>
      </div>
    </section>
  );
}
