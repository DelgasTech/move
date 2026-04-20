import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ParceriasHero from "@/components/sections/parcerias/ParceriasHero";
import ParceriaCard from "@/components/sections/parcerias/ParceriaCard";

export const metadata: Metadata = {
  title: "Parcerias | Move Academia",
  description: "Conheça as marcas parceiras da Move Academia — Moutonnée Move e Smash Move.",
};

export default function ParceriasPage() {
  return (
    <>
      <Header />
      <main>
        <ParceriasHero />
        <ParceriaCard
          slug="moutonnee"
          nome="Moutonnée Move"
          descricao="A Moutonnée Move é a nossa parceria para quem quer levar o treino funcional a outro nível. Com metodologia de alta intensidade, equipamentos exclusivos e professores especializados, é o espaço ideal para quem busca performance e superação."
          cta="Como chegar"
          ctaHref="https://www.google.com/maps/dir//Moutonn%C3%A9e+Move,+R.+Esc%C3%B3cia,+799+-+Jardim+Elizabeth,+Salto+-+SP,+13326-010/@-23.1243776,-47.251456,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf53616ceefb67:0x558fefbf5598eec1!2m2!1d-47.3084846!2d-23.1915871?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
          invertido={false}
        />
        <ParceriaCard
          slug="smash-move"
          nome="Smash Move"
          descricao="O Smash Move é a nossa parceria no universo dos esportes de areia. Beach tennis, vôlei de praia, futevôlei e muito mais — tudo na areia, ao ar livre, com a energia e a comunidade que só o esporte de praia proporciona. Um ambiente descontraído e competitivo para jogar, socializar e evoluir junto com a família Move."
          cta="Como chegar"
          ctaHref="https://www.google.com/maps/dir//Av.+Bras%C3%ADlia,+580+-+Jardim+D'icarai,+Salto+-+SP,+13327-100/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf52414f73cd45:0x162e283856eb008d?sa=X&ved=1t:707&ictx=111"
          instagram="https://www.instagram.com/smashbtsalto/"
          invertido={true}
        />
      </main>
      <Footer />
    </>
  );
}
