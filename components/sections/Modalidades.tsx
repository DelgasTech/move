"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { modalities } from "@/data/modalities";

export default function Modalidades() {
  return (
    <section id="modalidades" className="relative py-20 lg:py-28 bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/halteres.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-transparent to-dark-bg/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Nossas Modalidades
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            13 modalidades distribuídas nas nossas unidades para você escolher o treino ideal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-charcoal/40 border border-white/5 rounded-2xl p-6 hover:border-primary/50 hover:bg-charcoal/60 transition-all duration-300 cursor-default"
            >
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">{mod.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{mod.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {mod.units.map((unit) => (
                  <span
                    key={unit}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/15 text-primary/90 border border-primary/20"
                  >
                    {unit}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
