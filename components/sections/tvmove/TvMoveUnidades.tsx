"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiClock, FiTv } from "react-icons/fi";
import { tvUnidades } from "@/data/tvmove";

export default function TvMoveUnidades() {
  return (
    <section id="unidades" className="relative py-20 lg:py-28 bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/halter.jpg" alt="" fill className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/60 via-transparent to-dark-bg/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            4 unidades disponíveis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Dados de Exibição por Unidade
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Escolha uma ou mais unidades e maximize o alcance da sua marca.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tvUnidades.map((unidade, i) => (
            <motion.div
              key={unidade.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-bg rounded-3xl border border-white/10 overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Header da unidade */}
              <div className="bg-primary/10 border-b border-white/10 px-8 py-5 flex items-center gap-3">
                <FiTv className="w-5 h-5 text-primary" />
                <h3 className="text-white font-bold text-lg">
                  Move {unidade.nome}
                </h3>
              </div>

              <div className="p-8 space-y-8">
                {/* Horários */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FiClock className="w-4 h-4 text-primary" />
                    <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
                      Horário de funcionamento
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {unidade.horarios.map((h) => (
                      <li key={h.dias} className="flex justify-between text-sm">
                        <span className="text-gray-400">{h.dias}</span>
                        <span className="text-white font-medium">{h.horario}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Métricas */}
                <div>
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">
                    Dados de exibição (diários)
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-charcoal/50 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-black text-primary">{unidade.exibicao30s}</div>
                      <div className="text-gray-400 text-xs mt-1">aparições/dia (vídeo 30s)</div>
                    </div>
                    <div className="bg-charcoal/50 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-black text-white">{unidade.exibicao15s}</div>
                      <div className="text-gray-400 text-xs mt-1">aparições/dia (vídeo 15s)</div>
                    </div>
                    <div className="bg-charcoal/50 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-black text-primary">{unidade.minutosDia}<span className="text-lg">min</span></div>
                      <div className="text-gray-400 text-xs mt-1">em contato com o cliente/dia</div>
                    </div>
                    <div className="bg-charcoal/50 rounded-2xl p-4 text-center">
                      <div className="text-3xl font-black text-white">{unidade.horasMes}<span className="text-lg">h</span></div>
                      <div className="text-gray-400 text-xs mt-1">vendendo seu produto/mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
