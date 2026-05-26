"use client";

import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiMessageCircle } from "react-icons/fi";

type HorarioItem = {
  dias: string;
  horario: string;
};

type UnidadeHorario = {
  nome: string;
  horarios: HorarioItem[];
  mapsHref: string;
  telRaw: string;
};

const unidades: UnidadeHorario[] = [
  {
    nome: "Sete de Setembro",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 22h00" },
      { dias: "Sábados e Feriados", horario: "07h00 às 12h00" },
      { dias: "Domingo", horario: "Fechado" },
    ],
    mapsHref: "https://maps.app.goo.gl/b8Gh1E8PSiPYqJYU8",
    telRaw: "5511971071020",
  },
  {
    nome: "Central Parque",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 00h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
    mapsHref: "https://www.google.com/maps/dir/-23.1243776,-47.251456/Move+-+Central+Parque,+Av.+Get%C3%BAlio+Vargas,+770+-+Piso+1+-+Jardim+Celani,+Salto+-+SP,+13326-185/@-23.1620744,-47.3189233,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94cf5304b22be769:0x937b69c90efbcaac!2m2!1d-47.307373!2d-23.1909294?entry=ttu",
    telRaw: "5511934461020",
  },
  {
    nome: "Rondon",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 00h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
    mapsHref: "https://www.google.com/maps/dir//Move+-+Rondon+-+R.+Botucatu,+74+-+Jardim+da+Cidade,+Salto+-+SP,+13323-080/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf4f7b3e63e5fd:0xf628a5c4fd7422ba?sa=X&ved=1t:57443&ictx=111",
    telRaw: "5519998866581",
  },
  {
    nome: "Rui Barbosa",
    horarios: [
      { dias: "Segunda a Sexta", horario: "05h00 às 01h00" },
      { dias: "Sábados e Domingos", horario: "07h00 às 16h00" },
      { dias: "Feriados", horario: "07h00 às 12h00" },
    ],
    mapsHref: "https://www.google.com/maps/dir//Move+-+Rui+Barbosa+-+R.+Rui+Barbosa,+672+-+Centro,+Salto+-+SP,+13320-230/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x94cf513c7ec597b1:0x141f75856c97702?sa=X&ved=1t:57443&ictx=111",
    telRaw: "5511918441020",
  },
];

function waLink(tel: string) {
  const msg = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.");
  return `https://wa.me/${tel}?text=${msg}`;
}

export default function HorariosFuncionamento() {
  return (
    <section id="horarios" className="py-20 lg:py-28 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Quando treinar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Horários de Funcionamento
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Consulte os horários de cada unidade e planeje seu treino.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {unidades.map((unidade, i) => (
            <motion.div
              key={unidade.nome}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-5"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FiClock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-white font-bold text-base leading-tight">{unidade.nome}</h3>
              </div>

              {/* Horários */}
              <div className="flex flex-col gap-3 flex-1">
                {unidade.horarios.map((h) => (
                  <div key={h.dias} className="border-t border-white/10 pt-3 first:border-0 first:pt-0">
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{h.dias}</p>
                    <p className={`font-semibold text-sm ${h.horario === "Fechado" ? "text-gray-500" : "text-white"}`}>
                      {h.horario}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ações */}
              <div className="flex gap-2 pt-3 border-t border-white/10">
                <a
                  href={unidade.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Como chegar"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-gray-300 hover:text-primary rounded-2xl py-2.5 text-xs font-semibold transition-all"
                >
                  <FiMapPin className="w-4 h-4" />
                  Como chegar
                </a>
                <a
                  href={waLink(unidade.telRaw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500/40 text-gray-300 hover:text-green-400 rounded-2xl py-2.5 text-xs font-semibold transition-all"
                >
                  <FiMessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
