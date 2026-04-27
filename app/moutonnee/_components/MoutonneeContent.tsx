"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck, FiMessageCircle, FiClock } from "react-icons/fi";

const WA = "5511978246761";

function waLink(msg: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

const plans = [
  { id: "mensal", name: "Mensal", price: "250", installments: null, highlight: false, badge: null },
  { id: "anual-recorrente", name: "Anual Recorrente", price: "217", installments: "12x", highlight: true, badge: "Mais Popular" },
  { id: "anual-cartao", name: "Anual Cartão", price: "189,90", installments: "12x", highlight: false, badge: "Melhor Preço" },
];

const comboPlans = [
  { name: "Mensal", price: "365", installments: null },
  { name: "Semestral", price: "325", installments: "12x" },
  { name: "Anual", price: "289,90", installments: "12x" },
];

const modalities = ["Cross Training", "Hyrox", "Recovery"];

const schedule = [
  { days: "Segunda a Sexta", hours: "05h às 22h" },
  { days: "Sábado", hours: "07h às 11h" },
  { days: "Domingo", hours: "07h às 11h" },
  { days: "Feriados", hours: "07h às 09h" },
];

export default function MoutonneeContent() {
  return (
    <>
      {/* Hero — fachada full screen */}
      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <Image
          src="/images/fachadas/fachada montounne move.jpeg"
          alt="Moutonnée Move"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Unidade Move · Box de CrossFit — Salto, SP
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
              Moutonnée<br />
              <span className="text-primary">Move</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-xl">
              Cross Training, Hyrox e Recovery com estrutura premium, professores especializados e uma comunidade que impulsiona seus resultados.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={waLink("Olá! Quero conhecer o Moutonnée Move e saber mais sobre os planos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm"
              >
                <FiMessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/dir//Moutonn%C3%A9e+Move,+R.+Esc%C3%B3cia,+799+-+Jardim+Elizabeth,+Salto+-+SP,+13326-010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold px-8 py-4 rounded-full transition-colors text-sm"
              >
                Como chegar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="py-20 bg-charcoal/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">O que você treina</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Modalidades</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {modalities.map((mod, i) => (
              <motion.div
                key={mod}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-charcoal/60 border border-white/10 rounded-2xl p-6 text-center"
              >
                <h3 className="text-white font-black text-lg">{mod}</h3>
                <p className="text-gray-500 text-xs mt-1">Acesso ilimitado</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="py-20 lg:py-28 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Invista no seu treino</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">Planos Moutonnée Move</h2>
            <p className="text-gray-400 mt-4">Cross Training + Hyrox + Recovery · Acesso ilimitado</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                <h3 className="text-white font-black text-lg mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-2">
                  {plan.installments && <span className="text-gray-400 text-sm mb-1">{plan.installments}</span>}
                  <span className="text-gray-400 text-sm">R$</span>
                  <span className="text-4xl font-black text-white leading-none">{plan.price}</span>
                  {!plan.installments && <span className="text-gray-400 text-sm mb-1">/mês</span>}
                </div>
                <ul className="space-y-2 mb-8 flex-1 mt-4">
                  {["Acesso ilimitado", "Cross Training", "Hyrox", "Recovery", "Professores especializados"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FiCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Olá! Tenho interesse no plano ${plan.name} do Moutonnée Move.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-bold py-3 rounded-full transition-colors text-sm ${
                    plan.highlight
                      ? "bg-primary hover:bg-orange-500 text-white"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  <FiMessageCircle className="w-4 h-4" />
                  Contratar
                </a>
              </motion.div>
            ))}
          </div>

          {/* Day Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 max-w-4xl mx-auto bg-charcoal/30 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div>
              <h4 className="text-white font-black text-lg">Day Use</h4>
              <p className="text-gray-400 text-sm mt-1">Acesso livre no dia · Cross, Hyrox ou Recovery</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-white">R$ 50<span className="text-gray-400 text-base font-normal">,00</span></span>
              <a
                href={waLink("Olá! Quero fazer um Day Use no Moutonnée Move.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                <FiMessageCircle className="w-4 h-4" />
                Agendar
              </a>
            </div>
          </motion.div>

          {/* Combo Move + Moutonnée */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Combo exclusivo</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">Move Academia + Moutonnée Move</h3>
              <p className="text-gray-400 text-sm mt-2">Plano Start Move + acesso completo ao Box Moutonnée</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {comboPlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-charcoal/50 border border-primary/30 rounded-2xl p-6 text-center"
                >
                  <h4 className="text-white font-black mb-3">{plan.name}</h4>
                  <div className="flex items-end justify-center gap-1">
                    {plan.installments && <span className="text-gray-400 text-xs mb-1">{plan.installments} R$</span>}
                    {!plan.installments && <span className="text-gray-400 text-xs mb-1">R$</span>}
                    <span className="text-3xl font-black text-white leading-none">{plan.price}</span>
                    {!plan.installments && <span className="text-gray-400 text-xs mb-1">/mês</span>}
                  </div>
                  <ul className="space-y-1.5 mt-4 text-left">
                    {["Box Moutonnée Move", "Plano Start Academia Move"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FiCheck className="w-3 h-3 text-primary flex-shrink-0" />
                        <span className="text-gray-400 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Olá! Tenho interesse no combo Move + Moutonnée - plano ${plan.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 rounded-full transition-colors text-sm"
                  >
                    Contratar
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Convênios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h4 className="text-center text-white font-black text-xl mb-6">Convênios aceitos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Wellhub", tier: "Silver+", obs: "1 check-in por dia · Cross, Hyrox ou Recovery" },
                { name: "TotalPass", tier: "TP2", obs: "1 check-in por dia · Cross, Hyrox ou Recovery" },
              ].map((c) => (
                <div key={c.name} className="bg-charcoal/40 border border-white/10 rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-white font-black text-lg">{c.name}</span>
                    <p className="text-gray-500 text-xs mt-1">{c.obs}</p>
                  </div>
                  <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{c.tier}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Horários */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Quando treinar</span>
            <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">Horários de Funcionamento</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {schedule.map((s, i) => (
              <motion.div
                key={s.days}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-charcoal rounded-2xl p-5 text-center"
              >
                <FiClock className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{s.days}</p>
                <p className="text-white font-black text-lg mt-1">{s.hours}</p>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Pronto para começar?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Agende sua aula experimental gratuitamente e conheça o Moutonnée Move.
            </p>
            <a
              href={waLink("Olá! Quero agendar minha aula experimental no Moutonnée Move.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-orange-50 font-black px-8 py-4 rounded-full transition-colors text-sm"
            >
              <FiMessageCircle className="w-5 h-5" />
              Agendar aula experimental
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
