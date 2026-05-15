"use client";

import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import { services } from "@/data/services";

const WA_NUMBER = "5511910204226";

function getWaLink(serviceName: string) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no serviço de ${serviceName} da Move Academia.`
  );
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
            Serviços Adicionais
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Potencialize seus resultados com suporte especializado.
          </p>
          <p className="text-gray-400 text-sm mt-1 italic">Consulte nossas recepções.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-7 flex flex-col bg-gray-50 border border-gray-200 text-charcoal"
            >
              <h3 className="text-xl font-bold mb-2 text-charcoal">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed mb-6 flex-1 text-gray-500">
                {service.description}
              </p>

              <a
                href={getWaLink(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold py-3 rounded-full text-sm transition-colors mt-auto border-2 border-primary text-primary hover:bg-primary hover:text-white"
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
