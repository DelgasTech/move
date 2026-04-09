"use client";

import { motion } from "framer-motion";
import { FiVideo, FiClock, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const steps = [
  {
    icon: FiVideo,
    title: "Envie seu vídeo",
    desc: "Produza um vídeo de 15 ou 30 segundos com a sua marca e envie para aprovação da Move.",
  },
  {
    icon: FiCheckCircle,
    title: "Aprovação",
    desc: "Nossa equipe avalia o conteúdo. O áudio é removido — foque na identidade visual.",
  },
  {
    icon: FiClock,
    title: "No ar todos os dias",
    desc: "Seu anúncio entra na programação das TVs das unidades escolhidas e começa a rodar.",
  },
];

export default function TvMoveComoFunciona() {
  return (
    <section className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Simples assim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Como Funciona
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal/40 border border-white/10 rounded-3xl p-8 text-center hover:border-primary/40 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/30 rounded-2xl mb-5">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                Passo {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Formatos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {[
            { duracao: "30s", destaque: false },
            { duracao: "15s", destaque: true },
          ].map(({ duracao, destaque }) => (
            <div
              key={duracao}
              className={`relative rounded-3xl p-8 text-center border-2 ${
                destaque
                  ? "border-primary bg-charcoal shadow-xl shadow-primary/10"
                  : "border-white/10 bg-charcoal/30"
              }`}
            >
              {destaque && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Mais aparições
                </span>
              )}
              <div className="text-5xl font-black text-white mb-1">{duracao}</div>
              <div className="text-gray-400 text-sm">Duração do vídeo</div>
            </div>
          ))}
        </motion.div>

        {/* Aviso */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex items-start gap-3 max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-5"
        >
          <FiAlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm leading-relaxed">
            O conteúdo do vídeo está sujeito à aprovação pelo setor responsável da Move Academia.
            O áudio será removido na exibição nas telas — capriche na identidade visual!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
