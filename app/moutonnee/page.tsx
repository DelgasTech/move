import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MoutonneeContent from "./_components/MoutonneeContent";

export const metadata: Metadata = {
  title: "Moutonnée Move | Cross Training, Hyrox e Musculação em Salto, SP",
  description:
    "Box de Cross Training, Hyrox e Musculação em Salto, SP. Estrutura premium, professores especializados e planos a partir de 12x R$189,90. Aceita Wellhub e TotalPass.",
  keywords: [
    "crossfit salto sp",
    "cross training salto",
    "hyrox salto",
    "musculação salto",
    "moutonnée move",
    "box crossfit salto",
    "academia salto sp",
  ],
  openGraph: {
    title: "Moutonnée Move — Cross Training, Hyrox e Musculação em Salto, SP",
    description:
      "Box de Cross Training, Hyrox e Musculação em Salto. Planos a partir de 12x R$189,90. Wellhub Silver+ e TotalPass TP2.",
    url: "https://moveacademia.com.br/moutonnee",
    siteName: "Moutonnée Move",
    locale: "pt_BR",
    type: "website",
  },
};

export default function MoutoннeePage() {
  return (
    <>
      <Header />
      <main>
        <MoutonneeContent />
      </main>
      <Footer />
    </>
  );
}
