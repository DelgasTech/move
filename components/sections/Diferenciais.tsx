"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiShoppingBag, FiUsers } from "react-icons/fi";

const diferenciais = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    title: "Espaço Kids",
    description:
      "Área dedicada para os pequenos se divertirem enquanto você treina com tranquilidade.",
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "App de Reservas",
    description:
      "Reserve suas aulas pelo aplicativo Move com facilidade e nunca perca seu horário favorito.",
  },
  {
    icon: <FiShoppingBag className="w-8 h-8" />,
    title: "Loja Move",
    description:
      "Suplementos, acessórios e linha de produtos exclusivos Move para potencializar seus treinos.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Por que a Move?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-orange-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
