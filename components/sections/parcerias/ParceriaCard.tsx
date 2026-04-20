"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiInstagram } from "react-icons/fi";

interface ParceriaCardProps {
  slug: string;
  nome: string;
  descricao: string;
  cta: string;
  ctaHref: string;
  instagram?: string;
  invertido: boolean;
}

export default function ParceriaCard({ slug, nome, descricao, cta, ctaHref, instagram, invertido }: ParceriaCardProps) {
  const imagePath = `/images/parcerias/${slug}.jpg`;

  return (
    <section className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={invertido ? "lg:order-2" : "lg:order-1"}
          >
            <div className="relative h-[420px] rounded-3xl overflow-hidden bg-charcoal/40 border border-white/10 flex items-center justify-center">
              <Image
                src={imagePath}
                alt={nome}
                fill
                className="object-cover"
                onError={() => {}}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/20">
                <div className="w-16 h-16 border-2 border-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-white/20">?</span>
                </div>
                <p className="text-sm">Imagem em breve</p>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={invertido ? "lg:order-1" : "lg:order-2"}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Parceiro Move
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
              {nome}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {descricao}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                {cta}
                <FiArrowRight className="w-4 h-4" />
              </a>
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold px-6 py-3 rounded-full transition-colors"
                >
                  <FiInstagram className="w-4 h-4" />
                  Instagram
                </a>
              )}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-gray-400 text-sm">
                Parceiro oficial <span className="text-white font-semibold">Move Academia</span>
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
