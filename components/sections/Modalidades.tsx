"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiHeart,
  FiUser,
  FiMusic,
  FiZap,
} from "react-icons/fi";
import { GiWeightLiftingUp, GiCycle, GiRunningShoe, GiFirstAidKit } from "react-icons/gi";
import { modalities } from "@/data/modalities";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  dumbbell: <GiWeightLiftingUp className="w-8 h-8" />,
  bike: <GiCycle className="w-8 h-8" />,
  running: <GiRunningShoe className="w-8 h-8" />,
  cross: <FiZap className="w-8 h-8" />,
  music: <FiMusic className="w-8 h-8" />,
  pilates: <FiActivity className="w-8 h-8" />,
  heart: <FiHeart className="w-8 h-8" />,
  firstaid: <GiFirstAidKit className="w-8 h-8" />,
  user: <FiUser className="w-8 h-8" />,
};

export default function Modalidades() {
  return (
    <section id="modalidades" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O que oferecemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Nossas Modalidades
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            9 modalidades para você escolher o treino ideal para cada objetivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalities.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-charcoal/40 border border-white/5 rounded-2xl p-6 hover:border-primary/50 hover:bg-charcoal/60 transition-all duration-300 cursor-default"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {iconMap[mod.icon]}
              </div>
              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {mod.name.replace("Move", "MOV\u0045").split("MOVE").map((part, i) => (
                  i === 0 ? part : <>MOV<span className="text-primary">E</span>{part}</>
                ))}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
