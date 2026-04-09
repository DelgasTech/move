"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiHeart, FiTrendingUp, FiUsers } from "react-icons/fi";

const items = [
  {
    icon: <FiMapPin className="w-7 h-7" />,
    title: "4 Unidades",
    description: "Oportunidades em todas as unidades de Salto/SP.",
  },
  {
    icon: <FiHeart className="w-7 h-7" />,
    title: "Equipe Apaixonada",
    description: "Time unido pelo amor ao movimento e à saúde.",
  },
  {
    icon: <FiTrendingUp className="w-7 h-7" />,
    title: "Crescimento",
    description: "Incentivo à capacitação e desenvolvimento profissional.",
  },
  {
    icon: <FiUsers className="w-7 h-7" />,
    title: "Comunidade",
    description: "Faça parte de uma comunidade que transforma vidas.",
  },
];

export default function TrabalheDiferenciais() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal">
            Por que trabalhar na Move?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-orange-100"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
