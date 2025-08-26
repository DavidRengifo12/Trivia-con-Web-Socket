import { useState } from "react";

export default function PlayerView({ socket }) {
  const [selected, setSelected] = useState(null);

  const question = {
    text: "¿Qué es un gestor de base de datos?",
    options: [
      "Crea, gestiona y administra",
      "Diseño interfaz",
      "Historia usuarios",
      "HTML, CSS y JS",
    ],
  };

  const sendAnswer = (index) => {
    setSelected(index);
    if (socket) {
      socket.emit("answer", { answer: index });
    }
  };

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="flex w-full max-w-5xl gap-6">
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 w-64">
          <h2 className="text-lg font-bold mb-2">Jugador</h2>
          <p className="text-sm text-gray-400 mb-1">
            Sala: <span className="font-mono text-cyan-400">83NYVL</span>
          </p>
          <p className="text-sm text-gray-400 mb-1">
            Estado: <span className="text-yellow-400">Esperando ronda...</span>
          </p>
          <p className="text-sm text-gray-400 mb-4"> Tiempo restante: 5s</p>

          <h3 className="text-md font-semibold mb-2"> Marcador</h3>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li className="text-cyan-400">yo: 0</li>
          </ul>
        </div>

        <div className="flex-1 bg-gray-800 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-6">Pregunta 1</h2>
          <p className="text-lg mb-8 text-center">{question.text}</p>

          <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => sendAnswer(i)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selected === i
                    ? "border-cyan-500 bg-cyan-600 text-white"
                    : "border-gray-600 bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
