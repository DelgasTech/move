import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TvMoveHero from "@/components/sections/tvmove/TvMoveHero";
import TvMovePublico from "@/components/sections/tvmove/TvMovePublico";
import TvMoveComoFunciona from "@/components/sections/tvmove/TvMoveComoFunciona";
import TvMoveUnidades from "@/components/sections/tvmove/TvMoveUnidades";
import TvMoveCta from "@/components/sections/tvmove/TvMoveCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TV Move — Anuncie na Academia | Move Academia",
  description:
    "Anuncie sua marca nas telas da Move Academia e alcance +1.600 pessoas por dia. Mídia indoor em 4 unidades em Salto/SP.",
};

export default function AnunciePage() {
  return (
    <>
      <Header />
      <main>
        <TvMoveHero />
        <TvMovePublico />
        <TvMoveComoFunciona />
        <TvMoveUnidades />
        <TvMoveCta />
      </main>
      <Footer />
    </>
  );
}
