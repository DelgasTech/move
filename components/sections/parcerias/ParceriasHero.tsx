"use client";

import { motion } from "framer-motion";

export default function ParceriasHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Ecossistema Move
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Marcas que fazem<br />
            <span className="text-primary">parte da família</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            O universo Move vai além da academia. Conheça as marcas parceiras que compartilham
            os mesmos valores de saúde, movimento e comunidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
