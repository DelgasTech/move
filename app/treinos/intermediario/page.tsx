"use client";

export default function TreinoIntermediario() {
  return (
    <main className="min-h-screen bg-dark-bg p-8 max-w-2xl mx-auto print:p-4 print:bg-white">
      <div className="print:block">
        <div className="flex items-center justify-between mb-6 border-b-2 border-primary pb-4">
          <div>
            <h1 className="text-3xl font-black text-white uppercase">Move Academia</h1>
            <p className="text-primary font-semibold">Matriz de Treino — Intermediário</p>
          </div>
          <button
            onClick={() => window.print()}
            className="print:hidden bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-orange-500 transition"
          >
            Salvar PDF
          </button>
        </div>

        <div className="mb-4 p-3 bg-charcoal rounded text-sm text-gray-300">
          <strong>Frequência:</strong> 4x por semana &nbsp;|&nbsp;
          <strong>Duração:</strong> 60–75 min &nbsp;|&nbsp;
          <strong>Descanso:</strong> 45–60s entre séries
        </div>

        {[
          {
            dia: "Dia A — Peito + Tríceps",
            exercicios: [
              { nome: "Supino Reto (Barra)", series: "4x10", obs: "Barra toca o peito" },
              { nome: "Supino Inclinado (Halteres)", series: "3x12", obs: "Amplitude máxima" },
              { nome: "Crossover (Polia Alta)", series: "3x15", obs: "Contração no centro" },
              { nome: "Tríceps Testa (Barra)", series: "3x12", obs: "Cotovelos fixos" },
              { nome: "Tríceps Corda", series: "3x15", obs: "Abrir na descida" },
            ],
          },
          {
            dia: "Dia B — Costas + Bíceps",
            exercicios: [
              { nome: "Barra Fixa (Pegada Larga)", series: "4x8", obs: "Puxar escápulas" },
              { nome: "Remada Curvada (Barra)", series: "4x10", obs: "Cotovelos para trás" },
              { nome: "Pulldown Pegada Fechada", series: "3x12", obs: "Peito no apoio" },
              { nome: "Rosca Alternada (Halteres)", series: "3x12", obs: "Supinar no topo" },
              { nome: "Rosca Concentrada", series: "3x15", obs: "Cotovelo na coxa" },
            ],
          },
          {
            dia: "Dia C — Pernas",
            exercicios: [
              { nome: "Agachamento (Barra)", series: "4x10", obs: "Profundidade 90°" },
              { nome: "Leg Press 45°", series: "4x12", obs: "Pés médios" },
              { nome: "Cadeira Extensora", series: "3x15", obs: "Contração isométrica" },
              { nome: "Mesa Flexora", series: "3x15", obs: "Sem arcar" },
              { nome: "Stiff (Halteres)", series: "3x12", obs: "Sentir o isquio" },
              { nome: "Panturrilha em Pé", series: "4x20", obs: "3s na descida" },
            ],
          },
          {
            dia: "Dia D — Ombros + Core",
            exercicios: [
              { nome: "Desenvolvimento (Halteres)", series: "4x10", obs: "Não arquear lombar" },
              { nome: "Elevação Lateral", series: "4x15", obs: "Leve flexão cotovelo" },
              { nome: "Elevação Frontal", series: "3x12", obs: "Altura dos ombros" },
              { nome: "Face Pull (Polia)", series: "3x15", obs: "Cotovelos altos" },
              { nome: "Prancha", series: "3x45s", obs: "Quadril neutro" },
              { nome: "Abdominal Oblíquo", series: "3x20", obs: "Cada lado" },
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
