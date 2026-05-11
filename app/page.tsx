import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuemSomos from "@/components/sections/QuemSomos";
import Modalidades from "@/components/sections/Modalidades";
import Diferenciais from "@/components/sections/Diferenciais";
import Planos from "@/components/sections/Planos";
import HorariosFuncionamento from "@/components/sections/HorariosFuncionamento";
import CtaFinal from "@/components/sections/CtaFinal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Modalidades />
        <Diferenciais />
        <Planos />
        <HorariosFuncionamento />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
