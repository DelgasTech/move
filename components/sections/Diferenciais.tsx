"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingBag, FiUsers, FiActivity, FiSmartphone } from "react-icons/fi";
import { SiApple, SiGoogleplay } from "react-icons/si";
import { useState, useEffect } from "react";

const carouselImages = [
  { src: "/images/corda.jpg",     alt: "Aluna Move Academia com corda" },
  { src: "/images/halter.jpg",    alt: "Treino de musculação Move" },
  { src: "/images/time move.jpg", alt: "Time Move Academia" },
  { src: "/images/equipe.jpg",    alt: "Equipe Move Academia" },
];

const diferenciais = [
  {
    icon: <FiActivity className="w-7 h-7" />,
    title: "Fisioterapia Inclusa",
    description:
      "Nossa maior diferença: fisioterapia profissional já inclusa no plano. Cuidado e prevenção de lesões desde o primeiro dia, sem custo adicional. Disponível na unidade Sete de Setembro.",
    extra: null,
  },
  {
    icon: <FiUsers className="w-7 h-7" />,
    title: "Espaço Kids",
    description:
      "Área dedicada para os pequenos se divertirem enquanto você treina com tranquilidade. Disponível nas unidades Rondon e Central Parque.",
    extra: null,
  },
  {
    icon: <FiShoppingBag className="w-7 h-7" />,
    title: "Loja Move",
    description:
      "Suplementos, acessórios e linha de produtos exclusivos Move para potencializar seus treinos.",
    extra: null,
  },
  {
    icon: <FiSmartphone className="w-7 h-7" />,
    title: "App de Reservas",
    description:
      "Acompanhe seu treino, reserve suas aulas e nunca perca seu horário favorito pelo app da Move.",
    extra: (
      <div className="flex gap-3 mt-3">
        <a
          href="#"
          className="flex items-center gap-2 bg-charcoal text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-primary transition-colors"
        >
          <SiApple className="w-4 h-4" />
          App Store
        </a>
        <a
          href="#"
          className="flex items-center gap-2 bg-charcoal text-white text-xs font-semibold px-3 py-2 rounded-xl hover:bg-primary transition-colors"
        >
          <SiGoogleplay className="w-4 h-4" />
          Google Play
        </a>
      </div>
    ),
  },
];

export default function Diferenciais() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

          {/* Carrossel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={carouselImages[current].src}
                  alt={carouselImages[current].alt}
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-5" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Por que a Move?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
                Nossos Diferenciais
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {diferenciais.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 flex items-start gap-4 shadow-sm border border-orange-100"
                >
                  {item.icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl text-primary shrink-0">
                      {item.icon}
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed text-justify hyphens-auto">{item.description}</p>
                    {item.extra}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
