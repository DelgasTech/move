"use client";

import { motion } from "framer-motion";
import { eventSponsors } from "@/data/events";

const tierColors: Record<string, string> = {
  diamante: "#B9F2FF",
  ouro: "#FFD700",
  prata: "#C0C0C0",
  bronze: "#CD7F32",
};

const tierLabels: Record<string, string> = {
  diamante: "Diamante",
  ouro: "Ouro",
  prata: "Prata",
  bronze: "Bronze",
};

export default function EventoPatrocinadores() {
  const tiers = ["diamante", "ouro", "prata", "bronze"] as const;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Apoio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-charcoal mt-3">
            Patrocinadores
          </h2>
        </motion.div>

        {tiers.map((tier) => {
          const tierSponsors = eventSponsors.filter((s) => s.tier === tier);
          if (tierSponsors.length === 0) return null;

          return (
            <div key={tier} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tierColors[tier] }}
                />
                <span
                  className="font-bold text-sm uppercase tracking-wider"
                  style={{ color: tierColors[tier] }}
                >
                  {tierLabels[tier]}
                </span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="flex flex-wrap gap-4">
                {tierSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 flex items-center justify-center min-w-[140px]"
                  >
                    <span className="font-bold text-charcoal text-sm">{sponsor.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
