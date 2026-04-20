"use client";

export default function TreinoAvancado() {
  return (
    <main className="min-h-screen bg-dark-bg p-8 max-w-2xl mx-auto print:p-4 print:bg-white">
      <div className="print:block">
        <div className="flex items-center justify-between mb-6 border-b-2 border-primary pb-4">
          <div>
            <h1 className="text-3xl font-black text-white uppercase">Move Academia</h1>
            <p className="text-primary font-semibold">Matriz de Treino — Avançado</p>
          </div>
          <button
            onClick={() => window.print()}
            className="print:hidden bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-orange-500 transition"
          >
            Salvar PDF
          </button>
        </div>

        <div className="mb-4 p-3 bg-charcoal rounded text-sm text-gray-300">
          <strong>Frequência:</strong> 5x por semana &nbsp;|&nbsp;
          <strong>Duração:</strong> 75–90 min &nbsp;|&nbsp;
          <strong>Descanso:</strong> 30–45s entre séries
        </div>

        {[
          {
            dia: "Dia A — Peito (Volume)",
            exercicios: [
              { nome: "Supino Reto (Barra)", series: "5x6-8", obs: "Carga máxima controlada" },
              { nome: "Supino Inclinado (Barra)", series: "4x10", obs: "Foco na porção superior" },
              { nome: "Supino Declinado (Halteres)", series: "3x12", obs: "Porção inferior" },
              { nome: "Crossover Baixo", series: "3x15", obs: "Ênfase superior do peitoral" },
              { nome: "Mergulho (Barras)", series: "3x falha", obs: "Inclinar para frente" },
            ],
          },
          {
            dia: "Dia B — Costas (Força)",
            exercicios: [
              { nome: "Levantamento Terra", series: "5x5", obs: "Barra rente ao corpo" },
              { nome: "Barra Fixa Lastrada", series: "4x8", obs: "Pegada pronada larga" },
              { nome: "Remada Curvada (Barra)", series: "4x10", obs: "Cotovelo acima do tronco" },
              { nome: "Remada Unilateral (Halter)", series: "3x12", obs: "Rotação da escápula" },
              { nome: "Pullover (Halter)", series: "3x15", obs: "Alongar no final" },
            ],
          },
          {
            dia: "Dia C — Pernas (Hipertrofia)",
            exercicios: [
              { nome: "Agachamento (Barra)", series: "5x8", obs: "ATG se mobilidade permitir" },
              { nome: "Hack Squat", series: "4x10", obs: "Pés baixos e fechados" },
              { nome: "Avanço com Barra (Caminh.)", series: "3x12", obs: "Passadas longas" },
              { nome: "Cadeira Extensora (Drop-set)", series: "3x15+falha", obs: "Drop 30% na falha" },
              { nome: "Mesa Flexora", series: "4x12", obs: "3s na fase excêntrica" },
              { nome: "Panturrilha Sentado", series: "5x20", obs: "Pause 1s no estiramento" },
            ],
          },
          {
            dia: "Dia D — Ombros + Tríceps",
            exercicios: [
              { nome: "Desenvolvimento Militar (Barra)", series: "4x8", obs: "Em pé, core contraído" },
              { nome: "Elevação Lateral (Cabo)", series: "4x15", obs: "Tensão constante" },
              { nome: "Elevação Posterior (Halter)", series: "3x15", obs: "Tronco paralelo ao chão" },
              { nome: "Tríceps Testa (EZ)", series: "4x10", obs: "Cotovelos para dentro" },
              { nome: "Tríceps Francês (Cabo)", series: "3x12", obs: "Cotovelos altos" },
            ],
          },
          {
            dia: "Dia E — Bíceps + Core",
            exercicios: [
              { nome: "Rosca Direta (Barra EZ)", series: "4x10", obs: "Sem momentum" },
              { nome: "Rosca Scott (Máquina)", series: "3x12", obs: "Extensão completa" },
              { nome: "Rosca Martelo", series: "3x12", obs: "Braquiorradial" },
              { nome: "Prancha com Peso", series: "4x45s", obs: "Anilha nas costas" },
              { nome: "Dragon Flag", series: "3x8", obs: "Controlado na descida" },
              { nome: "Oblíquo (Cabo)", series: "3x15", obs: "Cada lado" },
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
                  <th className="text-center p-2 border border-charcoal text-gray-300 w-24">Séries</th>
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
