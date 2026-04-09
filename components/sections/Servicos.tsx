"use client";

import { motion } from "framer-motion";
import { FiMessageCircle, FiStar } from "react-icons/fi";
import { services } from "@/data/services";

const WA_NUMBER = "5511999999999";

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
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Serviços extras
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal mt-3">
            Serviços Adicionais
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Potencialize seus resultados com suporte especializado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-7 flex flex-col ${
                service.highlight
                  ? "bg-dark-bg border-2 border-primary text-white"
                  : "bg-gray-50 border border-gray-200 text-charcoal"
              }`}
            >
              {service.highlight && (
                <div className="flex items-center gap-1.5 mb-3">
                  <FiStar className="w-4 h-4 text-primary" />
                  <span className="text-primary text-xs font-bold uppercase tracking-wider">
                    Melhor custo-benefício
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${service.highlight ? "text-white" : "text-charcoal"}`}>
                {service.name}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${service.highlight ? "text-gray-400" : "text-gray-500"}`}>
                {service.description}
              </p>

              <div className="mb-5">
                <span className={`text-3xl font-black ${service.highlight ? "text-primary" : "text-charcoal"}`}>
                  R$ {service.price.toFixed(2).replace(".", ",")}
                </span>
                <span className={`text-sm ml-1 ${service.highlight ? "text-gray-400" : "text-gray-400"}`}>
                  /mês
                </span>
              </div>

              <a
                href={getWaLink(service.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 font-semibold py-3 rounded-full text-sm transition-colors ${
                  service.highlight
                    ? "bg-primary hover:bg-orange-500 text-white"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
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
