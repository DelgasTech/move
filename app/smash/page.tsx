import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FiInstagram, FiMessageCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "SmashMove | Move Academia",
  description: "SmashMove - esportes de areia em Salto, SP. Beach tennis, vôlei de praia, futevôlei e muito mais. Em breve com página completa.",
};

export default function SmashPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Unidade Move · Esportes de Areia
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mt-4 mb-6">
            Smash <span className="text-primary">Move</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            A Move está trabalhando por aqui. Em breve teremos uma página completa com tudo sobre o SmashMove: beach tennis, vôlei de praia, futevôlei e muito mais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/smashbtsalto/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              <FiInstagram className="w-4 h-4" />
              Nos siga no Instagram
            </a>
            <a
              href="https://wa.me/5511910204226?text=Olá! Quero saber mais sobre o SmashMove."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-primary text-white hover:text-primary font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              <FiMessageCircle className="w-4 h-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
