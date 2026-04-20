"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  from: "bot" | "user";
  text: string;
  link?: { href: string; label: string };
};

type Step = "inicio" | "nivel" | "done";

const NIVEL_MAP: Record<string, { label: string; href: string }> = {
  iniciante: { label: "Treino Iniciante", href: "/treinos/iniciante" },
  intermediario: { label: "Treino Intermediário", href: "/treinos/intermediario" },
  avancado: { label: "Treino Avançado", href: "/treinos/avancado" },
};

const OPTIONS: Record<Step, { label: string; value: string }[]> = {
  inicio: [
    { label: "Sim, quero meu treino!", value: "sim" },
    { label: "Só estou explorando", value: "nao" },
  ],
  nivel: [
    { label: "Iniciante", value: "iniciante" },
    { label: "Intermediário", value: "intermediario" },
    { label: "Avançado", value: "avancado" },
  ],
  done: [],
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("inicio");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Olá! Sou o assistente da Move Academia 💪 Posso te enviar uma matriz de treino personalizada. Quer começar?",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function handleOption(value: string) {
    if (step === "inicio") {
      if (value === "nao") {
        setMessages((m) => [
          ...m,
          { from: "user", text: "Só estou explorando" },
          { from: "bot", text: "Sem problema! Qualquer hora que quiser, é só chamar 😊" },
        ]);
        setStep("done");
        return;
      }
      setMessages((m) => [
        ...m,
        { from: "user", text: "Sim, quero meu treino!" },
        { from: "bot", text: "Ótimo! Qual é o seu nível de experiência na musculação?" },
      ]);
      setStep("nivel");
      return;
    }

    if (step === "nivel") {
      const treino = NIVEL_MAP[value];
      setMessages((m) => [
        ...m,
        { from: "user", text: OPTIONS.nivel.find((o) => o.value === value)?.label ?? value },
        {
          from: "bot",
          text: `Perfeito! Aqui está sua matriz de treino. Clique abaixo para visualizar e salvar como PDF:`,
          link: { href: treino.href, label: `Ver ${treino.label}` },
        },
        {
          from: "bot",
          text: "Na página do treino, clique em **Salvar PDF** para baixar. Bons treinos! 💪",
        },
      ]);
      setStep("done");
      return;
    }
  }

  function restart() {
    setStep("inicio");
    setMessages([
      {
        from: "bot",
        text: "Olá! Sou o assistente da Move Academia 💪 Posso te enviar uma matriz de treino personalizada. Quer começar?",
      },
    ]);
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 right-6 z-50 bg-primary hover:bg-orange-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Abrir chat de treinos"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16c0 1.1-.9 2-2 2H5l-4 4V6a2 2 0 012-2h16a2 2 0 012 2v10z" />
          </svg>
        )}
      </button>

      {/* Painel do chat */}
      {open && (
        <div className="fixed bottom-44 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-sm">
              M
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Assistente Move</p>
              <p className="text-orange-200 text-xs">Treinos personalizados</p>
            </div>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                    msg.from === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                  {msg.link && (
                    <a
                      href={msg.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-orange-500 transition w-fit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                      {msg.link.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Opções / Reiniciar */}
          <div className="p-3 bg-white border-t border-gray-100">
            {step !== "done" ? (
              <div className="flex flex-col gap-2">
                {OPTIONS[step].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOption(opt.value)}
                    className="text-sm bg-gray-100 hover:bg-red-50 hover:text-primary hover:border-primary border border-gray-200 rounded-xl px-3 py-2 text-left transition font-medium"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={restart}
                className="w-full text-sm text-gray-500 hover:text-primary transition py-1"
              >
                Recomeçar conversa
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
