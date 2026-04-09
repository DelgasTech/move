"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiArrowRight } from "react-icons/fi";

const WA_NUMBER = "5511999999999";
const WA_MESSAGE = encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Move Academia.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function CtaFinal() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Pronto para começar?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Fale com nossa equipe agora mesmo pelo WhatsApp e escolha o plano perfeito para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold px-8 py-4 rounded-full text-base hover:bg-gray-100 transition-colors shadow-xl"
            >
              <FiMessageCircle className="w-5 h-5" />
              Falar pelo WhatsApp
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full text-base hover:border-white hover:bg-white/10 transition-colors"
            >
              Ver os Planos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
