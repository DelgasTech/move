"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Equipe() {
  return (
    <section className="py-20 lg:py-28 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Uma Equipe Que{" "}
              <span className="text-primary">Vive</span> o Esporte
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Nossa equipe não é só instrutora — ela treina, compete e inspira. São profissionais
              apaixonados que vivem o que ensinam e estão prontos para te ajudar a superar seus limites.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Com profissionais certificados em musculação, cross training, pilates, bike indoor,
              fisioterapia e muito mais, a Move oferece o suporte completo que você precisa para
              evoluir de verdade.
            </p>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/equipe.jpg"
              alt="Equipe Move Academia"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                Time Move — Salto, SP
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
