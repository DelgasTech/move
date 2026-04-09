import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EventoHero from "@/components/sections/eventos/EventoHero";
import EventoSobre from "@/components/sections/eventos/EventoSobre";
import EventoProgramacao from "@/components/sections/eventos/EventoProgramacao";
import EventoRegulamento from "@/components/sections/eventos/EventoRegulamento";
import EventoCotas from "@/components/sections/eventos/EventoCotas";
import EventoPatrocinadores from "@/components/sections/eventos/EventoPatrocinadores";

export const metadata: Metadata = {
  title: "Virada 24h — Desafio Wolf x Move | Move Academia",
  description:
    "Evento Virada 24h — Desafio Wolf x Move na Concha Acústica de Salto/SP. 24 horas de música e movimento.",
};

export default function EventosPage() {
  return (
    <>
      <Header />
      <main>
        <EventoHero />
        <EventoSobre />
        <EventoProgramacao />
        <EventoRegulamento />
        <EventoCotas />
        <EventoPatrocinadores />
      </main>
      <Footer />
    </>
  );
}
