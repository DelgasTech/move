import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import QuemSomos from "@/components/sections/QuemSomos";
import Modalidades from "@/components/sections/Modalidades";
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
        <QuemSomos />
        <Modalidades />
        <Diferenciais />
        <Servicos />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
