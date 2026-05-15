"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Somos a <span className="text-primary">Move.</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Desde 2019, ajudamos pessoas a se movimentarem com mais saúde, segurança e constância.
              </p>
              <p>
                Com seis unidades e uma estrutura completa, oferecemos musculação, aulas coletivas,
                Crossfit, Hyrox, pilates e acompanhamento profissional integrado, com fisioterapia
                inclusa no plano.
              </p>
              <p>
                Acreditamos em um treino possível, adaptado à rotina e às necessidades de cada aluno.
              </p>
              <p>
                Mais do que uma academia, somos um espaço de cuidado, orientação e evolução contínua.
              </p>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl bg-dark-bg"
          >
            <Image
              src="/images/joao e marina.jpg"
              alt="João e Marina, fundadores da Move Academia"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
              <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full self-start">
                João Paulo e Marina - Fundadores
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
