"use client";

export default function TreinoIniciante() {
  return (
    <main className="min-h-screen bg-dark-bg p-8 max-w-2xl mx-auto print:p-4 print:bg-white">
      <div className="print:block">
        <div className="flex items-center justify-between mb-6 border-b-2 border-primary pb-4">
          <div>
            <h1 className="text-3xl font-black text-white uppercase">Move Academia</h1>
            <p className="text-primary font-semibold">Matriz de Treino — Iniciante</p>
          </div>
          <button
            onClick={() => window.print()}
            className="print:hidden bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-orange-500 transition"
          >
            Salvar PDF
          </button>
        </div>

        <div className="mb-4 p-3 bg-charcoal rounded text-sm text-gray-300">
          <strong>Frequência:</strong> 3x por semana &nbsp;|&nbsp;
          <strong>Duração:</strong> 50–60 min &nbsp;|&nbsp;
          <strong>Descanso:</strong> 60–90s entre séries
        </div>

        {[
          {
            dia: "Dia A — Corpo Todo",
            exercicios: [
              { nome: "Agachamento Livre", series: "3x12", obs: "Foco na postura" },
              { nome: "Supino Máquina", series: "3x12", obs: "Cotovelos a 45°" },
              { nome: "Remada Baixa (Polia)", series: "3x12", obs: "Peito no apoio" },
              { nome: "Leg Press 45°", series: "3x15", obs: "Não travar joelhos" },
              { nome: "Desenvolvimento Máquina", series: "3x12", obs: "Amplitude completa" },
              { nome: "Prancha", series: "3x30s", obs: "Core contraído" },
            ],
          },
          {
            dia: "Dia B — Inferior + Core",
            exercicios: [
              { nome: "Cadeira Extensora", series: "3x15", obs: "Contração no topo" },
              { nome: "Mesa Flexora", series: "3x15", obs: "Sem arcar lombar" },
              { nome: "Panturrilha em Pé", series: "4x20", obs: "Completa amplitude" },
              { nome: "Abdução de Quadril", series: "3x15", obs: "Movimento lento" },
              { nome: "Abdominal Supra", series: "3x20", obs: "Sem puxar pescoço" },
              { nome: "Elevação de Pernas", series: "3x15", obs: "Controlado" },
            ],
          },
          {
            dia: "Dia C — Superior",
            exercicios: [
              { nome: "Puxada Frontal", series: "3x12", obs: "Peito à frente" },
              { nome: "Supino Inclinado Máquina", series: "3x12", obs: "Foco no peitoral" },
              { nome: "Rosca Direta (Barra)", series: "3x12", obs: "Sem balanço" },
              { nome: "Tríceps Corda (Polia)", series: "3x12", obs: "Cotovelos fixos" },
              { nome: "Elevação Lateral", series: "3x15", obs: "Leve inclinação" },
              { nome: "Encolhimento de Ombros", series: "3x15", obs: "Sem girar" },
            ],
          },
        ].map((bloco) => (
          <div key={bloco.dia} className="mb-6">
            <h2 className="text-lg font-bold text-white bg-primary px-3 py-2 rounded-t">
              {bloco.dia}
            </h2>
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-charcoal">
                  <th className="text-left p-2 border border-charcoal text-gray-300">Exercício</th>
                  <th className="text-center p-2 border border-charcoal text-gray-300 w-20">Séries</th>
                  <th className="text-left p-2 border border-charcoal text-gray-300">Observação</th>
                </tr>
              </thead>
              <tbody>
                {bloco.exercicios.map((ex, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-dark-bg" : "bg-charcoal/40"}>
                    <td className="p-2 border border-charcoal font-medium text-white">{ex.nome}</td>
                    <td className="p-2 border border-charcoal text-center text-primary font-bold">
                      {ex.series}
                    </td>
                    <td className="p-2 border border-charcoal text-gray-400">{ex.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <p className="text-xs text-gray-600 mt-6 text-center print:block">
          Move Academia · Salto/SP · Treino gerado pelo assistente virtual
        </p>
      </div>
    </main>
  );
}
