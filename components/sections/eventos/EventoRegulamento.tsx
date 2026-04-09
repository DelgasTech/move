"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const rules = [
  "O desafio conta com 24 atletas participantes.",
  "Cada atleta cumpre 1 hora de atividade contínua por vez.",
  "Cada atleta pode participar no máximo 3 vezes ao longo do evento.",
  "A revezamento entre atletas deve ser feito de forma organizada conforme escala.",
  "A participação é voluntária e todos os atletas devem estar em boa condição física.",
  "Em caso de desistência, o próximo atleta da lista assume imediatamente.",
  "Todos os participantes devem usar o colete identificador da equipe.",
  "A equipe que completar mais horas acumuladas vence o Desafio Wolf × Move.",
];

export default function EventoRegulamento() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">
            Regulamento do Desafio
          </h2>
        </motion.div>

        <div className="space-y-4">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-start gap-3 bg-primary-light rounded-xl px-5 py-4"
            >
              <FiCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-charcoal text-sm leading-relaxed">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
