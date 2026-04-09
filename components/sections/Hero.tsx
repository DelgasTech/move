"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiChevronDown } from "react-icons/fi";

const WA_NUMBER = "5511999999999";
const WA_MESSAGE = encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Move Academia.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-charcoal to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Academia Move — Salto, SP
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Uma Nova{" "}
            <span className="text-primary">Experiência</span>
            <br />
            em Academia
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Musculação, Bike Indoor, Cross Training, Pilates, Fisioterapia e muito mais.
            4 unidades em Salto para você treinar onde quiser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#planos"
              className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full text-base transition-colors inline-flex items-center justify-center gap-2"
            >
              Ver Planos
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full text-base transition-colors inline-flex items-center justify-center gap-2"
            >
              <FiMessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "4", label: "Unidades" },
            { value: "9+", label: "Modalidades" },
            { value: "100%", label: "Dedicação" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
