"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

export default function Hero() {
  const { openModal } = useWhatsAppModal();
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/90 to-dark-bg/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/halter.jpg"
          alt="Aluna treinando na Move Academia"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-primary/20 text-primary border border-primary/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Academia Move - Salto, SP
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Mova-se com{" "}
              <span className="text-primary">Saúde</span>
              <br />
              e Constância
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed text-justify hyphens-auto">
              Estrutura completa com diversas modalidades. Conheça nossas unidades em Salto e treine quando e onde quiser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openModal}
                className="bg-primary hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Faça sua Matrícula
              </button>
              <a
                href="/#quem-somos"
                className="border-2 border-white/30 hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full text-base transition-colors inline-flex items-center justify-center gap-2"
              >
                Conheça a Move
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
