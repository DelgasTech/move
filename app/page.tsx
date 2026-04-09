import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Modalidades from "@/components/sections/Modalidades";
import Horarios from "@/components/sections/Horarios";
import Planos from "@/components/sections/Planos";
import Servicos from "@/components/sections/Servicos";
import Diferenciais from "@/components/sections/Diferenciais";
import CtaFinal from "@/components/sections/CtaFinal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <Horarios />
        <Planos />
        <Servicos />
        <Diferenciais />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
