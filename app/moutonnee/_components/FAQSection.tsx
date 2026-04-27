"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  { q: "Posso fazer musculação?", a: "Sim, está incluso no plano." },
  { q: "Tem limite de aulas?", a: "Não, acesso ilimitado a todas as modalidades." },
  { q: "Posso testar antes de assinar?", a: "Sim, oferecemos aula experimental mediante agendamento pelo WhatsApp." },
  { q: "Tem convênio?", a: "Sim, aceitamos Wellhub Silver+ e TotalPass TP2." },
  { q: "Sou aluno Move e quero migrar. Tem taxa?", a: "Não há taxa de cancelamento." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-white font-semibold text-sm hover:text-primary transition-colors"
      >
        {q}
        <FiChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-gray-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 bg-charcoal/20 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Dúvidas</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Perguntas Frequentes</h2>
        </motion.div>
        <div className="divide-y divide-white/10 border-t border-white/10">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
