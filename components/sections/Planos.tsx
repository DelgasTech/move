"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiMessageCircle, FiAlertCircle } from "react-icons/fi";
import { plans, partners, extraPricing, type PricePeriod } from "@/data/plans";

const WA_NUMBER = "5511910204226";

function getWaLink(planName: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no plano ${planName} da Move Academia.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

const periods: { key: PricePeriod; label: string }[] = [
  { key: "anual", label: "Anual" },
  { key: "semestral", label: "Semestral" },
  { key: "mensal", label: "Mensal" },
];

export default function Planos() {
  const [period, setPeriod] = useState<PricePeriod>("mensal");

  return (
    <section id="planos" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Invista na sua saúde
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Nossos Planos
          </h2>
          <p className="text-gray-400 mt-4">Escolha o período e o plano ideal para você.</p>
        </motion.div>

        {/* Period toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-charcoal/50 p-1 rounded-full flex gap-1">
            {periods.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setPeriod(key)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  period === key
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-charcoal border-2 border-primary shadow-2xl shadow-primary/20"
                  : "bg-charcoal/50 border border-white/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-gray-400 text-sm">R$</span>
                  <span className="text-5xl font-black text-white leading-none">
                    {plan.prices[period]}
                  </span>
                  <span className="text-gray-400 text-sm mb-1">/mês</span>
                </div>
                {period !== "mensal" && (
                  <p className="text-primary text-xs mt-1 font-medium">
                    {period === "anual" ? "Pagamento anual" : "Pagamento semestral"}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWaLink(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-full transition-colors text-sm ${
                  plan.highlight
                    ? "bg-primary hover:bg-orange-500 text-white"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                <FiMessageCircle className="w-4 h-4" />
                Contratar via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
        {/* Extra pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-center text-white font-black text-xl mb-6">Outras Opções</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {extraPricing.map((item) => (
              <div key={item.label} className="bg-charcoal/50 border border-white/10 rounded-2xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-1">{item.label}</p>
                <p className="text-white font-black text-2xl">R$ {item.price}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners — Wellhub & Totalpass */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center text-white font-black text-2xl mb-2">Convênios</h3>
          <p className="text-center text-gray-400 text-sm mb-8">Acesse a Move pelo seu benefício.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {partners.map((p, i) => (
              <div key={i} className="bg-charcoal/50 border border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-black text-lg">{p.name}</span>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">{p.tier}</span>
                </div>
                <p className="text-gray-400 text-xs">{p.units}</p>
                {p.includes.length > 0 && (
                  <ul className="space-y-1.5">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-300 text-xs">
                        <FiCheck className="w-3 h-3 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {p.obs && (
                  <div className="flex items-start gap-2 mt-auto pt-3 border-t border-white/10 text-gray-500 text-xs">
                    <FiAlertCircle className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span>{p.obs}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
