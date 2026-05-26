"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const units = [
  { name: "Sete de Setembro", tel: "5511971071020" },
  { name: "Central Parque",   tel: "5511934461020" },
  { name: "Rondon",           tel: "5519998866581" },
  { name: "Rui Barbosa",      tel: "5511918441020" },
];

function waLink(tel: string) {
  const msg = encodeURIComponent("Olá! Tenho interesse em conhecer os planos da Move Academia.");
  return `https://wa.me/${tel}?text=${msg}`;
}

export default function WhatsAppModal() {
  const { isOpen, closeModal } = useWhatsAppModal();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="bg-dark-bg border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-black text-xl">Fale com uma unidade</h2>
          <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-400 text-sm mb-6">Escolha a unidade mais próxima de você:</p>

        <ul className="flex flex-col gap-3">
          {units.map((u) => (
            <li key={u.name}>
              <a
                href={waLink(u.tel)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="flex items-center justify-between w-full bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/40 rounded-2xl px-5 py-4 transition-all group"
              >
                <span className="text-white font-semibold text-sm">{u.name}</span>
                <span className="text-primary text-xs font-bold group-hover:underline">WhatsApp →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
