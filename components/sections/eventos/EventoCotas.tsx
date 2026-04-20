"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { sponsorshipTiers } from "@/data/events";

const WA_NUMBER = "5511910204226";

function getWaLink(tier: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse na cota ${tier} do evento Virada 24h da Move Academia.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function EventoCotas() {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Seja um parceiro
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Cotas de Patrocínio
          </h2>
          <p className="text-gray-400 mt-4">
            Associe sua marca a um dos maiores eventos esportivos da região.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sponsorshipTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-charcoal/40 border border-white/10 rounded-2xl p-6 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl mb-4"
                style={{ backgroundColor: tier.color + "33", border: `2px solid ${tier.color}` }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-1" style={{ color: tier.color }}>
                {tier.name}
              </h3>
              <p className="text-3xl font-black text-white mb-4">
                R$ {tier.price.toLocaleString("pt-BR")}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={getWaLink(tier.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2.5 rounded-full text-sm transition-colors"
              >
                <FiMessageCircle className="w-4 h-4" />
                Saber mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
