"use client";

import { motion } from "framer-motion";

export default function EventoHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-charcoal/50 to-dark-bg" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Hexagon logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-28 h-28 bg-primary rounded-2xl mb-8 shadow-2xl shadow-primary/30"
        >
          <span className="text-white font-black text-2xl leading-tight text-center">
            24<br />
            <span className="text-xs font-bold">HORAS</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">
            Wolf × Move — Desafio
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4">
            Virada 24h
          </h1>
          <p className="text-2xl font-bold text-primary mb-6">
            08 e 09 de Novembro de 2025
          </p>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Concha Acústica de Salto/SP — 24 horas de música, movimento e superação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
