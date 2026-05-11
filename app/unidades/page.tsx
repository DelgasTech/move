import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UnidadesHero from "@/components/sections/unidades/UnidadesHero";
import UnidadeCard from "@/components/sections/unidades/UnidadeCard";
import ParceriaCard from "@/components/sections/parcerias/ParceriaCard";

export const metadata: Metadata = {
  title: "Unidades | Move Academia",
  description: "Conheça todas as unidades da Move Academia em Salto, SP academia, beach tennis, funcional e muito mais.",
};

const unidades = [
  {
    slug: "sete-de-setembro",
    nome: "Sete de Setembro",
    descricao: "A unidade Sete de Setembro, no Vila Henrique, une localização estratégica e estrutura de alto nível. Um ambiente acolhedor, com toda a metodologia Move, para você treinar com foco, constância e os melhores profissionais ao seu lado.",
    telRaw: "5511971071020",
    mapsHref: "https://maps.app.goo.gl/b8Gh1E8PSiPYqJYU8",
    imageSrc: "/images/fachadas/fachada sete de setembro.jpg",
    invertido: false,
  },
  {
    slug: "central-parque",
    nome: "Central Parque",
    descricao: "A unidade Central Parque é a nossa referência no Jardim Celani. Com espaço amplo, variedade de modalidades e um ambiente moderno e energético, é o lugar perfeito para quem busca evolução constante em um dos melhores centros de treinamento da cidade.",
    telRaw: "5511934461020",
    mapsHref: "https://www.google.com/maps/dir/-23.1243776,-47.251456/Move+-+Central+Parque,+Av.+Get%C3%BAlio+Vargas,+770+-+Piso+1+-+Jardim+Celani,+Salto+-+SP,+13326-185/@-23.1620744,-47.3189233,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94cf5304b22be769:0x937b69c90efbcaac!2m2!1d-47.307373!2d-23.1909294?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
    imageSrc: "/images/fachadas/fachada central parque.jpg",
    invertido: true,
  },
  {
    slug: "rondon",
    nome: "Rondon",
    descricao: "A unidade Rondon é a nossa casa no Jardim da Cidade. Com estrutura completa de musculação, aulas coletivas e equipamentos modernos, é o espaço ideal para quem mora ou trabalha nessa região e quer treinar com qualidade e conforto.",
    telRaw: "5519998866581",
    mapsHref: "https://www.google.com/maps/dir//Move+-+Rondon+-+R.+Botucatu,+74+-+Jardim+da+Cidade,+Salto+-+SP,+13323-080/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf4f7b3e63e5fd:0xf628a5c4fd7422ba?sa=X&ved=1t:57443&ictx=111",
    imageSrc: "/images/fachadas/fachada-rondon.png",
    invertido: false,
  },
  {
    slug: "rui-barbosa",
    nome: "Rui Barbosa",
    descricao: "No coração do Centro de Salto, a unidade Rui Barbosa oferece praticidade para quem quer encaixar o treino na rotina do dia a dia. Estrutura completa, professores qualificados e toda a energia da Move para impulsionar seus resultados.",
    telRaw: "5511918441020",
    mapsHref: "https://www.google.com/maps/dir//Move+-+Rui+Barbosa+-+R.+Rui+Barbosa,+672+-+Centro,+Salto+-+SP,+13320-230/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf513c7ec597b1:0x141f75856c97702?sa=X&ved=1t:57443&ictx=111",
    imageSrc: "",
    invertido: true,
  },
];

const unidadesEsportivas = [
  {
    slug: "moutonnee",
    nome: "Moutonnée Move",
    descricao: "A Moutonnée Move é a nossa parceria para quem quer levar o treino funcional a outro nível. Com metodologia de alta intensidade, equipamentos exclusivos e professores especializados, é o espaço ideal para quem busca performance e superação.",
    cta: "Como chegar",
    ctaHref: "https://www.google.com/maps/dir//Moutonn%C3%A9e+Move,+R.+Esc%C3%B3cia,+799+-+Jardim+Elizabeth,+Salto+-+SP,+13326-010/@-23.1243776,-47.251456,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cf53616ceefb67:0x558fefbf5598eec1!2m2!1d-47.3084846!2d-23.1915871?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
    imageSrc: "/images/fachadas/fachada montounne move.jpeg",
    pageHref: "/moutonnee",
    instagram: "https://www.instagram.com/moutonneemove/",
    invertido: false,
  },
  {
    slug: "smash-move",
    nome: "SmashMove",
    descricao: "O SmashMove é a nossa parceria no universo dos esportes de areia. Beach tennis, vôlei de praia, futevôlei e muito mais, tudo na areia, ao ar livre, com a energia e a comunidade que só o esporte de praia proporciona. Um ambiente descontraído e competitivo para jogar, socializar e evoluir junto com a família Move.",
    cta: "Como chegar",
    ctaHref: "https://www.google.com/maps/dir//Av.+Bras%C3%ADlia,+580+-+Jardim+D'icarai,+Salto+-+SP,+13327-100/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf52414f73cd45:0x162e283856eb008d?sa=X&ved=1t:707&ictx=111",
    pageHref: "/smash",
    instagram: "https://www.instagram.com/smashbtsalto/",
    imageSrc: "/images/fachadas/SmashMove faixada.png",
    invertido: true,
  },
];

export default function UnidadesPage() {
  return (
    <>
      <Header />
      <main>
        <UnidadesHero />

        {unidades.map((unidade) => (
          <UnidadeCard key={unidade.slug} {...unidade} />
        ))}

        {unidadesEsportivas.map((u) => (
          <ParceriaCard key={u.slug} {...u} />
        ))}
      </main>
      <Footer />
    </>
  );
}
