"use client";

import { motion } from "framer-motion";
import { FiCheck, FiMessageCircle, FiArrowRight } from "react-icons/fi";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const WA = "5511910204226";

function waLink(msg: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

const modalities = [
  { name: "Beach Tennis", desc: "O esporte que mais cresce no Brasil, na areia de Salto." },
  { name: "Vôlei de Praia", desc: "Jogue e evolua com a comunidade Move na areia." },
  { name: "Futevôlei", desc: "Técnica, agilidade e diversão em quadra de areia." },
];

const diferenciais = [
  "Quadras de areia ao ar livre",
  "Ambiente descontraído e competitivo",
  "Comunidade Move na areia",
  "Aulas e treinos livres",
  "Para todas as idades e níveis",
];

export default function SmashPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pb-28 bg-dark-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(247,148,29,0.12)_0%,_transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Parceiro Move · Esportes de Areia
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
                  Smash<br />
                  <span className="text-primary">Move</span>
                </h1>
                <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-xl">
                  Beach tennis, vôlei de praia, futevôlei e muito mais — tudo na areia, ao ar livre, com a energia da comunidade Move.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={waLink("Olá! Quero saber mais sobre o Smash Move.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm"
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    Falar pelo WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/smashbtsalto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full transition-colors text-sm"
                  >
                    Instagram
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative h-[420px] rounded-3xl overflow-hidden bg-charcoal/40 border border-white/10">
                  <Image
                    src="/images/fachadas/SmashMove faixada.png"
                    alt="Smash Move"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modalidades */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Na quadra</span>
              <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">Modalidades</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {modalities.map((mod, i) => (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6"
                >
                  <h3 className="text-charcoal font-black text-lg mb-2">{mod.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{mod.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Por que o Smash</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Diferenciais</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {diferenciais.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-2 bg-charcoal/60 border border-white/10 rounded-full px-5 py-3"
                >
                  <FiCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm font-semibold">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Vem jogar na areia!
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Entre em contato e venha fazer parte da comunidade Smash Move.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={waLink("Olá! Quero saber mais sobre o Smash Move.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-orange-50 font-black px-8 py-4 rounded-full transition-colors text-sm"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  Falar pelo WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/smashbtsalto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-colors text-sm"
                >
                  Ver no Instagram
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
