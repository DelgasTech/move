import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrabalheHero from "@/components/sections/trabalhe/TrabalheHero";
import TrabalheDiferenciais from "@/components/sections/trabalhe/TrabalheDiferenciais";
import TrabalheForm from "@/components/sections/trabalhe/TrabalheForm";

export const metadata: Metadata = {
  title: "Trabalhe Conosco | Move Academia",
  description:
    "Faça parte do time Move Academia. Vagas para Personal Trainer, Instrutor de Dança, Fisioterapia, Nutrição e mais.",
};

export default function TrabalhePage() {
  return (
    <>
      <Header />
      <main>
        <TrabalheHero />
        <TrabalheDiferenciais />
        <TrabalheForm />
      </main>
      <Footer />
    </>
  );
}
