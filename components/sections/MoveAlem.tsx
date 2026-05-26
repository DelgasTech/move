"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const parceiros = [
  {
    href: "/smash",
    label: "SmashMove",
    descricao: "Beach Tennis, Futevôlei e esportes de areia.",
    imageSrc: "/images/fachadas/SmashMove faixada.png",
  },
  {
    href: "/moutonnee",
    label: "Moutonnée Move",
    descricao: "Cross Training e Hyrox de alto nível.",
    imageSrc: "/images/fachadas/fachada montounne move.jpeg",
  },
];

export default function MoveAlem() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Ecossistema Move
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
            Move além da academia
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Explore as nossas unidades parceiras e leve seu treino ainda mais longe.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {parceiros.map((p, i) => (
            <motion.a
              key={p.href}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gray-50 border border-gray-200 hover:border-primary/50 rounded-2xl overflow-hidden w-full sm:w-80 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={p.imageSrc}
                  alt={p.label}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-5">
                <div>
                  <p className="text-charcoal font-black text-lg">{p.label}</p>
                  <p className="text-gray-500 text-sm mt-1">{p.descricao}</p>
                </div>
                <FiArrowRight className="w-5 h-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
