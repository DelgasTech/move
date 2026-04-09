"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fotos = [
  { src: "/assets/images/gallery/gallery-1.jpg", alt: "Área de musculação" },
  { src: "/assets/images/gallery/gallery-2.jpg", alt: "Bike Indoor" },
  { src: "/assets/images/gallery/gallery-3.jpg", alt: "Cross Training" },
  { src: "/assets/images/gallery/gallery-4.jpg", alt: "Pilates" },
  { src: "/assets/images/gallery/gallery-5.jpg", alt: "Espaço Kids" },
  { src: "/assets/images/gallery/gallery-6.jpg", alt: "Estrutura da academia" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Conheça o espaço
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Nossa Academia
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Estrutura completa e moderna para você alcançar seus objetivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {fotos.map((foto, index) => (
            <motion.div
              key={foto.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden bg-charcoal/40 border border-white/5 ${
                index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-sm">{foto.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
