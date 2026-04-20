"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { tvMoveStats } from "@/data/tvmove";

export default function TvMovePublico() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/corda.jpg" alt="" fill className="object-cover object-center" />
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
            Perfil de audiência
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            O Seu Público-Alvo Está Aqui
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Dados de março de 2025, obtidos pelo sistema de controle e catracas das 4 unidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — big stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Alunos por dia */}
            <div className="bg-dark-bg rounded-3xl p-8 border border-white/10">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Média diária de alunos</p>
              <p className="text-6xl font-black text-primary">
                {tvMoveStats.alunosDia.toLocaleString("pt-BR")}
              </p>
              <p className="text-white font-semibold mt-1">pessoas por dia em todas as unidades</p>
            </div>

            {/* Gênero */}
            <div className="bg-dark-bg rounded-3xl p-8 border border-white/10">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Distribuição por gênero</p>
              <div className="flex gap-6">
                <div className="flex-1">
                  <div className="text-4xl font-black text-primary">{tvMoveStats.mulheres}%</div>
                  <div className="text-white font-semibold mt-1">Mulheres</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${tvMoveStats.mulheres}%` }}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-black text-white">{tvMoveStats.homens}%</div>
                  <div className="text-gray-400 font-semibold mt-1">Homens</div>
                  <div className="mt-3 h-2 bg-white/10 rounded-full">
                    <div
                      className="h-2 bg-white/60 rounded-full"
                      style={{ width: `${tvMoveStats.homens}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — faixa etária */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-dark-bg rounded-3xl p-8 border border-white/10"
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Faixa etária</p>
            <div className="space-y-5">
              {tvMoveStats.faixaEtaria.map((item) => (
                <div key={item.faixa}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white font-medium text-sm">{item.faixa}</span>
                    <span className="text-primary font-bold text-sm">{item.percentual}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full">
                    <motion.div
                      className="h-2 bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.percentual / 25) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                <span className="text-white font-bold">44.4%</span> do público tem entre{" "}
                <span className="text-primary font-bold">20 e 39 anos</span> — poder de compra
                e alto engajamento com marcas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
