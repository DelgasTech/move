import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ParceriasHero from "@/components/sections/parcerias/ParceriasHero";
import ParceriaCard from "@/components/sections/parcerias/ParceriaCard";

export const metadata: Metadata = {
  title: "Parcerias | Move Academia",
  description: "Conheça as marcas parceiras da Move Academia — Cross e Smash Move.",
};

export default function ParceriasPage() {
  return (
    <>
      <Header />
      <main>
        <ParceriasHero />
        <ParceriaCard
          slug="cross"
          nome="Cross"
          descricao="O Cross é a nossa parceria para quem quer levar o treino funcional a outro nível. Com metodologia de alta intensidade, equipamentos exclusivos e professores especializados, é o espaço ideal para quem busca performance e superação."
          cta="Conhecer o Cross"
          invertido={false}
        />
        <ParceriaCard
          slug="smash-move"
          nome="Smash Move"
          descricao="O Smash Move é a nossa parceria no universo dos esportes de areia. Beach tennis, vôlei de praia, futevôlei e muito mais — tudo na areia, ao ar livre, com a energia e a comunidade que só o esporte de praia proporciona. Um ambiente descontraído e competitivo para jogar, socializar e evoluir junto com a família Move."
          cta="Conhecer o Smash Move"
          invertido={true}
        />
      </main>
      <Footer />
    </>
  );
}
