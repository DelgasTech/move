"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const WA_NUMBER = "5511999999999";
const WA_MSG = encodeURIComponent(
  "Olá! Tenho interesse em anunciar minha marca nas TVs da Move Academia."
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

export default function TvMoveCta() {
  return (
    <section className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Movimente seu negócio!
            </h2>
            <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Fale com a nossa equipe comercial e saiba como colocar sua marca
              em evidência para milhares de pessoas todos os dias.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary font-black px-10 py-4 rounded-full hover:bg-orange-50 transition-colors text-lg shadow-xl"
            >
              <FiMessageCircle className="w-6 h-6" />
              Quero anunciar na Move
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
