"use client";

import Image from "next/image";
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
    <section id="diferenciais" className="py-20 lg:py-28 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/corda.jpg"
              alt="Aluna Move Academia com corda"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
          </motion.div>

          {/* Conteúdo */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Por que a Move?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
                Nossos Diferenciais
              </h2>
            </motion.div>

            <div className="flex flex-col gap-6">
              {diferenciais.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-orange-100"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
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
