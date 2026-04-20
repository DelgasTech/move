"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrabalheHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/85 to-dark-bg/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/equipe.jpg"
          alt="Equipe Move Academia"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Junte-se ao time
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Faça parte do{" "}
            <span className="text-primary">time Move</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Buscamos profissionais apaixonados por saúde, movimento e pessoas. Se você quer crescer
            em um ambiente dinâmico e transformador, envie sua candidatura.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
