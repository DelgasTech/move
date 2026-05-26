"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiMessageCircle, FiMapPin, FiClock } from "react-icons/fi";

interface HorarioItem {
  dias: string;
  horario: string;
}

interface UnidadeCardProps {
  slug: string;
  nome: string;
  descricao: string;
  endereco?: string;
  telRaw: string;
  mapsHref?: string;
  imageSrc?: string;
  invertido: boolean;
  horarios?: HorarioItem[];
}

export default function UnidadeCard({
  slug,
  nome,
  descricao,
  endereco,
  telRaw,
  mapsHref,
  imageSrc,
  invertido,
  horarios,
}: UnidadeCardProps) {
  const imagePath = imageSrc || `/images/unidades/${slug}.jpg`;
  const hasImage = !!imageSrc;

  const waMsg = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");

  return (
    <section id={slug} className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${invertido ? "lg:order-2" : "lg:order-1"} flex flex-col gap-3`}
          >
            <div className="relative h-[420px] rounded-3xl overflow-hidden bg-charcoal/40 border border-white/10 flex items-center justify-center">
              {hasImage ? (
                <Image src={imagePath} alt={nome} fill className="object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 text-white/20">
                  <div className="w-16 h-16 border-2 border-white/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-black text-white/20">?</span>
                  </div>
                  <p className="text-sm">Imagem em breve</p>
                </div>
              )}
            </div>
            {endereco && (
              <div className="flex items-start gap-2 text-gray-400 text-sm px-1">
                <FiMapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{endereco}</span>
              </div>
            )}
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: invertido ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`${invertido ? "lg:order-1" : "lg:order-2"} flex flex-col gap-6`}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              {nome}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              {descricao}
            </p>

            {/* Horários */}
            <div className="flex flex-col gap-4">
              {horarios && horarios.length > 0 && (
                <div className="flex items-start gap-3">
                  <FiClock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    {horarios.map((h) => (
                      <p key={h.dias} className="text-sm text-gray-400">
                        <span className="text-gray-500">{h.dias}:</span>{" "}
                        <span className={h.horario === "Fechado" ? "text-gray-600" : "text-gray-300 font-medium"}>
                          {h.horario}
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {mapsHref && (
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full transition-colors"
                >
                  <FiMapPin className="w-4 h-4" />
                  Como chegar
                </a>
              )}
              <a
                href={`https://wa.me/${telRaw}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold px-6 py-3 rounded-full transition-colors"
              >
                <FiMessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
