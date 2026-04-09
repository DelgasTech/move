"use client";

import { motion } from "framer-motion";

export default function TrabalheHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Junte-se ao time
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Faça parte do{" "}
            <span className="text-primary">time Move</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Buscamos profissionais apaixonados por saúde, movimento e pessoas. Se você quer crescer
            em um ambiente dinâmico e transformador, envie sua candidatura.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
