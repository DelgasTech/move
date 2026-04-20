"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMessageCircle, FiTv } from "react-icons/fi";

const WA_NUMBER = "5511999999999";
const WA_MSG = encodeURIComponent(
  "Olá! Tenho interesse em anunciar minha marca nas TVs da Move Academia."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function TvMoveHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-dark-bg overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/halteres.jpg"
          alt="Move Academia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-bg/75" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <FiTv className="w-4 h-4" />
            TV Move — Mídia Indoor
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Seu público-alvo<br />
            <span className="text-primary">está aqui.</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Anuncie sua marca nas telas das academias Move e alcance{" "}
            <span className="text-white font-bold">+1.600 pessoas todos os dias</span> enquanto
            treinam — atentas, presentes e no seu melhor estado de espírito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors text-base"
            >
              <FiMessageCircle className="w-5 h-5" />
              Quero anunciar na Move
            </a>
            <a
              href="#unidades"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:border-primary hover:text-primary font-bold px-8 py-4 rounded-full transition-colors text-base"
            >
              Ver dados por unidade
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
